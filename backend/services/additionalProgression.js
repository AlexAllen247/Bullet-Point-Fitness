function calculateComprehensiveProgressionOptions(
  currentReps,
  currentWeight,
  increasePercentage = 5,
) {
  const repPercentages = {
    6: 0.875,
    7: 0.85,
    8: 0.825,
    9: 0.8,
    10: 0.775,
    11: 0.75,
    12: 0.725,
    13: 0.7,
    14: 0.675,
    15: 0.65,
  };

  let currentVolumeLoad = currentReps * currentWeight;
  let targetVolumeLoad = currentVolumeLoad * (1 + increasePercentage / 100);
  let estimated1RM = currentWeight / repPercentages[currentReps];
  let progressionOptions = {};

  Object.entries(repPercentages).forEach(([repsString, percentOf1RM]) => {
    const reps = parseInt(repsString);
    let targetWeight = Math.round((estimated1RM * percentOf1RM) / 2.5) * 2.5; // Adjust to practical weight increments

    let directVolumeLoad = reps * targetWeight;
    if (directVolumeLoad >= targetVolumeLoad) {
      progressionOptions[
        `${reps} reps`
      ] = `${targetWeight} kg for direct progression`;
    } else {
      // For lower reps, calculate necessary weight and possibly include drop sets
      let initialSetWeight = targetWeight;
      let initialSetVolumeLoad = reps * initialSetWeight;
      let remainingVolumeLoad = targetVolumeLoad - initialSetVolumeLoad;

      let dropSets = [];
      if (remainingVolumeLoad > 0) {
        let dropSetWeight = initialSetWeight - 2.5; // Start with a slightly reduced weight
        while (remainingVolumeLoad > 0 && dropSetWeight > 0) {
          let dropSetReps = Math.min(
            Math.ceil(remainingVolumeLoad / dropSetWeight),
            reps,
          ); // Aim for similar rep count
          remainingVolumeLoad -= dropSetReps * dropSetWeight;
          dropSets.push(`+ ${dropSetReps} reps at ${dropSetWeight} kg`);
          dropSetWeight -= 2.5; // Reduce weight for next drop set
        }
      }

      progressionOptions[`${reps} reps with drop sets`] =
        `${reps} reps at ${initialSetWeight} kg, ` + dropSets.join(", ");
    }
  });

  return progressionOptions;
}

// Example usage
const userCurrentReps = 10;
const userCurrentWeight = 20; // Implying a certain % of 1RM
const progressionOptions = calculateComprehensiveProgressionOptions(
  userCurrentReps,
  userCurrentWeight,
);
console.log("Progression Options:", progressionOptions);
