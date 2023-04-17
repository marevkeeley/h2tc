import React from "react";
import { useState } from "react";
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
import GoVirginia from "./Screens/GoVirginia"
import HydrogenHub from "./Screens/HydrogenHub"
import Research from "./Screens/Research"
import {Turbine, Genplant, Siemens, Politicians, Landing, H2TC, TechC, Micro, Dominion, VNG,
User1, User2, User3, User4, User5, User6, User7, User8, User9, User10} from "./Screens/MapScreens";
import Login from "./components/login";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
    { currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : 
    <div onFormSwitch={toggleForm}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/map" element={<Map />} />
          <Route path="/use-case" element={<Use />} />
          <Route path="/design" element={<Design />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/govirginia" element={<GoVirginia />} />
          <Route path="/h2hub" element={<HydrogenHub />} />
          <Route path="/research" element={<Research />} />
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
  }
 </>
  );
}
  
export default App;