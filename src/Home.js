import './App.css';
import { Link } from "react-router-dom";
import { GiWindTurbine } from "react-icons/gi";
import { GiFactory } from "react-icons/gi";
import {BsBuildings} from 'react-icons/bs';
import background from "./background.png";
import {GiFamilyHouse} from "react-icons/gi";
import {FaCarBattery} from 'react-icons/fa';

  const icon = {
    left: 812, 
    top: 400,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 2, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 20,
    underlined: 'false',
    textDecoration: 'none',
  };

  const icon1 = {
    left: 780, 
    top: 400,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 2, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 20,
    underlined: 'false',
    textDecoration: 'none',
  };

  const icon2 = {
    left: 640, 
    top: 265,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 2, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 20,
    underlined: 'false',
    textDecoration: 'none',
  };

  const icon3 = {
    left: 780, 
    top: 440,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 2, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 20,
    underlined: 'false',
    textDecoration: 'none',
  };

  const icon4 = {
    left: 610, 
    top: 235,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 2, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 20,
    underlined: 'false',
    textDecoration: 'none',
  };

  const icon5 = {
    left: 663, 
    top: 265,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 2, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 20,
    underlined: 'false',
    textDecoration: 'none',
  };

  const icon6 = {
    left: 600, 
    top: 200,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 2, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 20,
    underlined: 'false',
    textDecoration: 'none',
  };

  const icon7 = {
    left: 610, 
    top: 265,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 2, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 20,
    underlined: 'false',
    textDecoration: 'none',
  };

  const link1 = {
    left: 380, 
    top: 400,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 5, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 10,
    underlined: 'false',
    textDecoration: 'none',
  };

  const link2 = {
    left: 380, 
    top: 420,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 5, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 10,
    underlined: 'false',
    textDecoration: 'none',
  };

  const link3 = {
    left: 380, 
    top: 440,
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 5, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 10,
    underlined: 'false',
    textDecoration: 'none',
  };

const Home = () =>{
    return (
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        scale: '100%'
      }}>
        <body className="App-header">
          <Link to="/turbine" style={icon}><GiWindTurbine /></Link>
          <Link to="/landing" style={icon1}><FaCarBattery /></Link>
          <Link to="/h2tc" style={icon2}><GiFamilyHouse /></Link>
          <Link to="/plant1" style={icon3}><GiFactory /></Link>
          <Link to="/plant2" style={icon4}><GiFactory /></Link>
          <Link to="/micro" style={icon5}><BsBuildings /></Link>
          <Link to="/dominion" style={icon6}><BsBuildings /></Link>
          <Link to="/vng" style={icon7}><BsBuildings /></Link>
          <Link to="/genplant" style={link1}>Genplant</Link>
          <Link to="/siemens" style={link2}>Siemens</Link>
          <Link to="/politicians" style={link3}>Politicians</Link>
        </body>
      </div>
    );
  }
  
  export default Home;