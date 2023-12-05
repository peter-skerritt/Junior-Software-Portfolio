import React from 'react';
import '../styles/App.css';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="navbuttons">
            <Button className="about">About</Button>
            <Button className="projects">Projects</Button>
            <Button className="hire">Hire</Button>
        </div>

      <div className="title-content">
        <div className="profile"></div>
        
        <div className="title-text">

          <div className="title"></div>
          <div className="links"></div>
        
        </div>
      </div>

      <div className="skillset"></div>
      
      <div className="timeline"></div>
       
      </header>
    </div>
  );
}

export default App;
