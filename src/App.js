import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Herosection from './component/Herosection/Herosection';
import Logosection from './component/Logosection/Logosection';
import Everything from './component/Everything/Everything';
import Cardphoto from './component/Cardphoto/Cardphoto';
import Interface from './component/Interface/Interface';
import FAQs from './FAQs/FAQs';
import Access from './component/Access/Access';
import Footer from './component/Footer/Footer';
import Topbar from './component/Topbar/Topbar';
import Getforfree from './component/Getforfree/Getforfree';



function App() {
  return (
   <div>
      <Topbar/>
      <Getforfree/>
     <Herosection/>
     <Logosection/>
     <Everything/>
     <Cardphoto/>
     <Interface/>  
     <FAQs/>
     <Access/>
     <Footer/>
   </div>
  );
}

export default App;
