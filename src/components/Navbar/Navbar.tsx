import { NavLink } from "react-router-dom";
import "./navbar.css";
import SaindratexLogo from "../../../public/assets/saindra-tex.png";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src={SaindratexLogo} alt="kala towels logo" />
      </NavLink>
      <a href="https://wa.me/918421975405">
        <button>WhatsApp</button>
      </a>
    </nav>
  );
};
