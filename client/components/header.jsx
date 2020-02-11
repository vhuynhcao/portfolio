import React from 'react';
import { Link } from 'react-scroll';

class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark text-light header sticky-top box-shadow">
          <div className="header-font">
            VH
          </div>
          <div className="d-flex float-right justify-content-between">
            <Link
              to="banner"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}>
              <i className="fas fa-circle mr-2"></i>
            </Link>
            <Link
              to="about-me"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}>
              <i className="fas fa-circle mr-2"> </i>
            </Link>
            <Link
              to="projects"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}>
              <i className="fas fa-circle mr-2"> </i>
            </Link>
            <Link
              to="skills"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}>
              <i className="fas fa-circle mr-2"> </i>
            </Link>
            <Link
              to="tools"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}>
              <i className="fas fa-circle mr-2"> </i>
            </Link>
            <Link
              to="contact"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}>
              <i className="fas fa-circle"></i>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
