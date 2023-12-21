import Navbottom from "../navbar/NavLinks/NavLinks.js";
import Navtop from "../navbar/Container/Container.js";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <Navtop />
      <Navbottom />
    </div>
  );
};

export default Header;
