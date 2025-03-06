import React, { useRef } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Header
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <main>
        <section ref={aboutRef} className="section">
          <AboutMe />
        </section>
        <section ref={skillsRef} className="section">
          <Skills />
        </section>
        <section ref={projectsRef} className="section">
          <Projects />
        </section>
        <section ref={contactRef} className="section">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;
