import { Link } from "react-router-dom";

const NavigationPage = () => {
  return (
    <div className="NavigationPage">
      <Link to="/musisphere">Musisphere</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/emotions">Emotional Colours</Link>
    </div>
  );
};

export default NavigationPage;
