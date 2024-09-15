import React from "react";
import "./styles.css";
import video from "../Assets/Images/livguard_Aid.mp4";
import { Badge, Col, Row } from "reactstrap";

const YouTubeFrame = () => {
  return (
    <>
      <Row
        style={{ marginTop: "20px", background: "black", position: "relative" }}
      >
        <Col sm={6} xs={12}>
          <div style={{ position: "absolute", left: "10%", color: "white" }}>
            <h1 style={{ fontSize: "3rem" }}>Watch</h1>
            <div style={{borderRadius:"10px", background:"red", padding:"5px", width:"50vw"}}>
              <h1 style={{ fontSize: "3rem" }}>Digital Film</h1>
            </div>
          </div>
        </Col>

        <Col sm={6} xs={12}>
          <div className="video-responsive">
            <iframe
              width="400"
              height="100"
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default YouTubeFrame;
