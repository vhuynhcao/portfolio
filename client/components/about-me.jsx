import React from 'react';

class AboutMe extends React.Component {
  render() {
    const imgSize = {
      maxHeight: '200px',
      objectFit: 'contain'
    };
    return (
      <div className="about-me">
        <div className="container container-md mb-5">
          <h1 className="text-center mb-5 pt-5">About Me</h1>
          <div className="row">
            <div className="col-md-4">
              <img style={imgSize} src="/images/profile-pic.png" />
            </div>
            <div className="col-md-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
