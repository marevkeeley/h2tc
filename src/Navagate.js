import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Ecosystem from "./Screens/Ecosystem";
import Map from "./Screens/Map";
import Use from "./Screens/Use";
import Design from "./Screens/Design";
import Directory from "./Screens/Directory";
import GoVirginia from "./Screens/GoVirginia";
import HydrogenHub from "./Screens/HydrogenHub";
import Research from "./Screens/Research";
import Search from "./Screens/Search";
import {
  Turbine,
  Cox,
  Jefferson,
  Landing,
  H2TC,
  Micro,
  Dominion,
  VNG,
  Port,
  Naval
} from "./Screens/MapScreens";

/**
 * Holds the routes to every page in the website.
 * @returns routes for all of the pages.
 */
const Navagate = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ecosystem" element={<Ecosystem />} />
      <Route path="/map" element={<Map />} />
      <Route path="/use-case" element={<Use />} />
      <Route path="/design" element={<Design />} />
      <Route path="/directory" element={<Directory />} />
      <Route path="/govirginia" element={<GoVirginia />} />
      <Route path="/h2hub" element={<HydrogenHub />} />
      <Route path="/research" element={<Research />} />
      <Route path="/search" element={<Search />} />

      <Route path="/turbine" element={<Turbine />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/h2tcenter" element={<H2TC />} />
      <Route path="/micro" element={<Micro />} />
      <Route path="/dominion" element={<Dominion />} />
      <Route path="/vng" element={<VNG />} />
      <Route path="/port" element={<Port />} />
      <Route path="/cox" element={<Cox />} />
      <Route path="/naval" element={<Naval />} />
      <Route path="/jefferson" element={<Jefferson />} />
    </Routes>
  );
};

export default Navagate;
