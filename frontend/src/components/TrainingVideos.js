import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import trainingVideoService from "../services/trainingVideos";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";

const TrainingVideos = () => {
  const [trainingVideos, setTrainingVideos] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [sortOrder, setSortOrder] = useState("date");

  const itemsPerPage = 6;

  useEffect(() => {
    const fetchTrainingVideos = async () => {
      const videos = await trainingVideoService.get();
      setTrainingVideos(videos);
    };
    fetchTrainingVideos();
  }, []);

  const styles = {
    trainingVideos: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    header: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 40,
    },
    select: {
      margin: 20,
      color: "#df0000",
      border: "#df0000",
      backgroundColor: "#ffffff",
    },
  };

  const durationToSeconds = (duration) => {
    const minMatch = duration.match(/(\d+)\s*min/);
    const secMatch = duration.match(/(\d+)\s*seconds/);

    const mins = minMatch ? parseInt(minMatch[1], 10) : 0;
    const secs = secMatch ? parseInt(secMatch[1], 10) : 0;

    return mins * 60 + secs;
  };

  const sortVideos = (videos) => {
    switch (sortOrder) {
      case "title":
        return videos.sort((a, b) => a.title.localeCompare(b.title));
      case "duration":
        return videos.sort(
          (a, b) =>
            durationToSeconds(b.duration) - durationToSeconds(a.duration),
        );
      case "date":
      default:
        return videos.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
    }
  };

  return (
    <section className="album py-5" style={styles.trainingVideos}>
      <div>
        <h1 style={styles.header}>Training Essentials</h1>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={styles.select}
        >
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
          <option value="duration">Sort by Duration</option>
        </select>
      </div>
      <Container>
        <Row>
          {sortVideos([...trainingVideos])
            .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
            .map((video) => (
              <Col key={video.id} md={4}>
                <VideoCard video={video} />
              </Col>
            ))}
        </Row>
      </Container>
      <ReactPaginate
        pageCount={Math.ceil(trainingVideos.length / itemsPerPage)}
        onPageChange={({ selected }) => setPageNumber(selected)}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        disabledClassName="disabled"
      />
    </section>
  );
};

export default TrainingVideos;
