const router = require("express").Router();
const MindsetVideo = require("../models/mindsetVideo");

router.get("/", async (request, response) => {
  try {
    const mindsetVideos = await MindsetVideo.find({});
    response.json(mindsetVideos);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve mindset videos" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newMindsetVideo = new MindsetVideo({ ...request.body });

    const savedMindsetVideo = await newMindsetVideo.save();
    response.status(201).json(savedMindsetVideo);
  } catch (error) {
    response.status(500).json({ error: "Failed to save mindset video" });
  }
});

module.exports = router;
