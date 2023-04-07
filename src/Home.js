import './App.css';
import map from "./map.png";
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
   
const Home = () =>{
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
        backgroundPosition: 'left',
        backgroundSize: '85%',
      }}>
        <body className="App-header">
          <div style={Object.assign({left: '86%', top: '2%'}, text)}>
            <p style={{fontWeight: 'bold'}}>Key</p>
          </div>
          <GiWindTurbine style={Object.assign({left: '86%', top: '10%'}, icon)} />
          <div style={Object.assign({left: '89%', top: '8%'}, text)}>
            <p>Turbine</p>
          </div>
          <FaCarBattery style={Object.assign({left: '86%', top: '15%'}, icon)} />
          <div style={Object.assign({left: '89%', top: '13%'}, text)}>
            <p>Electricity Storage</p>
          </div>
          <GiFamilyHouse style={Object.assign({left: '86%', top: '20%'}, icon)} />
          <div style={Object.assign({left: '89%', top: '18%'}, text)}>
            <p>H2 Tech Center</p>
          </div>
          <GiFactory style={Object.assign({left: '86%', top: '25%'}, icon)} />
          <div style={Object.assign({left: '89%', top: '23%'}, text)}>
            <p>Production Plant</p>
          </div>
          <BsFillHouseFill style={Object.assign({left: '86%', top: '30%'}, icon)} />
          <div style={Object.assign({left: '89%', top: '28%'}, text)}>
            <p>Potential User</p>
          </div>
          <div onClick={() => filter()} style={Object.assign({left: '86%', top: '40%', border: '2px solid #0047AB', padding: 8}, text)}>
            <text>
            Filter users
            </text>
          </div>
          <Link to="/turbine" style={Object.assign({left: '68%', top: '80%'}, icon2)}><GiWindTurbine /></Link>
          <Link to="/landing" style={Object.assign({left: '65%', top: '80%'}, icon2)}><FaCarBattery /></Link>
          <Link to="/h2tcenter" style={Object.assign({left: '31%', top: '31%'}, icon2)}><GiFamilyHouse /></Link>
          <Link to="/techC" style={Object.assign({left: '33%', top: '31%'}, icon2)}><GiFactory /></Link>
          <Link to="/micro" style={Object.assign({left: '29%', top: '31%'}, icon2)}><GiFactory /></Link>
          <Link to="/dominion" style={Object.assign({left: '28%', top: '24%'}, icon2)}><GiFactory /></Link>
          <Link to="/vng" style={Object.assign({left: '33%', top: '34%'}, icon2)}><GiFactory /></Link>
          <Link to="/genplant" style={Object.assign({left: '86%', top: '80%'}, link)}>Genplant</Link>
          <Link to="/siemens" style={Object.assign({left: '86%', top: '85%'}, link)}>Siemens</Link>
          <Link to="/politicians" style={Object.assign({left: '86%', top: '90%'}, link)}>Politicians</Link>
          {user && <div>
            <Link to="/port" style={Object.assign({left: '45%', top: '80%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/canon" style={Object.assign({left: '31%', top: '26%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/newportcity" style={Object.assign({top: '50%', left: '36%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/langley" style={Object.assign({left: '40%', top: '32%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/norfolknaval" style={Object.assign({left: '43%', top: '60%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/smithfield" style={Object.assign({left: '22%', top: '50%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/hpdata" style={Object.assign({left: '31%', top: '38%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/jefferson" style={Object.assign({left: '34%', top: '38%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/eustis" style={Object.assign({left: '25%', top: '26%'}, icon2)}><BsFillHouseFill /></Link>
            <Link to="/nasa" style={Object.assign({left: '42%', top: '32%'}, icon2)}><BsFillHouseFill /></Link>
          </div>}
        </body>
      </div>
    );
  }
  
  export default Home;