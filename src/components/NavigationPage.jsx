import { Link } from "react-router-dom";
import "../App.css";
import {ThemeProvider, theme, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import Toggle from "./darkModeToggle";
import Logout from "./Logout";

const NavigationPage = () => {
  
  return (
    <>
    <div >
      <ul className="navBar">
        <li><div className="darkModeToggle">
          <ThemeProvider theme={theme}>
            <ColorModeProvider>
              <CSSReset />
              <Toggle />
            </ColorModeProvider>
          </ThemeProvider>
        </div></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/emotions">Emotional Colours</Link></li>
        <li><Link to="/musisphere">Musisphere</Link></li>
        <li><Logout /></li>
      </ul>
    </div>
    </>
  );
};

export default NavigationPage;
