import { Button, Col } from "reactstrap";
import React, { useState } from "react";
import OurProducts from "./OurProducts";
import AboutShop from "./AboutShop";

const BodySectionParent = () => {

  const [show, setShow] = useState(true)
  console.log("show", show);
  return (
    <>
      <div style={{margin:'0.5rem'}}>

        <Button color="primary" outline onClick={()=> setShow(true)} disabled={show ? true : false}>
          Our Product
        </Button>
        {' '}
        <Button
         color="primary"
         outline
         onClick={()=> setShow(false)}
         disabled={show == false ? true : false}
        >Our Shops</Button>
      </div>

      {
        show ?  <OurProducts/> : <AboutShop/>
      }
     
     
    </>
  );
};

export default BodySectionParent;
