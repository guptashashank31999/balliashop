import React from "react";
import { Card, CardText, CardTitle, Col, Row } from "reactstrap";

const AboutShop = () => {
  return (
    <>
      <Row>
        <Col sm={12}>
          <Card style={{ margin: "20px" }} body>
            <Row>
              <Col xs={4}>
                <CardTitle tag="h5">
                  Legal Name - <span style={{fontSize:"1rem", fontWeight:500}}>KRISHNA BATTERY SERVICE</span>
                </CardTitle>
                <CardTitle tag="h5">
                  Trade Name -  <span style={{fontSize:"1rem", fontWeight:500}}>M/S KRISHNA BATTERI SERVICE</span>
                </CardTitle>
                <CardTitle tag="h5">
                  Address -  <span style={{fontSize:"1rem", fontWeight:500}}>Rajdhani road Baheri , Ballia Uttar Pradesh PIN:
                  277001</span>
                </CardTitle>
                <CardTitle tag="h5">
                  GST No. -  <span style={{fontSize:"1rem", fontWeight:500}}>09AAKFK9513E1Z6</span>
                  
                </CardTitle>
                <CardTitle tag="h5">
                 Owner Name -  <span style={{fontSize:"1rem", fontWeight:500}}>CHANDRA PRAKASH PANDEY</span>
                  
                </CardTitle>
              </Col>
              <Col xs="8"></Col>
            </Row>

            <CardText></CardText>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AboutShop;
