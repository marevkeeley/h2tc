import { useNavigate } from "react-router-dom";
/**
 * A set of pages to show the details of items from the ecosystem screen. The user will navagete here
 * from the ecosystem page where they will see more information and then they will return to the ecosystem
 * page with a back button.
 */

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
