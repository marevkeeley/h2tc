import ecosystem from "../assets/ecosystem.png";

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
        <button
          style={{
            backgroundColor: "transparent",
            border: "2px solid black",
            padding: 40,
            position: 'absolute',
            left: '66%',
            top: '56%',
          }}
        />
      </body>
    </div>
  );
};

export default Ecosystem;
