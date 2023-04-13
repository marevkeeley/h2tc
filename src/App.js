import React from "react";
// import { useState } from "react";
// import secureLocalStorage from 'react-secure-storage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar';
import Home from "./Screens/Home";
import Ecosystem from "./Screens/Ecosystem";
import Map from "./Screens/Map";
import Use from "./Screens/Use";
import Design from "./Screens/Design";
import Directory from "./Screens/Directory";
import {Screen, Turbine, Genplant, Siemens, Politicians, Landing, H2TC, TechC, Micro, Dominion, VNG,
User1, User2, User3, User4, User5, User6, User7, User8, User9, User10} from "./Screens/Screen";

function App() {
    // const [isVerified, setIsVerified] = useState(false);
  
    // const checkPw = () => {
    //   const answer = document.getElementById("password").value;
    
    //   if (answer ===  secureLocalStorage.getItem("password")) { 
    //     setIsVerified(true);
    //   } else {
    //     alert("Sorry, that's not it");
    //   }
    // };
  
  return (
    <>
    {/* {isVerified ?  */}
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/map" element={<Map />} />
          <Route path="/use-case" element={<Use />} />
          <Route path="/design" element={<Design />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/Screen" element={<Screen />} />
          <Route path="/turbine" element={<Turbine />} />
          <Route path="/genplant" element={<Genplant />} />
          <Route path="/siemens" element={<Siemens />} />
          <Route path="/politicians" element={<Politicians />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/h2tcenter" element={<H2TC />} />
          <Route path="/techC" element={<TechC />} />
          <Route path="/micro" element={<Micro />} />
          <Route path="/dominion" element={<Dominion />} />
          <Route path="/vng" element={<VNG />} />
          <Route path="/port" element={<User1 />} />
          <Route path="/canon" element={<User2 />} />
          <Route path="/newportcity" element={<User3 />} />
          <Route path="/langley" element={<User4 />} />
          <Route path="/norfolknaval" element={<User5 />} />
          <Route path="/smithfield" element={<User6 />} />
          <Route path="/hpdata" element={<User7 />} />
          <Route path="/jefferson" element={<User8 />} />
          <Route path="/eustis" element={<User9 />} />
          <Route path="/nasa" element={<User10 />} />
        </Routes>
      </Router>
    </div>
    {/* : 
    (
     <form onSubmit={checkPw}>
      <text style={{top: '5%', left: '30%', position: 'absolute'}}>This site is password protected. Please entered the password to view the site.</text>
      <div/>
      <input style={{top: '10%', left: '40%', position: 'absolute'}} id="password" name="password" />
      <button style={{top: '10%', left: '54%', position: 'absolute'}}>access site</button>
     </form>
   )
 } */}
 </>
  );
}
  
export default App;