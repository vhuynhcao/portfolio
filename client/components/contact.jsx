import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center mb-5 mt-5">Contact Me</h1>

        <div className="container container-md">
          <div className="d-flex justify-content-center mb-3 contact-info">
            <i className="fas fa-map-marked-alt mr-2"></i>
            <span className="mr-5">Orange County, CA</span>
            <a className="text-dark" href="tel:1-714-705-9576">
              <i className="fas fa-mobile-alt mr-2"></i>
              <span className="mr-5">&#40;714&#41; 705-9576</span>
            </a>
            <a
              className="text-dark"
              href="mailto:vickyhuynhcao@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-at mr-2"></i>
              <span>vickyhuynhcao&#64;gmail&#46;com</span>
            </a>
          </div>

          <div className="container d-flex justify-content-center align-items-center mb-5">
            <a
              className="text-dark"
              href="https://github.com/vhuynhcao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-github-plain mr-2 link-icon"/>
            </a>
            <a
              className="text-dark"
              href="https://www.linkedin.com/in/vickyhuynhcao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin mr-2 link-icon"/>
            </a>
            <a
              className="text-dark"
              href="/assets/vicky-huynhcao.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file link-icon"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
