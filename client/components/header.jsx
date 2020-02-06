import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark text-light header sticky-top box-shadow">
          <div className="d-flex justify-content-between">
            <i className="fas fa-circle mr-2"></i>
            <i className="fas fa-circle mr-2"> </i>
            <i className="fas fa-circle mr-2"> </i>
            <i className="fas fa-circle mr-2"> </i>
            <i className="fas fa-circle mr-2"> </i>
            <i className="fas fa-circle"></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
