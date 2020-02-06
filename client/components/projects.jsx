import React from 'react';

class Projects extends React.Component {
  render() {

    return (
      <div className="bg-dark project text-light">
        <h1 className="text-center pt-3 mb-5">Projects</h1>
        <div className="container mb-5 d-flex">
          <div className="col-md-4">
            <div className="card box-shadow bg-secondary text-center">
              <img
                src="/images/memory.png"
                className="card-img-top image-size mt-3"
              />
              <div className="card-body">
                <h5 className="card-title">One Piece Memory Match</h5>
                <p className="card-text">
                  A memory match game that is based on the popular Japanese
                  series &#34;One Piece&#34;. Developed with jQuery, HTML5,
                  CSS3, JavaScript,and Bootstrap.
                </p>
                <div className="card-text">
                  <div className="btn bg-white mr-3 box-shadow">
                    <a
                      className="text-dark"
                      href="https://github.com/vhuynhcao/one-piece-memory-match"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                  <div className="btn box-shadow bg-white">
                    <a
                      className="text-dark"
                      href="https://memorymatch.vn-codes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card box-shadow bg-secondary text-center">
              <img
                src="/images/simply.png"
                className="card-img-top image-size mt-3"
              />
              <div className="card-body">
                <h5 className="card-title">Simply Creative</h5>
                <p className="card-text">
                  A full stack web application developed for crafters. Developed
                  with React.js, HTML5, CSS3, PHP, MySQL, and Bootstrap.
                </p>
                <div className="card-text">
                  <div className="btn box-shadow bg-white mr-3">
                    <a
                      className="text-dark"
                      href="https://github.com/vhuynhcao/simply-creative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                  <div className="btn box-shadow bg-white">
                    <a
                      className="text-dark"
                      href="https://simplycreative.vn-codes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card box-shadow bg-secondary text-center">
              <img
                src="/images/spontaneously.png"
                className="card-img-top image-size mt-3"
              />
              <div className="card-body">
                <h5 className="card-title">Spontaneous.ly</h5>
                <p className="card-text">
                  A full stack web application developed for anyone feeling
                  adventurous. Developed with React.js, HTML5, CSS3, PHP, MySQL,
                  and Bootstrap.
                </p>
                <div className="card-text">
                  <div className="btn box-shadow bg-white mr-3">
                    <a
                      className="text-dark"
                      href="https://github.com/kevinakahoshi/spontaneous.ly"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                  <div className="btn box-shadow bg-white">
                    <a
                      className="text-dark"
                      href="https://spontaneouslyapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
