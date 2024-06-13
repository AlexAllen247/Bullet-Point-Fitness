const router = require("express").Router();
const ClientInfo = require("../models/clientInfoForm");
const { generateProgram } = require("../controllers/programs");
const Program = require("../models/program");

router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const clientInfo = await ClientInfo.find({ userId });

    if (!clientInfo) {
      return res.status(404).json({ error: "Client info not found" });
    }

    res.json(clientInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (request, response) => {
  if (!request.user) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  try {
    const clientData = new ClientInfo({
      ...request.body,
      userId: request.user.id,
    });
    const savedClientInfo = await clientData.save();

    const existingProgram = await Program.findOne({
      userId: request.user.id,
      status: "active",
    });

    if (existingProgram) {
      existingProgram.status = "inactive";
      await existingProgram.save();
    }

    const newProgram = await generateProgram(savedClientInfo._id);

    response.status(201).json(newProgram);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
});

module.exports = router;
