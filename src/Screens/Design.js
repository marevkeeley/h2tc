import double from "../assets/double.png";

/**
 * Creates a page to show design.
 * @returns the design page.
 */
const Design = () => {
  return (
    <body
      className="App-header"
      style={{
        backgroundImage: `url(${double})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "70%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          top: "38%",
          left: "31%",
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
      </div>
      <div
        style={{
          top: "58%",
          left: "49%",
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
    </body>
  );
};

export default Design;
