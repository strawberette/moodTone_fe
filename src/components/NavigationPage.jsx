import { Link } from "react-router-dom";
import "../App.css";
import {ThemeProvider, theme, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import Toggle from "./darkModeToggle";

const NavigationPage = () => {
  return (
    <>
    <div className="navBar">
      <div className="darkModeToggle">
    <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Toggle />
        </ColorModeProvider>
      </ThemeProvider>
      </div>
      <Link to="/musisphere">Musisphere</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/emotions">Emotional Colours</Link>
    </div>
    </>
  );
};

export default NavigationPage;
