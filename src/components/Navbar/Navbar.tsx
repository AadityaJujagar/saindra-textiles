import { NavLink } from "react-router-dom";
import "./navbar.css";
import kalatexLogo from "../../../public/assets/kalatexLogo.png";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src={kalatexLogo} alt="kala towels logo" />
      </NavLink>
      <a href="">
        <button>WhatsApp</button>
      </a>
    </nav>
  );
};
