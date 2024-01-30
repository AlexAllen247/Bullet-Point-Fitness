const express = require("express");
const ClientInfo = require("../models/clientInfoForm");
const router = express.Router();

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
    const clientData = request.body;
    const newClientInfo = new ClientInfo(clientData);

    newClientInfo.userId = request.user.id;

    const savedClientInfo = await newClientInfo.save();
    response.status(201).json(savedClientInfo);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
});

module.exports = router;
