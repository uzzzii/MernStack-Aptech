import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Navbar1() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">REACT Project</Navbar.Brand>
      <Nav className="me-auto">
        < Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">login</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
        <Nav.Link href="#">Services</Nav.Link>
        <Nav.Link href="#">Register</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbar1
