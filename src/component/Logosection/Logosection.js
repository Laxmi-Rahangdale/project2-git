import {Container, Row, Col, Image} from "react-bootstrap"


const Logosection = () => {
    return (
        <div  className="container p-4"  style={{ backgroundColor: "black"}}>

            <Container>
                <h6 style={{ textAlign: 'center', color:"smokewhite" }}>Trusted by the world’s most innovative teams</h6>
                <Row>
                    <Col className="p-4">
                        <Image src="./acme 1.png"/>
                    </Col>

                    <Col className="p-4">
                        <Image src="./quantum 1.png"/>
                    </Col>
                    
                    <Col className="p-4">
                        <Image src="./echo 1.png"/>
                    </Col>
                    
                    <Col className="p-4">
                        <Image src="./celestia 1.png"/>
                    </Col>

                    <Col className="p-4">
                        <Image src="./pulse 1.png"/>
                    </Col>

                    <Col className="p-4">
                        <Image src="./apex 1.png"/>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Logosection;