import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="container"> */}
        <div className="footer__wrapper">
          <a href="https://rs.school" target="_blank" rel="noopener noreferrer">
            <img className="footer__logo" src="logoRss.svg"  alt="logo RSS" />
          </a>
          <p>2025</p>
        </div>
      {/* </div> */}
    </footer>
  );
};
