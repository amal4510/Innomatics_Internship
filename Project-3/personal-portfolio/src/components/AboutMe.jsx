import React, { Component } from 'react';
import '../styles/AboutMe.css';

export default class AboutMe extends Component {
  render() {
    return (
      <>
      <div className='container'>
        <div className="abt-text-title">About Me</div>
        <hr />
        <p className="abt-ptext">👋 Hi there! <br />
          I'm Amal Manoj, a recent graduate from the University of Mumbai with a passion for development.
          Based in Mumbai, Maharashtra, India, I'm excited to bring innovative solutions to the tech world.
          I thrive in dynamic environments where creativity meets technology.
          Let's create something amazing together!
        </p>
        </div>
      </>
    );
  }
}
