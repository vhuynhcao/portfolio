import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <div className="text-center font-vellesa">
          Technical Skills
        </div>
        <div className="container d-flex flex-wrap justify-content-between dev-icon mb-5">
          <i className="devicon-html5-plain-wordmark"></i>
          <i className="devicon-css3-plain-wordmark"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-jquery-plain-wordmark"></i>
          <i className="devicon-react-original-wordmark"></i>
          <i className="devicon-php-plain"></i>
          <i className="devicon-mysql-plain-wordmark"></i>
          <i className="devicon-bootstrap-plain-wordmark"></i>
        </div>
      </div>
    );
  }
}

export default Skills;
