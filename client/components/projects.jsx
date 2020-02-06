import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-center mb-5">Projects</h1>
        <div className="container d-flex justify-content-between mb-5">
          <div type="button" className="btn btn-light">
          One Piece Memory Match
          </div>
          <div type="button" className="btn btn-light">
          Simply Creative
          </div>
          <div type="button" className="btn btn-light">
          Spontaneous.ly App
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
