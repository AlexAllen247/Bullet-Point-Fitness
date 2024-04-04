const router = require("express").Router();
const ProgramTemplate = require("../models/programTemplate");

router.get("/", async (request, response) => {
  try {
    const programTemplates = await ProgramTemplate.find({});
    response.json(programTemplates);
  } catch (error) {
    response
      .status(500)
      .json({ error: "Failed to retrieve program templates" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newProgramTemplate = new ProgramTemplate({ ...request.body });

    const savedProgramTemplate = await newProgramTemplate.save();
    response.status(201).json(savedProgramTemplate);
  } catch (error) {
    response.status(500).json({ error: "Failed to save program templates" });
  }
});

module.exports = router;
