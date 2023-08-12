import React from 'react'
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
import {LinkContainer } from "react-router-bootstrap";
import logo from '../assets/chat-logo.png';

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
          <LinkContainer to="/">
            <Navbar.Brand ><img src = {logo} style={{width:100, height:80}} alt="logo" /></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/chat">
                    <Nav.Link>Chat💬</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
} 

export default Navigation