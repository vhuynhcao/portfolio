import React from 'react';
import Header from './header';
import Banner from './banner';
import AboutMe from './about-me';
import Skills from './skills';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <AboutMe/>
        <Skills/>
      </>
    );
  }
}

export default App;
