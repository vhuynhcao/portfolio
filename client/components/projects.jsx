import React from 'react';

class Projects extends React.Component {
  render() {
    const imgSize = {
      maxHeight: '200px',
      objectFit: 'contain'
    };

    return (
      <div className="project bg-light text-dark mt-5 py-5">
        <div className="text-center font-vellesa">Projects</div>
        <div className="container d-flex flex-wrap">
          <div className="col-md-4 mb-5">
            <div className="card bg-secondary text-center">
              <img
                className="card-img-top mt-2"
                style={imgSize}
                src="/images/memory.png"
              />
              <div className="card-body text-light">
                <h5 className="card-title">Memory Match</h5>
                <div className="card-text mb-2">
                  A memory match game that is based on the popular Japanese
                  series &#34;One Piece&#34;. Developed with jQuery, HTML5,
                  CSS3, JavaScript,and Bootstrap.
                </div>
                <div className="card-text d-flex justify-content-center">
                  <div className="btn bg-white mr-3 shadow">
                    <a
                      className="text-dark"
                      href="https://github.com/vhuynhcao/one-piece-memory-match"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                  <div className="btn bg-white shadow">
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

          <div className="col-md-4 mb-5">
            <div className="card bg-secondary text-center">
              <img
                className="card-img-top mt-2"
                style={imgSize}
                src="/images/simply.png"
              />
              <div className="card-body text-light">
                <h5 className="card-title">Simply Creative</h5>
                <div className="card-text mb-2">
                  A full stack web application developed for crafters. Developed
                  with React.js, HTML5, CSS3, PHP, MySQL, and Bootstrap.
                </div>
                <div className="card-text d-flex justify-content-center">
                  <div className="btn bg-white mr-3 shadow">
                    <a
                      className="text-dark"
                      href="https://github.com/vhuynhcao/simply-creative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                  <div className="btn bg-white shadow">
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

          <div className="col-md-4 mb-5">
            <div className="card bg-secondary text-center">
              <img
                className="card-img-top mt-2"
                style={imgSize}
                src="/images/spontaneously.png"
              />
              <div className="card-body text-light">
                <h5 className="card-title">Spontaneously</h5>
                <div className="card-text mb-2">
                  A full stack web application developed for anyone feeling
                  adventurous. Developed with React.js, HTML5, CSS3, PHP, MySQL,
                  and Bootstrap.
                </div>
                <div className="card-text d-flex justify-content-center">
                  <div className="btn bg-white mr-3 shadow">
                    <a
                      className="text-dark"
                      href="https://github.com/kevinakahoshi/spontaneous.ly"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                  <div className="btn bg-white shadow">
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
