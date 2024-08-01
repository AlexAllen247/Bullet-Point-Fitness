import React, { forwardRef } from "react";
import { Container } from "react-bootstrap";
import VideoCard from "./VideoCard";

const VideoGallery = forwardRef((props, ref) => {
  const {
    displayedMuscleFunctionVideos,
    displayedExerciseVideos,
    selectedMuscle,
  } = props;

  const styles = {
    header: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 40,
    },
  };

  return (
    <Container ref={ref}>
      <h1 style={styles.header}>{selectedMuscle}</h1>
      {displayedMuscleFunctionVideos.length > 0 && (
        <Container>
          <h1 style={styles.header}>Muscle Functions</h1>
          {displayedMuscleFunctionVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </Container>
      )}
      {displayedExerciseVideos.length > 0 && (
        <Container>
          <h1 style={styles.header}>Exercises</h1>
          {displayedExerciseVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </Container>
      )}
    </Container>
  );
});

export default VideoGallery;
