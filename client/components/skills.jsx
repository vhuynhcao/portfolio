import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <div className="text-center mb-5 pt-5 font-vellesa">
          Technical Skills
        </div>
        <div className="container container-md dev-icon mb-5">
          <div className="row d-flex justify-content-between mb-5">
            <i className="devicon-html5-plain-wordmark"></i>
            <i className="devicon-css3-plain-wordmark"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-jquery-plain-wordmark"></i>
          </div>
          <div className="row d-flex justify-content-between col-md-12">
            <i className="devicon-react-original-wordmark"></i>
            <i className="devicon-php-plain"></i>
            <i className="devicon-mysql-plain-wordmark"></i>
            <i className="devicon-bootstrap-plain-wordmark"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
