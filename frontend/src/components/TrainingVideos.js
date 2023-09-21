import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import trainingVideoService from "../services/trainingVideos";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";

const TrainingVideos = () => {
  const [trainingVideos, setTrainingVideos] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

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
  };

  return (
    <section className="album py-5" style={styles.trainingVideos}>
      <div>
        <h1 style={styles.header}>Training Videos</h1>
      </div>
      <Container>
        <Row>
          {trainingVideos
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
