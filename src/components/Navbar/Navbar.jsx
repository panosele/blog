import React from "react";
import Logo from "./Logo";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./css/navbar.css"

function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="text-light" id="nav-a" href="/"><h4>Home</h4></Nav.Link>
            <NavDropdown className="text-light" title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/about"><h5>Local News</h5></NavDropdown.Item>
              <NavDropdown.Item href="#action4"><h5>Tourist news</h5></NavDropdown.Item>
              <NavDropdown.Item href="#action4"><h5>Techology</h5></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Other</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled><h4>Categories</h4></Nav.Link> */}
            <Nav.Link className="text-light" href="/about"><h4>About</h4></Nav.Link>
            <Nav.Link className="text-light" href="/contact"><h4>Contact</h4></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
