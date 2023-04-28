import double from "../assets/double.png";

/**
 * Creates a page to show use cases and customers.
 * @returns the use case page.
 */
const Use = () => {
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
        <header style={{ fontWeight: "bold" }}>Use Cases</header>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/presentation/d/1pIrG8HRt9gbmw5-jXqNTRFhCnshzY-Iz/edit?usp=sharing&ouid=117891202262649805610&rtpof=true&sd=true"
        >
          <p style={{ fontSize: 14 }}>H2 Use Cases</p>
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
        <header style={{ fontWeight: "bold" }}>Financials</header>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/spreadsheets/d/1dUygEbU0pd65wRAxxdit8hoaF6c4ARSft3YayNPXgqY/edit?usp=sharing"
        >
          <p style={{ fontSize: 14 }}>Use Case Financials</p>
        </a>
      </div>
    </body>
  );
};

export default Use;
