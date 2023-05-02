import "../App.css";
import map from "../assets/map.png";
import { Link } from "react-router-dom";

//Styles for various parts of the page
const icon = {
  textAlign: "center",
  position: "absolute",
  color: "#0047AB",
};

const icon2 = {
  textAlign: "center",
  position: "absolute",
  color: "#0047AB",
  scale: "150%",
};

// const link = {
//   backgroundColor: "white",
//   borderRadius: 10,
//   padding: 5,
//   textAlign: "center",
//   position: "absolute",
//   fontSize: 16,
//   underlined: "false",
//   textDecoration: "none",
//   color: "#0047AB",
// };

const text = {
  textAlign: "center",
  position: "absolute",
  fontSize: 16,
  color: "#0047AB",
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
      <body style={{ overflow: "hidden" }} className="Map">
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
          style={Object.assign({ left: "33%", top: "92%" }, icon2)}
        >
          <img
            src={require("../assets/1.png")}
            alt="Turbine"
            style={{ width: "2%" }}
          />
        </Link>
        <Link
          to="/landing"
          style={Object.assign({ left: "26%", top: "92%" }, icon2)}
        >
          <img
            src={require("../assets/2.png")}
            alt="Landing"
            style={{ width: "2%" }}
          />
        </Link>
        <Link
          to="/h2tcenter"
          style={Object.assign({ left: "26%", top: "43%" }, icon2)}
        >
          <img
            src={require("../assets/smalllogo.png")}
            alt="H2TC Center"
            style={{ width: "16%", backgroundColor: "white" }}
          />
        </Link>
        <Link
          to="/micro"
          style={Object.assign({ left: "-6%", top: "43%" }, icon2)}
        >
          <img
            src={require("../assets/23.png")}
            alt="Microgrid"
            style={{ width: "2%" }}
          />
        </Link>
        <Link
          to="/dominion"
          style={Object.assign({ left: "15%", top: "33%" }, icon2)}
        >
          <img
            src={require("../assets/dominionIcon.png")}
            alt="Dominion"
            style={{ width: "10%" }}
          />
        </Link>
        <Link
          to="/vng"
          style={Object.assign({ left: "23%", top: "34%" }, icon2)}
        >
          <img
            src={require("../assets/vngIcon.jpg")}
            alt="Landing"
            style={{ width: "10%" }}
          />
        </Link>
        <Link
          to="/port"
          style={Object.assign({ left: "0%", top: "82%" }, icon2)}
        >
          <div>
            <img
              src={require("../assets/portIcon.png")}
              alt="Port of Virginia"
              style={{ width: "4%" }}
            />
            <img
              src={require("../assets/2.png")}
              alt="Production"
              style={{ width: "2%" }}
            />
          </div>
        </Link>
        <Link
          to="/cox"
          style={Object.assign({ left: "20%", top: "80%" }, icon2)}
        >
          <img
            src={require("../assets/coxIcon.png")}
            alt="Cox"
            style={{ width: "10%" }}
          />
        </Link>
        <Link
          to="/jefferson"
          style={Object.assign({ left: "24%", top: "50%" }, icon2)}
        >
          <img
            src={require("../assets/jeffersonIcon.png")}
            alt="Jefferson Labs"
            style={{ width: "10%" }}
          />
        </Link>
        <Link
          to="/naval"
          style={Object.assign({ left: "36%", top: "73%" }, icon2)}
        >
          <img
            src={require("../assets/navalIcon.jpg")}
            alt="Naval Base"
            style={{ width: "10%" }}
          />
        </Link>
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
