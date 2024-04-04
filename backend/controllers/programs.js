const Program = require("../models/program");
const ClientInfo = require("../models/clientInfoForm");
const ProgramTemplate = require("../models/programTemplate");
const WorkoutTemplate = require("../models/workoutTemplate");
const Workout = require("../models/workout");
const router = require("express").Router();

async function generateProgram(clientInfoId) {
  const clientInfo = await ClientInfo.findById(clientInfoId);
  if (!clientInfo) {
    throw new Error("Client information not found");
  }

  const programTemplate = await ProgramTemplate.findOne({
    sessionsPerWeek: clientInfo.sessionsPerWeek,
    sessionDuration: clientInfo.sessionDuration,
  });

  if (!programTemplate) {
    throw new Error("No matching program template found");
  }

  const program = new Program({
    userId: clientInfo.userId,
    title: programTemplate.title,
    description: programTemplate.description,
    startDate: new Date(),
    status: "active",
  });

  const workoutIds = await Promise.all(
    programTemplate.workouts.map(async (templateId) => {
      const workoutTemplate = await WorkoutTemplate.findById(templateId);
      if (!workoutTemplate) {
        console.error(`WorkoutTemplate not found for ID: ${templateId}`);
        return null;
      }

      const workout = new Workout({
        userId: clientInfo.userId,
        programId: program._id,
        title: workoutTemplate.title,
        description: workoutTemplate.description,
        exercises: workoutTemplate.exercises,
      });

      await workout.save();
      return workout._id;
    }),
  ).then((ids) => ids.filter((id) => id != null));

  program.workouts = workoutIds;
  await program.save();

  return program;
}

router.post("/", async (req, res) => {
  try {
    const { clientInfoId } = req.body;

    if (!clientInfoId) {
      return res.status(400).json({ error: "clientInfoId is required" });
    }

    const newProgram = await generateProgram(clientInfoId);

    res.status(201).json(newProgram);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const programs = await Program.find({ userId: userId });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:programId", async (req, res) => {
  const { programId } = req.params;
  const update = req.body;

  try {
    const updatedProgram = await Program.findByIdAndUpdate(programId, update, {
      new: true,
    });
    if (!updatedProgram) {
      return res.status(404).json({ error: "Program not found" });
    }
    res.json(updatedProgram);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = {
  router,
  generateProgram,
};
