import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-center mb-5 mt-5">Contact Me</h1>

        <div className="container container-md mb-5">
          <div className="d-flex justify-content-center mb-3 contact-info">
            <i className="fas fa-map-marked-alt mr-2"></i>
            <span className="mr-5">Orange County, CA</span>
            <i className="fas fa-mobile-alt mr-2"></i>
            <span className="mr-5">&#40;714&#41; 705-9576</span>
            <i className="fas fa-at mr-2"></i>
            <span>vickyhuynhcao&#64;gmail&#46;com</span>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <a
              className="text-white"
              href="https://github.com/vhuynhcao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-github-plain mr-2 link-icon"></i>
            </a>
            <a
              className="text-white"
              href="https://www.linkedin.com/in/vickyhuynhcao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin mr-2 link-icon"></i>
            </a>
            <a
              className="text-white"
              href="/assets/vicky-huynhcao.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file link-icon"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
