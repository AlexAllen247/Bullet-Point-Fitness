const router = require("express").Router();
const NutritionVideo = require("../models/nutritionVideo");

router.get("/", async (request, response) => {
  try {
    const nutritionVideos = await NutritionVideo.find({});
    response.json(nutritionVideos);
  } catch (error) {
    response.status(500).json({ error: "Failed to retrieve nutrition videos" });
  }
});

router.post("/", async (request, response) => {
  try {
    const newNutritionVideo = new NutritionVideo({ ...request.body });

    const savedNutritionVideo = await newNutritionVideo.save();
    response.status(201).json(savedNutritionVideo);
  } catch (error) {
    response.status(500).json({ error: "Failed to save nutrition video" });
  }
});

module.exports = router;
