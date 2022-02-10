import React from "react";
import "../App.css";

const Logo = () => {
    return (
        <>
        <div className="navbarLogoWrapper">
            <ul className="navbarLogoCircle">
                <li className="segment green" />
                <li className="segment darkBlue " />
                <li className="segment pink" />
                <li className="segment blue hidden" />
                <li className="segment purple hidden" />
                <li className="segment white hidden" />
                <li className="segment beige hidden" />
                <li className="segment gray hidden" />
                <li className="segment black hidden" />
                <li className="segment red" />
                <li className="segment orange" />
                <li className="segment yellow" />
            </ul>
        </div>
        </>
    );
};

export default Logo;