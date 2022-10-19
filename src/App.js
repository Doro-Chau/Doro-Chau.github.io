import React from 'react';
import {BrowserRouter as Routes, Route} from "react-router-dom";
import './App.css';
import About from './Sections/About';
import Blog from './Sections/Blog';
import Contact from './Sections/Contact';
import Portfolio from './Sections/Portfolio';
import Title from './Sections/Title';


function App() {
  return (
    <div className="app">
      <Title />
      
      <Portfolio />
      <About />
      <Blog />
      <Contact />
      <div className='width'>
        <h6>&nbsp;&nbsp;&#60;/body&#62;</h6>
        <h6>&#60;/html&#62;</h6>
      </div>
    </div>
  );
}

export default App;
