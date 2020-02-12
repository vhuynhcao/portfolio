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
          <div className="header-font cursor-pointer" onClick={this.scrollToTop}>VH</div>
          <div className="d-flex float-right justify-content-between">
            <Link
              to="about-me"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}
            >
              <i className="fas fa-circle mr-2 cursor-pointer"> </i>
            </Link>
            <Link
              to="project"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}
            >
              <i className="fas fa-circle mr-2 cursor-pointer"> </i>
            </Link>
            <Link
              to="skills"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}
            >
              <i className="fas fa-circle mr-2 cursor-pointer"> </i>
            </Link>
            <Link
              to="tools"
              smooth={true}
              spy={true}
              activeClass="active"
              offset={-70}
              duration={500}
            >
              <i className="fas fa-circle mr-2 cursor-pointer"> </i>
            </Link>
            <Link to="skill" activeClass="active">
              <i
                className="fas fa-circle cursor-pointer"
                onClick={this.scrollToBottom}
              ></i>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
