import ecosystem from "../assets/ecosystem.png";

const Ecosystem = () => {
    return (
      <div style={{
        backgroundImage: `url(${ecosystem})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '60%',
        overflow: 'hidden',
      }}>
        <body style={{overflow: 'hidden'}} className="Map">
          
        </body>
      </div>
    );
  };
  
  export default Ecosystem;