import React from "react";
import "../App.css";

const Logo = () => {
    return (
        <>
        <div className="logoWrapper">
            <ul className="circle">
                <li className="segment green" />
                <li className="segment darkBlue " />
                <li className="segment pink" />
                <li className="segment red" />
                <li className="segment orange" />
                <li className="segment yellow" />
            </ul>
            <div className="text">
        <h2>moodTone</h2>
    </div>
        </div>
        
    </>
    );
};

export default Logo;