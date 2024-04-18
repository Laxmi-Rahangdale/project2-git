import {Card,Container, Row, Col} from "react-bootstrap"


const Cardphoto=()=>{
    return(
     <div>
        <Container className="container" style={{backgroundColor:"black" }}>
        <Row className="container" style={{ textAlign:'-webkit-center' }}>

            <Col className="mb-3" md={4} sm={12}>
                <Card className="p-4" 
                style={{width:"78%" ,
                alignItems:"center",
                textAlign:"center",
                backgroundColor:"#0D0D0D"}}>

                    <Card.Img className="rounded-3"
                    variant="top"
                    src="./Frame.png"
                    style={{width:"25%"}}
                    />

                    <Card.Body>
                     <Card.Title style={{color:"white"}}>
                     Integration ecosystem
                     </Card.Title>

                     <Card.Text style={{color:"white"}}>
                     Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.
                     </Card.Text>
                    </Card.Body>                   
                </Card>
            </Col>



            <Col className="mb-3" md={4} sm={12}>
                <Card className="p-4" 
                style={{width:"78%" ,
                alignItems:"center",
                textAlign:"center",
                backgroundColor:"#0D0D0D"}}>

                    <Card.Img className="rounded-3"
                    variant="top"
                    src="./Frame.png"
                    style={{width:"25%"}}
                    />

                    <Card.Body>
                     <Card.Title style={{color:"white"}}>
                     Goal setting and tracking
                     </Card.Title>

                     <Card.Text style={{color:"white"}}>
                     Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.
                     </Card.Text>
                    </Card.Body>                   
                </Card>
            </Col>





            <Col className="mb-3" md={4} sm={12} >
                <Card  className="p-4"
                style={{width:"78%" ,
                alignItems:"center",
                textAlign:"center",
                outline:"1px thin gray",
                backgroundColor:"#0D0D0D"}}>

                    <Card.Img className="rounded-3"
                    variant="top"
                    src="./Frame.png"
                    style={{width:"25%"}}
                    />

                    <Card.Body>
                     <Card.Title style={{color:"white"}}>
                     Secure data encryption
                     </Card.Title>

                     <Card.Text style={{color:"white"}}>
                     With end-to-end encryption, your data is securely stored and protected from unauthorized access.
                     </Card.Text>
                    </Card.Body>                   
                </Card>
            </Col>





          </Row>
        </Container>
     </div>

    )
}
export default Cardphoto;