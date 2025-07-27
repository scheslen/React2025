import "./header.css";
import { Menu } from "../Menu/Menu";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Star Trek</h1>
        <Menu />
      </div>
    </header>
  );
};
