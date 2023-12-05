import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'


function NavComp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container className='navbar'>
     <Nav.Link>About</Nav.Link>
     <Nav.Link>Projects</Nav.Link>
     <Nav.Link>Hire</Nav.Link>
    </Container>
  </Navbar>
  );
}

export default NavComp;