const express = require("express");
const Program = require("../models/program");
const ClientInfo = require("../models/clientInfoForm");
const router = express.Router();

async function generateProgram(clientInfo) {
  const program = new Program({
    userId: clientInfo.userId,
    // Add additional fields based on your Program schema
    // and potentially use data from clientInfo to customize the program
  });

  await program.save();
  return program;
}

router.post("/", async (req, res) => {
  try {
    const programDetails = req.body;
    const newProgram = new Program(programDetails);
    const savedProgram = await newProgram.save();

    const clientInfo = await ClientInfo.findById(req.body.clientInfoId);
    await generateWorkoutsForProgram(clientInfo, savedProgram._id);

    res.status(201).json(savedProgram);
  } catch (error) {
    res.status(400).json({ error: error.message });
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

// Example PUT request for updating a program (adjust based on your requirements)
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

module.exports = router;
