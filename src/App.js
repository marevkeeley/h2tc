import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
  
import Home from "./Home";
import {Screen, Turbine, Genplant, Siemens, Politicians, Landing, H2TC, Plant1, Plant2, Micro, Dominion, VNG} from "./Screen";
// import User1 from "./Screen";
// import User2 from "./Screen";
// import User3 from "./Screen";
// import User4 from "./Screen";
// import User5 from "./Screen";
// import User6 from "./Screen";
// import User7 from "./Screen";
// import User8 from "./Screen";
// import User9 from "./Screen";
// import User10 from "./Screen";
  
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Screen" element={<Screen />} />
          <Route path="/turbine" element={<Turbine />} />
          <Route path="/genplant" element={<Genplant />} />
          <Route path="/siemens" element={<Siemens />} />
          <Route path="/politicians" element={<Politicians />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/h2tc" element={<H2TC />} />
          <Route path="/plant1" element={<Plant1 />} />
          <Route path="/plant2" element={<Plant2 />} />
          <Route path="/micro" element={<Micro />} />
          <Route path="/dominion" element={<Dominion />} />
          <Route path="/vng" element={<VNG />} />
          {/* <Route path="/user1" element={<User1 />} />
          <Route path="/user2" element={<User2 />} />
          <Route path="/user3" element={<User3 />} />
          <Route path="/user4" element={<User4 />} />
          <Route path="/user5" element={<User5 />} />
          <Route path="/user6" element={<User6 />} />
          <Route path="/user7" element={<User7 />} />
          <Route path="/user8" element={<User8 />} />
          <Route path="/user9" element={<User9 />} />
          <Route path="/user10" element={<User10 />} /> */}
        </Routes>
      </Router>
    </>
  );
}
  
export default App;