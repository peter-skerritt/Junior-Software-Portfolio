import React from 'react';
import '../styles/App.css';
import NavComp from '../components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Title from '../components/splashScreen';



function App() {
  return (
    <div className="App">

      <header>
       
        <NavComp/>

      </header>

    <main>
      <Title/>
    </main>

  
    </div>
  );
}

export default App;
