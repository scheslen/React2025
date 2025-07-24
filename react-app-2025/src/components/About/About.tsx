import "./about.css";

const author = {
  name: "Halina Antonik",
  description:
    // "Graduated from Belarusian State University and works as a software engineer. Passionate about learning and web design, with additional studies in Web Design and Computer Graphics.",
"I graduated from the Faculty of Applied Mathematics of the Belarusian State University. And since then I have been working as a software engineer.I like to study, learn something new, learn new skills.I've always been interested in web-design.Therefore, I decided to continue my education at the Institute of Business of the Belarusian State University with a degree in Web Design and Computer Graphics.There were interesting academic subjects and I also learned about RS School during my studies.I wanted to expand my knowledge and that’s why I’m currently studying at RS School. Everything here is how I like it: a lot of new information, communication with interesting people, challenging tasks.My current job is not related to front-end development and I do not use the HTML, CSS, and JavaScript in my work. But perhaps this knowledge will be useful to me in the future.",
  github: "https://github.com/scheslen",
  avatar: "avatar.jpg",
};

export const About = () => {
  return (
    <div className="about-page">

       <div className="logo">
          <a
            href="https://rs.school/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="logoRss.svg" alt="RSS Logo" className="rss-logo" />
          </a>
        </div>
    
      <div className="autor">
          <h3 className="name">
            <a
              href={author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              {author.name}
            </a>
          </h3>
          <p className="description">{author.description}</p>

          
            {/* <p> */}
              <a
                href="https://github.com/scheslen"
                target="_blank"
                rel="noopener noreferrer"
                className="github__link"
              >
            <img className="icon" src="github.svg" alt="icon"></img>
                {/* Halina Antonik */}
              </a>
            {/* </p> */}
          
        </div>

       

        <p>This is a non-commercial project built for educational purposes.</p>
        <p>2025</p>
      </div>
    
  );
};
