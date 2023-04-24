import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Navagate from "./Navagate";

/**
 * Creates the website and includs a login component. This uses the navagation bar created in
 * the navbar component and the routes for all of the pages from the Navagation file.
 * @returns returns the website
 */
function App() {
  const [currentForm, setCurrentForm] = useState("login");
  /**
   * This state and function allows for the login form to appear at first and then disappear
   * until the page is reloaded.
   * @param {*} formName the name of the screen you want to change to. Right now there is only
   * login to signify the login screen and anything else will go to the home screen.
   */
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
