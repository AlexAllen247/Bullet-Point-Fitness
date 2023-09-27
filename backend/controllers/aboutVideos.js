const router = require("express").Router();
const AboutVideo = require("../models/aboutVideo");

router.get("/", async (request, response) => {
  try {
    const aboutVideos = await AboutVideo.find({});
    response.json(aboutVideos);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve about videos" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newAboutVideo = new AboutVideo({ ...request.body });

    const savedAboutVideo = await newAboutVideo.save();
    response.status(201).json(savedAboutVideo);
  } catch (error) {
    response.status(500).json({ error: "Failed to save about video" });
  }
});

module.exports = router;
