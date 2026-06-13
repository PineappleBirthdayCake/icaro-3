import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';

import IconNote from '../assets/images/Icons/IconNote';

function Navegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top" data-bs-theme="dark">
      <Container>
        <Navbar.Brand style={{fontSize: '24px',}}><Link to="/" className="text-light" style={{textDecoration: 'none',}}>
          <IconNote/>
          {' '}
          Notas
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-light" style={{textDecoration: 'none', marginRight: '10px',}}>Home</Link>
            <Link to="/notes" className="text-light" style={{textDecoration: 'none',}}>Notas</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;