import React from "react";
import { Col, Container, Row } from "reactstrap";
import OurProductCard from "./OurProductCard";
import { productData } from "./OurProductData";

const OurProducts = () => {
  return (
    <>
      <Row>
      
          {productData.map((product, index) => {
            return (
              <>
              <Col xs={12} sm={6}>
                <OurProductCard
                  cardTitile1={product.cardTitile1}
                  cardTitile2={product.cardTitile2}
                  cardText={product.cardText}
                  imgUrl={product.imgUrl}
                />
                </Col>
              </>
            );
          })}
        
      </Row>
    </>
  );
};

export default OurProducts;
