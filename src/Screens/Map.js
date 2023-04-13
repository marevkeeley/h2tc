import '../App.css';
import map from "../assets/map.png";
import { Link } from "react-router-dom";
import { GiWindTurbine } from "react-icons/gi";
import { GiFactory } from "react-icons/gi";
import { FaCarBattery } from "react-icons/fa";
import {GiFamilyHouse} from "react-icons/gi";
import {BsFillHouseFill} from "react-icons/bs";
import {useState} from 'react';
  
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
    fontSize: 16,
    underlined: 'false',
    textDecoration: 'none',
    color: '#0047AB',
  };

  const text = {
    textAlign: 'center', 
    position: 'absolute', 
    fontSize: 16,
    color: '#0047AB',
  };
   
const Map = () =>{
  const [user, setUser] = useState(false)

  const filter = () => {
    if (user === false) {
      setUser(true)
    }
    else {
      setUser(false)
    }
  }
    return (
      <div style={{
        backgroundImage: `url(${map})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'start',
        backgroundSize: '74%',
        marginTop: 20,
        marginLeft: 20,
        overflow: 'hidden',
      }}>
        <body style={{overflow: 'hidden'}} className="Map">
          <div style={Object.assign({left: '80%', top: '12%'}, text)}>
            <p style={{fontWeight: 'bold'}}>Key</p>
          </div>
          <GiWindTurbine style={Object.assign({left: '80%', top: '20%'}, icon)} />
          <div style={Object.assign({left: '83%', top: '18%'}, text)}>
            <p>Turbine</p>
          </div>
          <FaCarBattery style={Object.assign({left: '80%', top: '25%'}, icon)} />
          <div style={Object.assign({left: '83%', top: '23%'}, text)}>
            <p>Electricity Storage</p>
          </div>
          <GiFamilyHouse style={Object.assign({left: '80%', top: '30%'}, icon)} />
          <div style={Object.assign({left: '83%', top: '28%'}, text)}>
            <p>H2 Tech Center</p>
          </div>
          <GiFactory style={Object.assign({left: '80%', top: '35%'}, icon)} />
          <div style={Object.assign({left: '83%', top: '33%'}, text)}>
            <p>Production Plant</p>
          </div>
          <BsFillHouseFill style={Object.assign({left: '80%', top: '40%'}, icon)} />
          <div style={Object.assign({left: '83%', top: '38%'}, text)}>
            <p>Potential User</p>
          </div>
          <div onClick={() => filter()} style={Object.assign({left: '80%', top: '50%', border: '2px solid #0047AB', padding: 8}, text)}>
            <text>
            Filter users
            </text>
          </div>
          <Link to="/turbine" style={Object.assign({left: '60%', top: '85%'}, icon2)}><GiWindTurbine /></Link>
          <Link to="/landing" style={Object.assign({left: '57%', top: '85%'}, icon2)}><FaCarBattery /></Link>
          <Link to="/h2tcenter" style={Object.assign({left: '29%', top: '39%'}, icon2)}><GiFamilyHouse /></Link>
          <Link to="/techC" style={Object.assign({left: '31%', top: '39%'}, icon2)}><GiFactory /></Link>
          <Link to="/micro" style={Object.assign({left: '27%', top: '39%'}, icon2)}><GiFactory /></Link>
          <Link to="/dominion" style={Object.assign({left: '25%', top: '33%'}, icon2)}><GiFactory /></Link>
          <Link to="/vng" style={Object.assign({left: '30%', top: '47%'}, icon2)}><GiFactory /></Link>
          <Link to="/genplant" style={Object.assign({left: '80%', top: '75%'}, link)}>Genplant</Link>
          <Link to="/siemens" style={Object.assign({left: '80%', top: '80%'}, link)}>Siemens</Link>
          <Link to="/politicians" style={Object.assign({left: '80%', top: '85%'}, link)}>Politicians</Link>
          {user && <div>
            <Link to="/port" style={Object.assign({left: '40%', top: '85%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/canon" style={Object.assign({left: '31%', top: '42%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/newportcity" style={Object.assign({top: '60%', left: '32%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/langley" style={Object.assign({left: '35%', top: '44%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/norfolknaval" style={Object.assign({left: '40%', top: '65%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/smithfield" style={Object.assign({left: '20%', top: '58%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/hpdata" style={Object.assign({left: '28%', top: '48%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/jefferson" style={Object.assign({left: '29%', top: '34%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/eustis" style={Object.assign({left: '23%', top: '38%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/nasa" style={Object.assign({left: '37%', top: '44%'}, icon2)}><BsFillHouseFill /></Link>
          </div>}
        </body>
      </div>
    );
  }
  
  export default Map;