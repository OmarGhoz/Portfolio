import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    { name: 'AI Model Builder', description: 'A tool for building AI models.' },
    { name: 'Library Management System', description: 'An OOP-based system for libraries.' },
    { name: 'Temperature Converter', description: 'A Python tool for temperature conversion.' },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
