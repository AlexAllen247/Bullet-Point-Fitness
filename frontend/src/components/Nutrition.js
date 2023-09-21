import React, { useState, useEffect } from "react";
import nutritionVideoService from "../services/nutritionVideos";

const Nutrition = () => {
  const [nutritionVideos, setNutritionVideos] = useState([]);

  useEffect(() => {
    const fetchNutritionVideos = async () => {
      const videos = await nutritionVideoService.get();
      setNutritionVideos(videos);
    };

    fetchNutritionVideos();
  }, []);

  return (
    <section className="nutrition">
      {nutritionVideos.map((nutritionVideo) => (
        <div>
          <iframe
            width="560"
            height="315"
            src={nutritionVideo.embedUrl}
            title={nutritionVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p>{nutritionVideo.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Nutrition;
