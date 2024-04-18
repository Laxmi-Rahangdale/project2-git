import './Herosection.css'
import {Container, Row, Col, Image, Button} from "react-bootstrap"
const Herosection=()=>{
   return( 
    <div className='container riya' >
     <Container>
        <Row className="py-2 justify-content-center">
            <Col xs={12} md={6} className='text-center'>
                <p className='p-2' style={{ color:"gray"}}>
                   Version 2.0 is here 
                   <Image className="m-2 img-fluid" src='./Read more.png'></Image>                    
                </p>
            </Col>
        </Row> 


        <Row className="py-2 justify-content-center">
            <Col xs={12} md={6} className='text-center'>
             <h1 style={{fontSize:"9rem" ,color:"white"}}>One Task</h1> 
             <h1 style={{fontSize:"9rem" ,color:"white"}}>at a Time</h1>                       
            </Col>
        </Row> 

        <Row className="py-2 justify-content-center">
            <Col xs={12} md={6} className='text-center'>
             <p style={{color:"white"}}>Celebrate the joy of accomplishment with an <br/>
             app designed to track your progress, motivate <br/>
             your efforts, and celebrate your successes.</p>                     
            </Col>
        </Row> 

        <Row className="py-2 justify-content-center">
            <Col xs={12} md={6} className='text-center'>
            <Image className="m-2 img-fluid d-none d-md-block" src='./cursor.png'
            style={{width:"135%", maxWidth:"135px", position: "absolute" , top:"70%",left:"30%",transform:"translate(-80%,-50%)"}}
            
            ></Image>
           
            </Col>


            <Col xs={12} md={6} className='text-center'>
            <Image className="m-2 img-fluid d-none d-md-block" src='./message.png'
            style={{width:"150%", maxWidth:"150px", position: "absolute" , top:"58%",left:"70%",transform:"translate(-25%,-50%)"}}
            ></Image>
           
            </Col>
        </Row> 

        <Row className=" justify-content-center ">
            <Col xs={12} md={6} className='text-center'>
             <Button className='mb-4' style={{backgroundColor:"white" ,color:"black"}} rounded >
                Get for free
             </Button>                  
            </Col>
        </Row> 
     </Container>
    </div>
   )
}

export default  Herosection;

