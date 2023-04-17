import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Navagate from "./Navagate";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <div onFormSwitch={toggleForm}>
          <Router>
            <Navbar />
            <Navagate />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
