import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/Image"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import './Footer.css'

const Footer = () =>{
    return(
        <Container className="container foot ">
         <Row>   
          <Col md={6} sm={12} style={{color:"#808080",textAlign:"left"}}>
            <p>@ 2024 Your Company, Inc. All rights reserved</p>
          </Col>
          
          <Col md={6} sm={12} style={{textAlign:"right"}}> 
           <Image className="img-fluid m-2" src='./x.png'></Image>
           <Image className="img-fluid m-2" src='./insta.png'></Image>
           <Image className="img-fluid m-2" src='./pins.png'></Image>
           <Image className="img-fluid m-2" src='./Ln.png'></Image>
           <Image className="img-fluid m-2" src='./tiktok.png'></Image>
           <Image className="img-fluid m-2" src='./yt.png'></Image>
          </Col>
          </Row>
        </Container>
    );
};

export default Footer;