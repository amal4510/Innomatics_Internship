import React, { Component } from 'react';
import '../styles/Skills.css';

export default class Skills extends Component {
  render() {
    return (
      <>
        <div className="skills-text-title">Skills</div>
        <hr />
        <section className="skills-section p-5">
          <div className="skills-container">
            <div className="skill-card">
              <h4>Programming Languages</h4>
              <div className="skills-details">
                <div className="skill-item">
                  <span>Python</span>
                  <div className="progress" data-progress="90%">
                    <div className="progress-bar" style={{ '--progress-width': '90%' }}>90%</div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>JavaScript</span>
                  <div className="progress" data-progress="80%">
                    <div className="progress-bar" style={{ '--progress-width': '80%' }}>80%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-card">
              <h4>Backend Development</h4>
              <div className="skills-details">
                <div className="skill-item">
                  <span>Flask</span>
                  <div className="progress" data-progress="75%">
                    <div className="progress-bar" style={{ '--progress-width': '75%' }}>75%</div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Django</span>
                  <div className="progress" data-progress="45%">
                    <div className="progress-bar" style={{ '--progress-width': '45%' }}>45%</div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Express.js</span>
                  <div className="progress" data-progress="70%">
                    <div className="progress-bar" style={{ '--progress-width': '50%' }}>50%</div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Node.js</span>
                  <div className="progress" data-progress="75%">
                    <div className="progress-bar" style={{ '--progress-width': '65%' }}>65%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-card">
              <h4>Frontend Development</h4>
              <div className="skills-details">
                <div className="skill-item">
                  <span>HTML</span>
                  <div className="progress" data-progress="95%">
                    <div className="progress-bar" style={{ '--progress-width': '95%' }}>95%</div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>CSS</span>
                  <div className="progress" data-progress="90%">
                    <div className="progress-bar" style={{ '--progress-width': '90%' }}>90%</div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Bootstrap</span>
                  <div className="progress" data-progress="85%">
                    <div className="progress-bar" style={{ '--progress-width': '85%' }}>85%</div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>React</span>
                  <div className="progress" data-progress="80%">
                    <div className="progress-bar" style={{ '--progress-width': '70%' }}>70%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-card">
              <h4>Version Control</h4>
              <div className="skills-details">
                <div className="skill-item">
                  <span>Git</span>
                  <div className="progress" data-progress="70%">
                    <div className="progress-bar" style={{ '--progress-width': '70%' }}>70%</div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>GitHub</span>
                  <div className="progress" data-progress="75%">
                    <div className="progress-bar" style={{ '--progress-width': '75%' }}>75%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-card">
              <h4>Databases</h4>
              <div className="skills-details">
                <div className="skill-item">
                  <span>SQL</span>
                  <div className="progress" data-progress="90%">
                    <div className="progress-bar" style={{ '--progress-width': '90%' }}>90%</div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>MongoDB</span>
                  <div className="progress" data-progress="80%">
                    <div className="progress-bar" style={{ '--progress-width': '80%' }}>80%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
