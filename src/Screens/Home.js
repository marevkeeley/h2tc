import homeimage from "../assets/Home.png";
import { Link } from "react-router-dom";

/**
 * Creates a home page with serveral boxes sharing important information and linking to other
 * pages of the website where more information can be found.
 * @returns the home page.
 */
const Home = () => {
  return (
    <body
      className="App-header"
      style={{
        backgroundImage: `url(${homeimage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "76%",
        overflow: "hidden",
        backgroundColor: "#e8f4f8",
      }}
    >
      <div
        style={{
          top: "38%",
          left: "18%",
          width: "12%",
          position: "absolute",
          textAlign: "center",
        }}
      >
        <header style={{ fontWeight: "bold" }}>Why VT?</header>
        <p style={{ fontSize: 12 }}>
          Inspiring and equipping a generation of citizens who can take on the
          technical and social challenges of transitioning to a clean energy
          future for Virginia.
        </p>
      </div>
      <div
        style={{
          top: "50%",
          left: "40.5%",
          width: "12%",
          position: "absolute",
          textAlign: "center",
        }}
      >
        <header style={{ fontWeight: "bold" }}>GoVirginia</header>
        <Link to="/use-case">
          <p style={{ fontSize: 14 }}>Use Cases</p>
        </Link>
        <Link to="/design">
          <p style={{ fontSize: 14 }}>H2TC Build</p>
        </Link>
        <Link to="/research">
          <p style={{ fontSize: 14 }}>Workforce</p>
        </Link>
      </div>
      <div
        style={{
          top: "80%",
          left: "27.2%",
          width: "12%",
          position: "absolute",
          textAlign: "center",
        }}
      >
        <header style={{ fontWeight: "bold" }}>Go Fast Hub</header>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/spreadsheets/d/1V_t2LYVpX-3H4vuKik09D2zFEv5HQ5nMjd7-uLxNUgw/edit?usp=sharing"
        >
          <p style={{ fontSize: 14 }}>Financials</p>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/spreadsheets/d/1v6aOZfqOBMFHpp8F3c-rCi136W0RsfsdUEgPgCa3GXc/edit?usp=sharing"
        >
          <p style={{ fontSize: 14 }}>GoFast Plan</p>
        </a>
      </div>
      <div
        style={{
          top: "14%",
          left: "62.5%",
          width: "12%",
          position: "absolute",
          textAlign: "center",
        }}
      >
        <Link to="/ecosystem">
          <p style={{ fontSize: 12 }}>Ecosystem</p>
        </Link>
        <Link to="/map">
          <p style={{ fontSize: 12 }}>Peninsula Map</p>
        </Link>
        <Link to="/use-case">
          <p style={{ fontSize: 12 }}>Use Cases</p>
        </Link>
        <Link to="/design">
          <p style={{ fontSize: 12 }}>H2TC Plan</p>
        </Link>
        <Link to="/directory">
          <p style={{ fontSize: 12 }}>Contact Directory</p>
        </Link>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit?usp=sharing&ouid=117891202262649805610&rtpof=true&sd=true"
      >
        <img
          style={{
            position: "absolute",
            top: "70%",
            left: "61.7%",
            scale: "67%",
          }}
          src={require("../assets/research.png")}
          alt="Research think tank"
        />
      </a>
    </body>
  );
};

export default Home;
