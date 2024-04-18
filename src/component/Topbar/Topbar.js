import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import './Topbar.css'

const Topbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          

        <div className="container pop pt-2 " style={{  height: 50,textAlign: "center"}}>
         <p>
         <span className="d-none d-md-inline">This page is included in a free SaaS Website Kit.</span>
         <span>View the complete Kit <Image src="./Vector.png" className="img-fluid" /> </span> 
        </p>
        </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Topbar;