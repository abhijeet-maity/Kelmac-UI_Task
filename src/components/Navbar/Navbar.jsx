import React from 'react';
import logo from "../../images/Group 1.png";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="" className='logo'/>
        <div className='right-section'>
            <h3>+91 98920 98920</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Courses</Link></li>
                <li><Link to="/">Training</Link></li>
            </ul>
            <button className='btn'>Contact us</button>
        </div>
    </nav>
  )
}

export default Navbar