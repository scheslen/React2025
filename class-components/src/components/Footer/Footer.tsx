import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
         <div className="container">
          <a href="https://rs.school" target="_blank" rel="noopener noreferrer">
            <img
              className="footer__logo"
              src="logoRss.svg"
              alt="logo RSS"
            />
          </a>
        </div>
        <p>2025</p>
    </footer>
  );
};
