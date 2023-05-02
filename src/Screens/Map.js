import "../App.css";
import map from "../assets/map.png";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

//Styles for various parts of the page
const icon = {
  textAlign: "center",
  position: "absolute",
  color: "#0047AB",
};

const text = {
  textAlign: "center",
  position: "absolute",
  fontSize: 16,
  color: "black",
};

/**
 * Creates a page to show the map of Virginia. The page consists of a image with buttons added on top
 * of it to allow icons to be clickable if the user wants to see more information about that location.
 * @returns the map page.
 */
const Map = () => {
  // const [user, setUser] = useState(false);

  //Allows users to choose if they want to see the users or not by toggling the users on and off.
  // const filter = () => {
  //   if (user === false) {
  //     setUser(true);
  //   } else {
  //     setUser(false);
  //   }
  // };

  return (
    <div
      //bakground
      style={{
        backgroundImage: `url(${map})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "start",
        backgroundSize: "78%",
        marginTop: 20,
        marginLeft: 20,
        overflow: "hidden",
      }}
    >
      {/* Zoomed in map with popup and icons */}
      <body style={{ overflow: "hidden" }} className="Map">
        <Popup
          trigger={
            <img
              src={require("../assets/smalllogo.png")}
              alt="H2TC Center"
              style={{
                width: "3%",
                backgroundColor: "white",
                position: "absolute",
                left: "29%",
                top: "43%",
              }}
            />
          }
          position="right"
        >
          <img
            src={require("../assets/smallmap.jpg")}
            alt="H2TechCenter map"
            style={{
              alignItem: "center",
              width: "276%",
              backgroundColor: "white",
              margin: -10,
            }}
          />
          <img
            src={require("../assets/smalllogo.png")}
            alt="H2TC Center"
            style={{ position: "absolute", top: "50%", left: "102%", backgroundColor: 'white', width: '30%' }}
          />
          <img
            src={require("../assets/jeffersonIcon.png")}
            alt="Jefferson labs"
            style={{ position: "absolute", top: "84%", left: "102%", width: '40%' }}
          />
          <img
            src={require("../assets/23.png")}
            alt="microgrid"
            style={{ position: "absolute", top: "72%", left: "140%", width: '20%' }}
          />
           <img
            src={require("../assets/6.png")}
            alt="microgrid"
            style={{ position: "absolute", top: "78%", left: "160%", width: '12%' }}
          />
          <img
            src={require("../assets/3.png")}
            alt="microgrid"
            style={{ position: "absolute", top: "80%", left: "176%", width: '20%' }}
          />
          <img
            src={require("../assets/2.png")}
            alt="microgrid"
            style={{ position: "absolute", top: "84%", left: "200%", width: '20%' }}
          />
        </Popup>
        {/* Key beside map */}
        <div style={Object.assign({ left: "82%", top: "12%" }, text)}>
          <p style={{ fontWeight: "bold" }}>Key</p>
        </div>
        <img
          src={require("../assets/1.png")}
          alt="Turbine"
          style={Object.assign({ left: "82%", top: "20%", width: "3%" }, icon)}
        />
        <div style={Object.assign({ left: "86%", top: "18%" }, text)}>
          <p>Turbine</p>
        </div>
        <img
          src={require("../assets/2.png")}
          alt="Landing"
          style={Object.assign({ left: "82%", top: "30%", width: "3%" }, icon)}
        />
        <div style={Object.assign({ left: "86%", top: "29%" }, text)}>
          <p>Production</p>
        </div>
        <img
          src={require("../assets/smalllogo.png")}
          alt="H2TC Center"
          style={Object.assign({ left: "82%", top: "40%", width: "3%" }, icon)}
        />
        <div style={Object.assign({ left: "86%", top: "39%" }, text)}>
          <p>H2 Tech Center</p>
        </div>
        <img
          src={require("../assets/23.png")}
          alt="Microgrid"
          style={Object.assign({ left: "82%", top: "50%", width: "3%" }, icon)}
        />
        <div style={Object.assign({ left: "86%", top: "49%" }, text)}>
          <p>MicroGrid</p>
        </div>

        {/* <div
          onClick={() => filter()}
          style={Object.assign(
            {
              left: "80%",
              top: "50%",
              border: "2px solid #0047AB",
              padding: 8,
            },
            text
          )}
        >
          <text>Filter users</text>
        </div> */}
        {/* Locations on map */}
        <Link
          to="/turbine"
          style={{
            position: "absolute",
            scale: "4%",
            left: "34%",
            top: "14%",
          }}
        >
          <img src={require("../assets/1.png")} alt="Turbine" />
        </Link>
        <Link
          to="/landing"
          style={{ left: "26%", top: "25%", position: "absolute", scale: "4%" }}
        >
          <img src={require("../assets/2.png")} alt="Landing" />
        </Link>
        <Link
          to="/micro"
          style={{
            left: "-6%",
            top: "-40%",
            position: "absolute",
            scale: "4%",
          }}
        >
          <img src={require("../assets/23.png")} alt="Microgrid" />
        </Link>
        <Link
          to="/dominion"
          style={{
            left: "15%",
            top: "33%",
            position: "absolute",
            scale: "18%",
          }}
        >
          <img src={require("../assets/dominionIcon.png")} alt="Dominion" />
        </Link>
        <Link
          to="/vng"
          style={{
            left: "23%",
            top: "20%",
            position: "absolute",
            scale: "18%",
          }}
        >
          <img
            src={require("../assets/vngIcon.jpg")}
            alt="Virginia Natural Gas"
          />
        </Link>
        <Link
          to="/port"
          style={{
            left: "5.5%",
            top: "75%",
            position: "absolute",
            scale: "22%",
          }}
        >
          <div>
            <img
              src={require("../assets/portIcon.png")}
              alt="Port of Virginia"
            />
            <img
              src={require("../assets/2.png")}
              alt="Production"
              style={{ width: "10%" }}
            />
          </div>
        </Link>
        <Link
          to="/cox"
          style={{
            left: "20%",
            top: "80%",
            position: "absolute",
            scale: "24%",
          }}
        >
          <img src={require("../assets/coxIcon.png")} alt="Cox" />
        </Link>
        <Link
          to="/jefferson"
          style={{
            position: "absolute",
            scale: "25%",
            left: "24%",
            top: "48%",
          }}
        >
          <img
            src={require("../assets/jeffersonIcon.png")}
            alt="Jefferson Labs"
          />
        </Link>
        <a
          href="/naval"
          style={{
            position: "absolute",
            left: "36%",
            top: "61%",
            scale: "20%",
          }}
        >
          <img src={require("../assets/navalIcon.jpg")} alt="Naval Base" />
        </a>
        {/* Extra links */}
        {/* <Link
          to="/genplant"
          style={Object.assign({ left: "80%", top: "75%" }, link)}
        >
          Genplant
        </Link>
        <Link
          to="/siemens"
          style={Object.assign({ left: "80%", top: "80%" }, link)}
        >
          Siemens
        </Link>
        <Link
          to="/politicians"
          style={Object.assign({ left: "80%", top: "85%" }, link)}
        >
          Politicians
        </Link> */}
        {/* Users on map */}
        {/* <div>
          <Link
            to="/port"
            style={Object.assign({ left: "40%", top: "85%" }, icon2)}
          >
            <BsFillHouseFill />
          </Link>
          <Link
            to="/canon"
            style={Object.assign({ left: "31%", top: "42%" }, icon2)}
          >
            <BsFillHouseFill />
          </Link>
          <Link
            to="/newportcity"
            style={Object.assign({ top: "60%", left: "32%" }, icon2)}
          >
            <BsFillHouseFill />
          </Link>
          <Link
            to="/langley"
            style={Object.assign({ left: "35%", top: "44%" }, icon2)}
          >
            <BsFillHouseFill />
          </Link>
          <Link
            to="/norfolknaval"
            style={Object.assign({ left: "40%", top: "65%" }, icon2)}
          >
            <BsFillHouseFill />
          </Link>
          <Link
            to="/smithfield"
            style={Object.assign({ left: "20%", top: "58%" }, icon2)}
          >
            <BsFillHouseFill />
          </Link>
          <Link
            to="/hpdata"
            style={Object.assign({ left: "28%", top: "48%" }, icon2)}
          >
            <BsFillHouseFill />
          </Link>
          <Link
            to="/jefferson"
            style={Object.assign({ left: "29%", top: "34%" }, icon2)}
          >
            <BsFillHouseFill />
          </Link>
          <Link
            to="/eustis"
            style={Object.assign({ left: "23%", top: "38%" }, icon2)}
          >
            <BsFillHouseFill />
          </Link>
          <Link
            to="/nasa"
            style={Object.assign({ left: "37%", top: "44%" }, icon2)}
          >
            <BsFillHouseFill />
          </Link>
        </div> */}
      </body>
    </div>
  );
};

export default Map;
