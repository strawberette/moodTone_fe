import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const MobileMenu = () => {
    return (
        <div className="mobileMenu">
            <ul className="mobileMenuList">
                <li className="mobileMenuLink"><Link to="/emotions">Emotional Colours</Link></li>
                <li><hr /></li>
                <li className="mobileMenuLink"><Link to="/musisphere">Musisphere</Link></li>
                <li><hr /></li>
                <li className="mobileMenuLink"><Link to="/profile">Profile</Link></li>
                <li><hr /></li>
                <li className="mobileMenuLink"><Link to="/">Log Out</Link></li>
            </ul>
        </div>
    );
};

export default MobileMenu;