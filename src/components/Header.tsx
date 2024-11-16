import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
      <h1>Omar Ghoz</h1>
      <nav>
        <a href="#skills" style={{ margin: '0 10px', color: 'white' }}>Skills</a>
        <a href="#projects" style={{ margin: '0 10px', color: 'white' }}>Projects</a>
      </nav>
    </header>
  );
};

export default Header;
