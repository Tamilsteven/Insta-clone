import React from 'react';
import Home from './components/home';
import Login from './components/login';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
const App=()=>{

   return(
    <>
     <Router>
      
         <Routes>
            <Route path='/' exact element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
          
         </Routes>
     </Router>

   {/* <Home/> */}
     
   
   
    </>
  )
   }
export default App;