import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <div>
        <button>{<Link to="/">Back to home</Link>}</button>
      </div>
    </div>
  );
};
