import React from 'react';

class Contact extends React.Component {
  render() {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
      <div className="text-light my-5 py-5">
        <div className="text-center font-vellesa">Contact Me</div>

        <div className="container">
          <div className="d-flex flex-wrap justify-content-center pb-5 contact-info">
            <i className="fas fa-map-marked-alt mr-1"></i>
            <span className="mr-4">Orange County, CA</span>
            <a className="text-light" href="tel:1-714-705-9576">
              <i className="fas fa-mobile-alt mr-1"></i>
              <span className="mr-4">&#40;714&#41; 705-9576</span>
            </a>
            <a
              className="text-light"
              href="mailto:vickyhuynhcao@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-at mr-1"></i>
              <span>vickyhuynhcao&#64;gmail&#46;com</span>
            </a>
          </div>

          <div className="container d-flex justify-content-center align-items-center pb-5 link-icon">
            <a
              className="text-light"
              href="https://github.com/vhuynhcao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="devicon-github-plain mr-3" />
            </a>
            <a
              className="text-light"
              href="https://www.linkedin.com/in/vickyhuynhcao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin mr-3" />
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

        <hr></hr>
        <div className="text-center">&#169; Vicky Huynhcao {currentYear}</div>
      </div>
    );
  }
}

export default Contact;
