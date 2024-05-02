import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <div>
      <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__grid">
          <div className="project">
            <h3 className="project__title">Project 1</h3>
            <p className="project__description">Online Task Management System (OTMS)</p>
          </div>
          <div className="project">
            <h3 className="project__title">Project 2</h3>
            <p className="project__description">MicrosoftClone</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Projects