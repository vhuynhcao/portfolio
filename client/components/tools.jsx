import React from 'react';

class Tools extends React.Component {
  render() {
    return (
      <div className="bg-light text-dark tools my-3 py-5">
        <div className="text-center font-vellesa">Tools</div>
        <div className="dev-icon">
          <div className="container text-center d-flex flex-wrap justify-content-between mb-5">
            <i className="devicon-github-plain-wordmark"></i>
            <i className="devicon-photoshop-line"></i>
            <i className="devicon-amazonwebservices-plain-wordmark"></i>
            <i className="fab fa-figma"></i>
            <i className="devicon-chrome-plain"></i>
            <i className="devicon-babel-plain"></i>
          </div>

          <div className="container text-center d-flex flex-wrap justify-content-between">
            <i className="devicon-visualstudio-plain"></i>
            <i className="fab fa-npm"></i>
            <i className="devicon-docker-plain-wordmark"></i>
            <i className="devicon-slack-plain"></i>
            <i className="devicon-ubuntu-plain"></i>
            <i className="devicon-webpack-plain"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Tools;
