import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header({ title }) {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="" className="text-light">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
