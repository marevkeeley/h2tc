import hex from "../assets/Hex.png";

/**
 * Creates a page to show the directory.
 * @returns the directory page.
 */
const Directory = () => {
  return (
    <body
    className="App-header"
    style={{
      backgroundImage: `url(${hex})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "24%",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        top: "50%",
        left: "40%",
        width: "20%",
        position: "absolute",
        textAlign: "center",
      }}
    >
      <header style={{ fontWeight: "bold" }}>Contact Directory</header>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://docs.google.com/spreadsheets/d/1aOcjR8Ge06XKuHEHuzo1wHKLtnE4qaO4o8--aCBVN6A/edit?usp=sharing"
      >
        <p style={{ fontSize: 14 }}>Directory</p>
      </a>
    </div>
  </body>
  );
};

export default Directory;
