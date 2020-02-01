import React from 'react';
import Header from './header';
import Banner from './banner';
import AboutMe from './about-me';
import Skills from './skills';
import Tools from './tools';
import Contact from './contact';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Banner/>
        <AboutMe/>
        <Skills/>
        <Tools/>
        <Contact/>
      </>
    );
  }
}

export default App;
