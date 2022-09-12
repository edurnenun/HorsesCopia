import React from "react";
import {Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logotype from '../assets/logo_forest.png';
import perfil from '../assets/perfil.png';
import { BsFillCartFill } from "react-icons/bs";

// anchor del logo a pagina principal

function Encabezado() {
  return (
    <div className="Navbar">
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="NvBrand"><img className= "logo" src={logotype} style={{width: "4em", height: "4em"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#pricing">Associació</Nav.Link>
          <Nav.Link href="#pricing">Catàleg</Nav.Link>
          <Nav.Link href="#pricing">Apadrina</Nav.Link>
          <img className= "perfil" src= {perfil} style={{width: "2em", height: "2em"}}/> 
            <NavDropdown title= "" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">El meu prefil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Historial</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Tancar sessió
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="#memes">
            <BsFillCartFill />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

 
  );
}

export default Encabezado;

