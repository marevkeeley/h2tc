import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png';

const navbarstyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
  padding: 5,
  backgroundColor: '#90ee90',
  position: 'relative',
}

const link = {
  textDecoration: 'none',
  color: 'black',
}

const navbar= () =>{
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
      <li><div style={{padding: 3}}/></li>
    </div>
  );
}

export default navbar;