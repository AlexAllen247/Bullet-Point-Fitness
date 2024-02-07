function findNewWorkoutOptions(
  currentReps,
  currentWeight,
  increasePercentage = 1,
) {
  const MIN_REPS = 6;
  const MAX_REPS = 15;
  const WEIGHT_INCREMENT = 2.5;
  const MAX_WEIGHT = 1000;

  let currentVolumeLoad = currentReps * currentWeight;
  let targetVolumeLoad = currentVolumeLoad * (1 + increasePercentage / 100);

  let possibleCombinations = [];
  let minRepsForWeight = MAX_REPS + 1;

  for (
    let weight = WEIGHT_INCREMENT;
    weight <= MAX_WEIGHT;
    weight += WEIGHT_INCREMENT
  ) {
    for (let reps = MIN_REPS; reps < minRepsForWeight; reps++) {
      let newVolumeLoad = reps * weight;
      if (newVolumeLoad >= targetVolumeLoad) {
        possibleCombinations.push({ reps, weight, newVolumeLoad });
        minRepsForWeight = reps;
        break;
      }
    }
  }

  return possibleCombinations;
}

console.log(findNewWorkoutOptions(10, 20));
