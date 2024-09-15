import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const OurProductCard = ({ cardTitile1, cardTitile2, cardText, imgUrl }) => {
  return (
    <>
      <Card style={{margin:"20px"}}body>
        <Row>
          <Col xs={4}>
            <CardTitle tag="h5">{cardTitile1}</CardTitle>
            <CardTitle tag="h5">{cardTitile2}</CardTitle>
          </Col>
          <Col xs="8">
            <img src={imgUrl} width={400} height={200} />
          </Col>
        </Row>

        <CardText>{cardText}</CardText>
      </Card>
    </>
  );
};

export default OurProductCard;
