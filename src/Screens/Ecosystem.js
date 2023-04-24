import ecosystem from "../assets/ecosystem.png";

/**
 * Creates a page to show the ecosystem. The page consists of a image with buttons added on top of it
 * to allow icons to be clickable if the user wants to see more information.
 * @returns the ecosystem page.
 */
const Ecosystem = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ecosystem})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "60%",
        overflow: "hidden",
      }}
    >
      <body style={{ overflow: "hidden" }} className="Map">
        <a
          style={{
            backgroundColor: "transparent",
            // border: "1px solid gray",
            padding: 52,
            position: "absolute",
            left: "66%",
            top: "56%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.g22d80158ac8_0_45"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 42,
            position: "absolute",
            left: "65%",
            top: "34%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.g22d80158ac8_0_0"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 50,
            position: "absolute",
            left: "31%",
            top: "26%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p5"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 46,
            position: "absolute",
            left: "39%",
            top: "27%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p7"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 50,
            position: "absolute",
            left: "22%",
            top: "50%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p13"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 50,
            position: "absolute",
            left: "22%",
            top: "68%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p15"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 40,
            position: "absolute",
            left: "56%",
            top: "27%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p14"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 70,
            position: "absolute",
            left: "41%",
            top: "48%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p10"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 60,
            position: "absolute",
            left: "30%",
            top: "46%",
          }}
          href="/h2tcenter"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 70,
            position: "absolute",
            left: "34%",
            top: "72%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p9"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 70,
            position: "absolute",
            left: "45%",
            top: "72%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p9"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 70,
            position: "absolute",
            left: "56%",
            top: "72%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p9"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 50,
            position: "absolute",
            left: "67%",
            top: "74%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p10"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          style={{
            backgroundColor: "transparent",
            padding: 50,
            position: "absolute",
            left: "65%",
            top: "18%",
          }}
          href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p8"
          target="_blank"
          rel="noopener noreferrer"
        />
      </body>
    </div>
  );
};

export default Ecosystem;
