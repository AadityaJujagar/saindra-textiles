import { NavLink } from "react-router-dom";
import "./navbar.css";
import SaindratexLogo from "../../../public/assets/saindra-tex.png";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src={SaindratexLogo} alt="kala towels logo" />
      </NavLink>
      <a href="">
        <button>WhatsApp</button>
      </a>
    </nav>
  );
};
