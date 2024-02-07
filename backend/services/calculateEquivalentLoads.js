function calculateEquivalentLoads(currentReps, currentWeight) {
  // Mapping of reps to percentage of 1RM
  const repTo1RMPercents = {
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

  // Calculate the current percentage of 1RM based on currentReps
  const currentPercentOf1RM = repTo1RMPercents[currentReps] || null;

  if (!currentPercentOf1RM) {
    console.log("Invalid number of reps provided.");
    return;
  }

  // Estimate 1RM based on current reps and weight
  const estimated1RM = currentWeight / currentPercentOf1RM;

  let equivalentLoads = {};

  // Calculate equivalent weight for each rep count
  for (let [reps, percent] of Object.entries(repTo1RMPercents)) {
    equivalentLoads[reps] = Math.round(estimated1RM * percent);
  }

  return equivalentLoads;
}

// Example usage
const currentReps = 10;
const currentWeight = 20; // 20kgs for 10 reps
const equivalentLoads = calculateEquivalentLoads(currentReps, currentWeight);

console.log("Equivalent loads for different rep counts:");
for (let [reps, weight] of Object.entries(equivalentLoads)) {
  console.log(`${reps} reps: ${weight}kg`);
}
