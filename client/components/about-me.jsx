import React from 'react';

class AboutMe extends React.Component {
  render() {
    const imgSize = {
      maxHeight: '200px',
      objectFit: 'contain'
    };
    return (
      <div className="container about-me mb-5">
        <div className="text-center font-vellesa">About Me</div>
        <div className="d-flex flex-wrap">
          <div className="col-md-4">
            <div>
              <img style={imgSize} src="/images/profile-pic.png" />
            </div>
            <div className="mt-1 mb-3">
              <a
                className="text-light"
                href="https://github.com/vhuynhcao"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="devicon-github-plain ml-4 mr-4" />
              </a>
              <a
                className="text-light"
                href="https://www.linkedin.com/in/vickyhuynhcao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin mr-4" />
              </a>
              <a
                className="text-light"
                href="mailto:vickyhuynhcao@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-at mr-4"></i>
              </a>

              <a className="text-light" href="tel:1-714-705-9576">
                <i className="fas fa-mobile-alt mr-4"></i>
              </a>
              <a
                className="text-light"
                href="/assets/vicky-huynhcao.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-pdf" />
              </a>
            </div>
          </div>
          <div className="col-md-8">
            <p>
              My name is Vicky Huynhcao and I am a Full Stack Developer who has
              a passion and desire to code and design. I possess an eagerness
              and willingness to learn more languages to expand my knowledge of
              the tech industry.
            </p>
            <p>
              I am knowledgeable in JavaScript, jQuery, React.js, PHP, MySQL,
              HTML, CSS, and Bootstrap. My projects include a variety of tools I have
              utilized such as GitHub, Webpack, and npm. I had the most
              wonderful opportunity to work not only by myself, but as part of a
              team in multiple group projects to develop full stack
              applications.
            </p>
            <p>
              My goal is to bring my background and expertise in customer
              service into a team to help satisfy clients with any and all
              requests they may have for their products.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
