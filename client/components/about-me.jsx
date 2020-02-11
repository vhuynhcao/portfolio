import React from 'react';

class AboutMe extends React.Component {
  render() {
    const imgSize = {
      maxHeight: '200px',
      objectFit: 'contain'
    };
    return (
      <div className="container about-me mb-5">
        <div className="text-center font-vellesa">About Me</div>
        <div className="d-flex flex-wrap">
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
    );
  }
}

export default AboutMe;
