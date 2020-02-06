import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="text-light">
        <h1 className="text-center mb-5 pt-3">Contact Me</h1>

        <div className="container container-md">
          <div className="d-flex justify-content-center pb-5 contact-info">
            <i className="fas fa-map-marked-alt mr-2"></i>
            <span className="mr-5">Orange County, CA</span>
            <a className="text-light" href="tel:1-714-705-9576">
              <i className="fas fa-mobile-alt mr-2"></i>
              <span className="mr-5">&#40;714&#41; 705-9576</span>
            </a>
            <a
              className="text-light"
              href="mailto:vickyhuynhcao@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-at mr-2"></i>
              <span>vickyhuynhcao&#64;gmail&#46;com</span>
            </a>
          </div>

          <div className="container d-flex justify-content-center align-items-center pb-5">
            <a
              className="text-light"
              href="https://github.com/vhuynhcao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-github-plain mr-3 link-icon" />
            </a>
            <a
              className="text-light"
              href="https://www.linkedin.com/in/vickyhuynhcao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin mr-3 link-icon" />
            </a>
            <a
              className="text-light"
              href="/assets/vicky-huynhcao.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-pdf link-icon"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
