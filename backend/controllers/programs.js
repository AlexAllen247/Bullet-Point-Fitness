const express = require("express");
const Program = require("../models/program");
const ClientInfo = require("../models/clientInfoForm");
const router = express.Router();

async function generateProgram(clientInfoId) {
  const clientInfo = await ClientInfo.findById(clientInfoId);
  if (!clientInfo) {
    throw new Error("Client information not found");
  }

  const selectedTemplate = selectProgramTemplate(
    clientInfo.sessionsPerWeek,
    clientInfo.sessionDuration,
  );

  const program = new Program({
    userId: clientInfo.userId,
    title: selectedTemplate.title,
    description: selectedTemplate.description,
    startDate: new Date(),
    workouts: selectedTemplate.workouts,
    status: "active",
  });

  await program.save();
  return program;
}

function selectProgramTemplate(sessionsPerWeek, sessionDuration) {
  let templateId = `${sessionsPerWeek}_${sessionDuration}`;
  let template = programTemplates.find((t) => t.id === templateId);

  return template || defaultTemplate;
}

const programTemplates = [
  {
    id: "3_45",
    title: "Full Body Split - 45 minutes",
    description:
      "A full body workout plan suitable for beginners, 3 days a week, 45 minutes each session.",
    workouts: [],
  },
];

const defaultTemplate = {
  title: "Default Program",
  description: "A standard workout plan.",
  workouts: [],
};

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
