import React from 'react';

class Skills extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-center mb-5">Technical Skills</h1>
        <div className="container container-md skill-section mb-5">
          <div className="row d-flex justify-content-between mb-5 col-md-12">
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
      </>
    );
  }
}

export default Skills;