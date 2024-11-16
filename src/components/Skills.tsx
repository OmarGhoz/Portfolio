import React from 'react';

const Skills: React.FC = () => {
  const skills = ['Python', 'JavaScript', 'TypeScript', 'React', 'Django', 'SQL'];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
