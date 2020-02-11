import React from 'react';
import Header from './header';
import Banner from './banner';
import AboutMe from './about-me';
import Projects from './projects';
import Skills from './skills';
import Tools from './tools';
import Contact from './contact';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Tools/>
        <Contact/>
      </div>
    );
  }
}

export default App;
