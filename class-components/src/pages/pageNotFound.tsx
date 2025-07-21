import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const PageNotFound = () => {
  return (
    <div>
      <Header />
      <h2 className="message">Page not found</h2>
      <div>
        <button className="btn">{<Link to="/">Back to home</Link>}</button>
      </div>
    </div>
  );
};
