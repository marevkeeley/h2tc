import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';
import {BsSearch} from "react-icons/bs";

//Style for the navigation bar.
const navbarstyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
  padding: 5,
  backgroundColor: '#90ee90',
  position: 'relative',
}

//Style for the links in the navbar.
const link = {
  textDecoration: 'none',
  color: 'black',
}

/**
 * Creates a navagation bar at the tops of the page.
 * @returns a navigaion bar
 */
const navbar = () => {
  return (
    <div style={navbarstyle}>
      <li><div style={{padding: 3}}/></li>
      <li>
        <NavLink style={link} to="/"><img style={{height: 60}} src={logo} alt='logo'></img></NavLink>
      </li>
      <li>
        <NavLink style={link} to="/ecosystem">Ecosystem</NavLink>
      </li>
      <li>
        <NavLink style={link} to="/map">Peninsula Map</NavLink>
      </li>
      <li>
        <NavLink style={link} to="/use-case">Use Cases / Customers</NavLink>
      </li>
      <li>
        <NavLink style={link} to="/design">H2TC Design</NavLink>
      </li>
      <li>
        <NavLink style={link} to="/directory">Contact Directory</NavLink>
      </li>
      <li>
        <NavLink style={link} to="/search"><BsSearch /></NavLink>
      </li>
      <li><div style={{padding: 3}}/></li>
    </div>
  );
}

export default navbar;