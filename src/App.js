import './App.css';
import Navbar from './component/Navbar';
import Body from './component/Body'
import Product from './component/Product'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  
}from "react-router-dom";
function App() {
  return (
    <>
   {/* <Navbar/> */}
   <Router>
        
       
        <Routes>
          <Route exact path="/" element={<Body/>}></Route>
          <Route exact path="/health" element={ <Product/>}></Route>
         
        </Routes>
        </Router>
   
   </>
  );
}

export default App;
