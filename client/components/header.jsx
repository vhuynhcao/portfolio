import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

class Header extends React.Component {

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark header sticky-top box-shadow">
          <div
            className="header-font cursor-pointer"
            onClick={this.scrollToTop}
          >
            VH
          </div>
          <div className="d-flex float-right justify-content-between header-nav">
            <Link
              to="about-me"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}
            >
              <div className="cursor-pointer">About Me</div>
            </Link>
            <div className="mx-1">|</div>
            <Link
              to="project"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}
            >
              <div className="cursor-pointer">Projects</div>
            </Link>
            <div className="mx-1">|</div>
            <Link
              to="skills"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}
            >
              <div className="cursor-pointer">Skills</div>
            </Link>
            <div className="mx-1">|</div>
            <Link
              to="tools"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}
            >
              <div className="cursor-pointer">Tools</div>
            </Link>
            <div className="mx-1">|</div>
            <div onClick={this.scrollToBottom} className="cursor-pointer">
              Contact
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
