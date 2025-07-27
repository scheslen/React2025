import "./about.css";

const author = {
  name: "Halina Antonik",
  description:
    "Graduated from Belarusian State University. Passionate about learning and web design, with additional studies in Web Design and Computer Graphics.",
  github: "https://github.com/scheslen",
};

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-txt">
        <p>
          The project was created for educational purposes as part of the RS
          School React course.
        </p>
      </div>
      <div className="logo">
        <a
          href="https://rs.school/courses/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="rss-logo" src="logoRss.svg" alt="RSS Logo" />
        </a>
      </div>

      <div className="author">
        <h3 className="name"> {author.name} </h3>
        <p className="description">{author.description}</p>
        <a
          href="https://github.com/scheslen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="git-icon" src="github.svg" alt="github icon"></img>
        </a>
      </div>

      <p>2025</p>
    </div>
  );
};
