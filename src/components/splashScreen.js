import { Container, Card, Row, Image, Col, Button } from "react-bootstrap";
import '../styles/splash-screen.css';

function Title() {
    return (
        <Container className='content'>
        <Row className='px-4 my-5'>
          <Col>
          <Image 
          src="https://pbs.twimg.com/profile_images/1661798632549482508/AATXOlBu_400x400.jpg"
          fluid
          rounded
          className=""
          />
          
          </Col>
  
          <Col sm={5}> 
           <h1 className='font-weight-light'>I'm Pete.</h1>
            <h2 class="mt-4">I'm a Junior Software Developer</h2>
            <p class="mt-5">
              JavaScript - HTML5 - React - CSS/SCSS - API's - Docker - Postman
            </p>
          
            <Image src="" />
           
  
            <Button variant='outline-primary'>What I do.</Button>
            </Col>
        </Row>
        <Row>
  
        </Row>
  
  
      </Container>
 );
}

export default Title