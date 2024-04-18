import { Image  } from 'react-bootstrap';
import './Interface.css';
 

const Interface=()=>{
    return(
        <div className="container p-4 justify-content-center laptop" style={{backgroundColor:"black"}}>
          <h1 style={{textAlign:" center" ,color:"white"}}>
          Intuitive interface
          </h1>
          <p style={{textAlign:" center" ,color:"white"}}>
          Celebrate the joy of accomplishment with an app <br/> 
          designed to track your progress, motivate your efforts,<br/>
           and celebrate your successes, one task at a time.
          </p>

          <Image className="img-fluid" src="./App Night.png" style={{position:'relative' }}/>

       </div>

    )
}

export default Interface;