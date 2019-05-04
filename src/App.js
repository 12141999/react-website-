import React from 'react';
import Main from './Components/main';
import Header from './Components/header'; 
import About from './Components/About';
import Resume from './Components/Resume';
import Project from './Components/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About/>
      <Resume />
      <Project />
    </div>
  );
}

export default App;
