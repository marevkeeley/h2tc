import React from "react";
import landing from "../assets/landing.png";
import dominion from "../assets/dominion.png";
import h2tc from "../assets/h2tc.png";
import micro from "../assets/micro.png";
import offshore from "../assets/offshore.png";
import vng from "../assets/vng.png";
import { useNavigate } from "react-router-dom";
// import siemens from "../assets/siemens.png";
// import canon from "../assets/canon.png";
// import h2tc2 from "../assets/h2tc2.png";

/**
 * A set of pages to show the details of items from the map screen. The user will navagete here
 * from the map page where they will see more information and then they will return to the map
 * page with a back button.
 */
const Turbine = () => {
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
      <img
        src={offshore}
        style={{ margin: -100, scale: "50%" }}
        alt="turbine"
      ></img>
      <p style={{ padding: 20 }}>
        Offshore wind out in the Atlantic Ocean off the Shore of Virginia Beach
      </p>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

const Landing = () => {
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
      <img
        src={landing}
        style={{ margin: -100, scale: "50%" }}
        alt="landing"
      ></img>
      <p style={{ padding: 20 }}>
        The Landing - Virginia Beach - 203 Red Horse Dr, Virginia Beach, VA
        <br />
        This is where the electricity will come in from the offshore wind and be
        stored in a battery bank.
      </p>
      <a
        href="https://www.azocleantech.com/article.aspx?ArticleID=1257"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </a>
      <br />
      <div style={{ padding: 10 }} />
      <button onClick={goBack}>Back</button>
    </div>
  );
};

const H2TC = () => {
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
      <img src={h2tc} style={{ scale: "50%", margin: -100 }} alt="h2tc"></img>
      <p style={{ padding: 20 }}>
        The H2TC - 700 Tech Center Parkway, Newport News VA
      </p>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

const Micro = () => {
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
      <img
        src={micro}
        style={{ scale: "50%", margin: -100 }}
        alt="microgrid"
      ></img>
      <p style={{ padding: 20 }}>
        Microgrid - 700 Tech Center Parkway, Newport News VA
      </p>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

const Dominion = () => {
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
      <img
        src={dominion}
        style={{ scale: "50%", margin: -100 }}
        alt="dominion"
      ></img>
      <p style={{ padding: 20 }}>
        Dominion Power - 551 Industrial Park, Dr., Newport News, VA
      </p>
      <a
        href="https://wjla.com/news/local/dominion-energy-is-planning-to-build-the-largest-offshore-wind-project-heres-how"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </a>
      <div style={{ padding: 10 }} />
      <button onClick={goBack}>Back</button>
    </div>
  );
};

const VNG = () => {
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
      <img
        src={vng}
        style={{ scale: "50%", margin: -100 }}
        alt="Virginia Natural Gas"
      ></img>
      <p style={{ padding: 20 }}>
        Virginia Natural Gas - 746 Diligence Dr., Newport News, VA
      </p>
      <a
        href="https://www.wavy.com/news/local-news/norfolk/whats-that-smell-strange-odor-across-parts-of-norfolk-leaves-officials-scratching-their-heads/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </a>
      <div style={{ padding: 10 }} />
      <button onClick={goBack}>Back</button>
    </div>
  );
};

const Port = () => {
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
      <img
        src={offshore}
        style={{ scale: "50%", margin: -100 }}
        alt="Port of Virginia"
      ></img>
      <p style={{ padding: 20 }}>
        The Port of Virginia - 600 World Trade Center, Norfolk, VA
      </p>
      <a
        href="https://www.virginiabusiness.com/article/port-of-virginia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </a>
      <div style={{ padding: 10 }} />
      <button onClick={goBack}>Back</button>
    </div>
  );
};

const Naval = () => {
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
      <p style={{ padding: 20 }}>
        Norfolk Naval Base - 1530 Gilbert St, Norfolk, VA
      </p>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

const Jefferson = () => {
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
      <p style={{ padding: 20 }}>
        Jefferson Labs - 12000 Jefferson Avenue, Newport News VA
      </p>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

const Cox = () => {
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
      <p style={{ padding: 20 }}>Cox - All over Virginia</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

// const Eustis = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <p style={{ padding: 20 }}>Fort Eustis - 650 Monroe Ave, Ft Eustis, VA</p>
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

// const NASA = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <p style={{ padding: 20 }}>NASA - 2 Langley Blvd, Hampton, VA</p>
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

// const Smithfield = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <p style={{ padding: 20 }}>
//         Smithfield - 200 Commerce St. Smithfield, VA
//       </p>
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

// const HP = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <p style={{ padding: 20 }}>
//         HP Data Center - Newport News not too far from the Tech Center
//       </p>
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

// const Cannon = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <img
//         src={canon}
//         style={{ scale: "50%", margin: -100 }}
//         alt="Port of Virginia"
//       ></img>
//       <p style={{ padding: 20 }}> Canon - 12000 Canon Blvd, Newport News, VA</p>
//       <a
//         href="https://www.cvi.canon.com/internet/portal/cvi/home/aboutus"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn more
//       </a>
//       <div style={{ padding: 10 }} />
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

// const Newport = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <p style={{ padding: 20 }}>
//         City of Newport News - 2400 Washington Ave, Newport News, VA
//       </p>
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

// const Langley = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <p style={{ padding: 20 }}>
//         Langley Air Force Base - 210 Sweeney Blvd, Hampton, VA
//       </p>
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

// const TechC = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };
//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <img src={h2tc2} style={{ scale: "50%", margin: -150 }} alt="h2tc2"></img>
//       <p style={{ padding: 20 }}>
//         Hydrogen Production Plant
//         <br />
//         The Landing at Virginia Beach - 203 Red Horse Dr, Virginia Beach, VA
//       </p>
//       <a
//         href="http://innovateattechcenterva.com/plans-pricing/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Lean More
//       </a>
//       <br />
//       <div style={{ padding: 10 }} />
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

// const Genplant = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <div style={{ padding: 20 }}>
//         <a
//           href="https://genplant.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ padding: 20 }}
//         >
//           Genplant
//         </a>
//         <br />
//         <p>More details coming soon</p>
//         <button onClick={goBack}>Back</button>
//       </div>
//     </div>
//   );
// };

// const Siemens = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <img
//         style={{ scale: "50%", margin: -100 }}
//         src={siemens}
//         alt="Siemens"
//       ></img>
//       <p>
//         <a
//           href="https://fuelcellsworks.com/news/siemens-energy-and-intermountain-power-agency-drive-transition-to-sustainable-energy-through-study-of-hydrogen-energy-storage-at-a-utility-scale-power-plant-in-utah/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Siemens
//         </a>
//         <br />
//         This list will grow as we understand the players better. These players
//         will be inside of the minigrids and hydrogen electrolysis plants.
//       </p>
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

// const Politicians = () => {
//   const navigate = useNavigate();
//   const goBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100%",
//         width: "100%",
//         textAlign: "center",
//       }}
//     >
//       <p style={{ padding: 20 }}>
//         <a
//           href="https://www.governor.virginia.gov/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Governor in Virginia
//         </a>
//         <br />
//         <a
//           href="https://www.senate.gov/states/VA/intro.htm"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Senators in DC
//         </a>
//         <br />
//         <a
//           href="https://docs.google.com/presentation/d/1ifc5ZlA4CIbXS9WqdMIchXECRf33XTxU/edit#slide=id.p13"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {" "}
//           Government
//         </a>
//       </p>
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

export {
  Turbine,
  Landing,
  H2TC,
  Micro,
  Dominion,
  VNG,
  Port,
  Naval,
  Jefferson,
  Cox,
};
