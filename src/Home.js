import './App.css';
import { Link } from "react-router-dom";
import { GiWindTurbine } from "react-icons/gi";
import { GiFactory } from "react-icons/gi";
import map from "./map.png";
import smallmap from "./smallmap.png";
import {GiFamilyHouse} from "react-icons/gi";
import {FaCarBattery} from 'react-icons/fa';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

  const icon = {
    textAlign: 'center', 
    position: 'absolute', 
    color: '#0047AB',
  };

  const icon2 = {
    textAlign: 'center', 
    position: 'absolute', 
    color: '#0047AB',
    scale: '150%'
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
          <GiWindTurbine style={Object.assign({left: '88%', top: '78%'}, icon)} />
          <FaCarBattery style={Object.assign({left: '86%', top: '78%'}, icon)} />
          <GiFamilyHouse style={Object.assign({left: '82%', top: '70%'}, icon)} />
          <GiFactory style={Object.assign({left: '86%', top: '76%'}, icon)} />
          <GiFactory style={Object.assign({left: '83%', top: '70%'}, icon)} />
          <GiFactory style={Object.assign({left: '81%', top: '70%'}, icon)} />
          <GiFactory style={Object.assign({left: '80%', top: '69%'}, icon)} />
          <GiFactory style={Object.assign({left: '83%', top: '72%'}, icon)} />
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
            {<button style={{
              position: 'absolute', 
              top: '65%', 
              left:'80%', 
              padding: 60,
              backgroundColor: 'transparent',
            }}></button>}
              modal nested>
                {
                  close => (
                    <div>
                      <img src={smallmap} style={{scale: '80%', position: 'relative', top: -60}}/>
                      <button style={{top: '3%', left: '84%', position: 'absolute'}}onClick={() => {close()}}>Close</button>
                      <Link to="/turbine" style={Object.assign({left: '78%', top: '64%'}, icon2)}><GiWindTurbine /></Link>
                      <Link to="/landing" style={Object.assign({left: '76%', top: '64%'}, icon2)}><GiFactory /></Link>
                      <Link to="/h2tcenter" style={Object.assign({left: '33%', top: '28%'}, icon2)}><GiFamilyHouse /></Link>
                      <Link to="/techC" style={Object.assign({left: '35%', top: '28%'}, icon2)}><GiFactory /></Link>
                      <Link to="/micro" style={Object.assign({left: '31%', top: '28%'}, icon2)}><GiFactory /></Link>
                      <Link to="/dominion" style={Object.assign({left: '33%', top: '22%'}, icon2)}><GiFactory /></Link>
                      <Link to="/vng" style={Object.assign({left: '37%', top: '33%'}, icon2)}><GiFactory /></Link>
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