import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to Omar's Portfolio</h1>
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
