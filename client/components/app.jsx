import React from 'react';
import Header from './header';
import Banner from './banner';
import AboutMe from './about-me';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <AboutMe/>
      </>
    );
  }
}

export default App;
