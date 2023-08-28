import React, { useState, useEffect } from "react";
import trainingVideoService from "../services/trainingVideos";

const Nutrition = () => {
  const [trainingVideos, setTrainingVideos] = useState([]);

  useEffect(() => {
    const fetchTrainingVideos = async () => {
      const videos = await trainingVideoService.get();
      setTrainingVideos(videos);
    };

    fetchTrainingVideos();
  }, []);
  return (
    <section className="nutrition">
      {trainingVideos.map((trainingVideo) => (
        <div>
          <iframe
            width="560"
            height="315"
            src={trainingVideo.embedUrl}
            title={trainingVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <p>{trainingVideo.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Nutrition;
