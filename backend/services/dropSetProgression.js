//This is a start of a potential drop set algorithm for advanced users

function findNewWorkoutOptions(
  currentReps,
  currentWeight,
  increasePercentage = 1,
) {
  const currentVolumeLoad = currentReps * currentWeight;
  const targetVolumeLoad = currentVolumeLoad * (1 + increasePercentage / 100);

  return calculateDropSetOptions(
    currentVolumeLoad,
    targetVolumeLoad,
    currentWeight,
  );
}

function calculateDropSetOptions(
  currentVolumeLoad,
  targetVolumeLoad,
  currentWeight,
) {
  const someIncreaseFactor = 0.1; // 10% increase for heavier set
  const someDecreaseFactor = 0.1; // 10% decrease for lighter set

  let dropSetOptions = [];
  let remainingVolumeLoad = targetVolumeLoad;

  // First set - heavier
  let heavierWeight = currentWeight * (1 + someIncreaseFactor);
  let heavierReps = Math.floor(remainingVolumeLoad / heavierWeight);
  remainingVolumeLoad -= heavierReps * heavierWeight;
  dropSetOptions.push({ reps: heavierReps, weight: heavierWeight });

  // Ensure there is a need for a second set
  if (remainingVolumeLoad > 0) {
    // Second set - lighter
    let lighterWeight = currentWeight * (1 - someDecreaseFactor);
    let lighterReps = Math.ceil(remainingVolumeLoad / lighterWeight);
    dropSetOptions.push({ reps: lighterReps, weight: lighterWeight });
  }

  return dropSetOptions;
}

// Example usage
console.log(findNewWorkoutOptions(12, 20)); // Assuming an increasePercentage of 1
