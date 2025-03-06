import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'TechNoCyte',
      description: 'The Technocyte project is a dynamic web application designed to streamline and enhance the management of technical projects. Developed using HTML, CSS, JavaScript, Python and Flask, it features an intuitive interface, real-time updates, and robust functionality to support project planning, tracking, and collaboration. The project aims to improve efficiency and productivity for technical teams.',
      link: 'https://technocyte.onrender.com/',
      image: 'techno.png'
    },
    {
      title: 'Innomatics Clone',
      description: 'The Innomatics Clone is a fully responsive website replica of the Innomatics Research Labs site, developed using HTML and CSS. It features dynamic navigation, interactive sections, and optimized performance to provide users with an engaging and seamless experience.',
      link: 'https://innomaticclone.netlify.app/',
      image: 'inno.png'
    },
    {
      title: 'Shopping Cart',
      description: 'The Shopping Cart project is a dynamic web application that allows users to browse products, add items to their cart, and manage their purchases seamlessly. Developed using HTML, CSS, JavaScript, and React, it features a user-friendly interface and real-time updates.',
      link: 'https://shopping-carttz.netlify.app/',
      image: 'shop.png'
    },
    {
      title: 'Memory Match Game',
      description: 'The Memory Match Game is a fun and engaging web-based game that challenges players to match pairs of identical cards from a grid. Developed using HTML, CSS, and JavaScript',
      link: 'https://memory-gameez.netlify.app/',
      image: 'memory.png' // Add the image path
    },
    // {
    //   title: 'Project 5',
    //   description: 'Description of Project 5',
    //   link: 'https://github.com/yourusername/project5',
    //   image: 'path/to/project5-image.jpg'
    // }
  ];

  const chunkProjects = (projectsArray, chunkSize) => {
    const result = [];
    for (let i = 0; i < projectsArray.length; i += chunkSize) {
      result.push(projectsArray.slice(i, i + chunkSize));
    }
    return result;
  };

  const projectChunks = chunkProjects(projects, 2);

  return (
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <hr/>
      <Carousel>
        {projectChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="project-row">
              {chunk.map((project, i) => (
                <div key={i} className="project-card">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
