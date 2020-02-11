import React from 'react';

class Tools extends React.Component {
  render() {
    return (
      <div className="bg-light text-dark tools">
        <div className="text-center mb-5 pt-5 font-vellesa">Tools</div>
        <div className="container d-flex flex-wrap justify-content-between mb-5 dev-icon">
          <i className="devicon-github-plain-wordmark"></i>
          <i className="devicon-photoshop-line"></i>
          <i className="devicon-amazonwebservices-plain-wordmark"></i>
          <i className="fab fa-figma"></i>
          <i className="devicon-chrome-plain"></i>
          <i className="devicon-babel-plain"></i>
          <i className="devicon-visualstudio-plain"></i>
          <i className="fab fa-npm"></i>
          <i className="devicon-docker-plain-wordmark"></i>
          <i className="devicon-slack-plain"></i>
          <i className="devicon-ubuntu-plain"></i>
          <i className="devicon-webpack-plain"></i>
        </div>
      </div>
    );
  }
}

export default Tools;
