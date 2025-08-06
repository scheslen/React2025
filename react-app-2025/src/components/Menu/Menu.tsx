import { NavLink, useNavigate } from "react-router-dom";
import { MenuProps } from "../../app/types";
import "./menu.css";

export const Menu = ({ onClick }: MenuProps) => {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    if (url.startsWith("#")) return;

    e.preventDefault();

    if (onClick) onClick();

    setTimeout(() => {
      navigate(url);
    }, 300);
  };

  return (
    <ul className="nav">
      <li className="menu__item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu__link active" : "menu__link"
          }
          onClick={(e) => handleLinkClick(e, "/")}
        >
          Home
        </NavLink>
      </li>

      <li className="menu__item">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "menu__link active" : "menu__link"
          }
          onClick={(e) => handleLinkClick(e, "/about")}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
};
