import React from "react";
import '../styles/navbar.css';
import { Button } from "bootstrap";

function Navbar() {
    return (
        <div className="navbuttons">
            <Button className="about">About</Button>
            <Button className="projects">Projects</Button>
            <Button className="hire">Hire</Button>
        </div>
  );
}

export default Navbar;