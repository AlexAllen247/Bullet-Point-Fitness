function calculateProgressionPlan(currentReps, currentWeight) {
  const repPercentages = {
    20: 0.6,
    19: 0.61,
    18: 0.62,
    17: 0.63,
    16: 0.64,
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
    5: 0.9,
    4: 0.925,
  };

  // Estimate the 1RM from the current input
  let estimated1RM = currentWeight / (repPercentages[currentReps] || 1);
  let uniqueWeights = new Map(); // Store unique weights to their lowest rep option

  Object.keys(repPercentages).forEach((repsString) => {
    const reps = parseInt(repsString);
    let exactWeight = estimated1RM * repPercentages[reps];
    // Rounding up to the nearest 2.5kg increment, excluding current weight for current reps
    let practicalWeight = Math.ceil(exactWeight / 2) * 2;

    // Update only if this weight provides a new lowest rep option for the weight and is a genuine progression
    if (
      (!uniqueWeights.has(practicalWeight) ||
        uniqueWeights.get(practicalWeight) > reps) &&
      (practicalWeight > currentWeight || reps > currentReps)
    ) {
      uniqueWeights.set(practicalWeight, reps);
    }
  });

  // Convert the map to a progression options object, excluding the current session's load
  let progressionOptions = {};
  uniqueWeights.forEach((reps, weight) => {
    if (!(weight === currentWeight && reps === currentReps)) {
      // Exclude current session
      progressionOptions[`${reps} reps`] = `${weight} kg`;
    }
  });

  return progressionOptions;
}

// Example usage
const currentReps = 7;
const currentWeight = 27.5; // Assuming the current session is 12 reps at 17.5kg
console.log("Genuine Progression Plan for Lowest Rep Option at Each Weight:");
console.log(calculateProgressionPlan(currentReps, currentWeight));
