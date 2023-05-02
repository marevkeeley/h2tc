import double from "../assets/double.png";

/**
 * Creates a page to show design.
 * @returns the design page.
 */
const Design = () => {
  return (
    <body className="App-header2">
      <div style={{ flex: 1 }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/spreadsheets/d/1BHXrnV9Q8NwSeU_CAzdXHYmNjHjufmCdpbkDMp0c7KI/edit?usp=sharing"
        >
          <img
            alt="dashboard"
            src={require("../assets/dash.png")}
            style={{ paddingLeft: 100, width: "80%" }}
          />
        </a>
      </div>
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${double})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "70%",
          overflow: "hidden",
        }}
      >
        <img
          alt="background"
          src={require("../assets/double.png")}
          style={{ width: "100%", paddingRight: 100 }}
        />
        <div
          style={{
            top: "39%",
            left: "59%",
            width: "20%",
            position: "absolute",
            textAlign: "center",
          }}
        >
          <header style={{ fontWeight: "bold" }}>Project Plan</header>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/spreadsheets/d/1Nwk09iHT7JMrnE0WTv6JH-0sDVAOGWk3p2nwYszMngA/edit?usp=sharing"
          >
            <p style={{ fontSize: 14 }}>H2 Project Plans</p>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="hhttps://docs.google.com/spreadsheets/d/1Nwk09iHT7JMrnE0WTv6JH-0sDVAOGWk3p2nwYszMngA/edit?usp=sharing"
          >
            <p style={{ fontSize: 14 }}>Sponsorship</p>
          </a>
        </div>
        <div
          style={{
            top: "55%",
            left: "72%",
            width: "20%",
            position: "absolute",
            textAlign: "center",
          }}
        >
          <header style={{ fontWeight: "bold" }}>Layout</header>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1_Z1SwqcBUucsMn4SjjHpjRh6_quEgsfT/edit?usp=sharing&ouid=117891202262649805610&rtpof=true&sd=true"
          >
            <p style={{ fontSize: 14 }}>H2TC Layout</p>
          </a>
        </div>
      </div>
    </body>
  );
};

export default Design;
