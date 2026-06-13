import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NewNoteButton from './NewNoteButton';

import CatFact from './CatFact';

function Homebottombar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-bottom" data-bs-theme="dark">
      <Container>
        <CatFact />
      </Container>
    </Navbar>
  );
}

export default Homebottombar;