import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logoImg from "../assets/logo.png"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logoImg} alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Livestock</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="auth-buttons">
                <button className="login-button">Login</button>
                <button className="sign-up-button">Sign Up</button>
            </div>
        </nav>
    );
};

export default NavBar;
