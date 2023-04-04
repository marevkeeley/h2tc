import './App.css';
import { Link } from "react-router-dom";
import { GiWindTurbine } from "react-icons/gi";
import { GiFactory } from "react-icons/gi";
import {BsBuildings} from 'react-icons/bs';
import map from "./map.png";
import smallmap from "./smallmap.png";
import {GiFamilyHouse} from "react-icons/gi";
import {FaCarBattery} from 'react-icons/fa';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

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

  const link = {
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 5, 
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 20,
    underlined: 'false',
    textDecoration: 'none',
  };

const Home = () =>{
    return (
      <div style={{
        backgroundImage: `url(${map})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '95%',
      }}>
        <body className="App-header">
          {/* <Link to="/turbine" style={icon}><GiWindTurbine /></Link>
          <Link to="/landing" style={icon1}><FaCarBattery /></Link>
          <Link to="/h2tcenter" style={icon2}><GiFamilyHouse /></Link>
          <Link to="/plant1" style={icon3}><GiFactory /></Link>
          <Link to="/plant2" style={icon4}><GiFactory /></Link>
          <Link to="/micro" style={icon5}><BsBuildings /></Link>
          <Link to="/dominion" style={icon6}><BsBuildings /></Link>
          <Link to="/vng" style={icon7}><BsBuildings /></Link> */}
          <Popup 
          trigger=
            {<button style={{position: 'absolute', top: '65%', left:'80%', padding:20}}>Zoom in</button>}
              modal nested>
                {
                  close => (
                    <div>
                      <img src={smallmap} style={{scale: '80%', position: 'relative', top: -60}}/>
                      <button style={{top: '3%', left: '84%', position: 'absolute'}}onClick={() => {close()}}>Close</button>
                    </div>
                  )
              }
            </Popup>
          <Link to="/genplant" style={Object.assign({left: '28%', top: '90%'}, link)}>Genplant</Link>
          <Link to="/siemens" style={Object.assign({left: '45%', top: '90%'}, link)}>Siemens</Link>
          <Link to="/politicians" style={Object.assign({left: '62%', top: '90%'}, link)}>Politicians</Link>
        </body>
      </div>
    );
  }
  
  export default Home;