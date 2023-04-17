import { useNavigate } from "react-router-dom";

const Wind = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <p style={{ padding: 20 }}>Wind</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export { Wind };
