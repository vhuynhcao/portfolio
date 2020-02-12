import React from 'react';
import { Link } from 'react-scroll';

class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark text-light header sticky-top box-shadow">
          <Link
            to="banner"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
          >
            <div className="header-font cursor-pointer">VH</div>
          </Link>
          <div className="d-flex float-right justify-content-between">
            <Link
              to="about-me"
              smooth={true}
              spy={true}
              activeClass="current-location"
              offset={-70}
              duration={500}
            >
              <i className="fas fa-circle mr-2 cursor-pointer"> </i>
            </Link>
            <Link
              to="project"
              smooth={true}
              spy={true}
              activeClass="current-location"
              offset={-70}
              duration={500}
            >
              <i className="fas fa-circle mr-2 cursor-pointer"> </i>
            </Link>
            <Link
              to="skills"
              smooth={true}
              spy={true}
              activeClass="current-location"
              offset={-70}
              duration={500}
            >
              <i className="fas fa-circle mr-2 cursor-pointer"> </i>
            </Link>
            <Link
              to="tools"
              smooth={true}
              spy={true}
              activeClass="current-location"
              offset={-70}
              duration={500}
            >
              <i className="fas fa-circle mr-2 cursor-pointer"> </i>
            </Link>
            <Link
              to="tools"
              smooth={true}
              spy={true}
              activeClass="current-location"
              offset={-70}
              duration={500}
            >
              <i className="fas fa-circle cursor-pointer"></i>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
