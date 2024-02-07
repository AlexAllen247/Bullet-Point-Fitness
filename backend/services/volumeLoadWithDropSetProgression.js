function calculateProgressionOptionsForAllReps(
  currentReps,
  currentWeight,
  increasePercentage = 5,
) {
  const repPercentages = {
    15: 0.65,
    14: 0.675,
    13: 0.7,
    12: 0.725,
    11: 0.75,
    10: 0.775,
    9: 0.8,
    8: 0.825,
    7: 0.85,
    6: 0.875,
  };

  // Calculate current volume load and target volume load for progression
  let currentVolumeLoad = currentReps * currentWeight;
  let targetVolumeLoad = currentVolumeLoad * (1 + increasePercentage / 100);

  let estimated1RM = currentWeight / (repPercentages[currentReps] || 1);
  let progressionOptions = {};
  Object.keys(repPercentages).forEach((reps) => {
    const targetReps = parseInt(reps);
    const percentOf1RM = repPercentages[targetReps];
    let targetWeight = estimated1RM * percentOf1RM;
    targetWeight = Math.round(targetWeight / 2.5) * 2.5; // Adjust to nearest usable weight increment

    let volumeLoadForTargetReps = targetReps * targetWeight;
    let additionalVolumeNeeded = targetVolumeLoad - volumeLoadForTargetReps;

    // Direct progression if additional volume is not required or within a small margin
    if (additionalVolumeNeeded <= 0) {
      progressionOptions[`${targetReps} reps`] = `${targetWeight} kg directly`;
    } else {
      // Calculate drop sets for additional volume
      let dropSetReps = Math.ceil(additionalVolumeNeeded / targetWeight);
      let effectiveReps =
        dropSetReps + targetReps > 15 ? 15 - targetReps : dropSetReps;
      let dropSetWeight =
        Math.round(additionalVolumeNeeded / effectiveReps / 2.5) * 2.5;

      progressionOptions[
        `${targetReps} reps with drop set`
      ] = `${targetReps} reps at ${targetWeight} kg, then ${effectiveReps} reps at ${dropSetWeight} kg`;
    }
  });

  return progressionOptions;
}

// Example usage
let userCurrentReps = 10;
let userCurrentWeight = 20; // Example: 20kg for 10 reps
let progressionOptions = calculateProgressionOptionsForAllReps(
  userCurrentReps,
  userCurrentWeight,
);
console.log("Progression Options for All Rep Ranges:");
console.log(progressionOptions);
