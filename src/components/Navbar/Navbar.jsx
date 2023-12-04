import React, { useState } from "react";
import axios from "axios";

import Logo from "./Logo";
import Acount from "./Acount";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

import "./css/navbar.css"

function AppNavbar(props) {
  const [signedIn, setSignedIn] = useState(false);
  const [show, setShow] = useState(false); //Modal show or hide
  const [signToggleValue, setSignToggleValue] = useState(""); //Modal toggle value for login and sign up
  const [signupform, setSignupform] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    terms: "false"
  })
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  })
  const [user, setUser] = useState({
    username: "",
    email: "",
  })

  // Modal for login and sign up
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true)
    setSignToggleValue(e.target.value)
  };

  const handleSignUpForm = (e) => {
    e.preventDefault();
    setSignupform({
      ...signupform,
      [e.target.name]: e.target.value
    })
  }

  const handleLoginForm = (e) => {
    e.preventDefault();
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }



  const handleSignUpSubmit = async (e) => {
    if (signupform.terms === "false") {
      alert("Please accept the terms and conditions")
      console.log("Please accept the terms and conditions")
      return (
        <Alert variant="info">
          <Alert.Heading>Hi, nice to see you here</Alert.Heading>
          <p>
          Please accept the terms and conditions to continue with the sign up process 
          </p>
        </Alert>
      );
    }
    e.preventDefault();
    console.log(props.csrftoken);
    try {
      const response = await axios.post("http://127.0.0.1:8000/signup/", {username: signupform.username,
                                                      email: signupform.email,
                                                      password: signupform.password}, {
                                                        headers: {
                                                          // "X-CSRF-Token": props.csrftoken,
                                                          "Content-Type": "application/x-www-form-urlencoded",
                                                          // "method": "POST",
                                                          "Accept": "application/json",
                                                        }
      })
      const data = response.data;
      console.log(data);
      setSignupform({terms: "false", username: "", email: "", password: "", password2: ""});
      setSignedIn(data.login == "success" ? true : false);
      setUser({username: data.username, email: data.email});
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const response = await axios.post("http://127.0.0.1:8000/login/", {email: loginForm.email,
                                                        password: loginForm.password}, {
                                                          headers: { "Content-Type": "application/x-www-form-urlencoded", "X-CSRFToken": props.csrftoken },
                                                        }
      )
      const data = response.data;
      console.log(data);
      setSignedIn(data.login == "success" ? true : false);
      setUser({username: data.username, email: data.email});
      setLoginForm({email: "", password: ""});
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(props.csrftoken)
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
            <Nav.Link className="text-light" id="nav-a" href="/"><h4>Home</h4></Nav.Link>
            <NavDropdown className="text-light" title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/categories/localnews"><h5>Local News</h5></NavDropdown.Item>
              <NavDropdown.Item href="/categories/touristnews"><h5>Tourist news</h5></NavDropdown.Item>
              <NavDropdown.Item href="/categories/technology"><h5>Techology</h5></NavDropdown.Item>
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
          
          <Form className="d-flex mx-4">
            {signedIn ? 
            <Acount user={{...user}} setSignedIn={setSignedIn}/> :
            <>
              <Button type="button" variant="outline-primary" size="lg" onClick={handleShow} value="Login">Login</Button>
              <Button type="button" variant="outline-primary" size="lg" className="mx-2" onClick={handleShow} value="Sign Up">Sign Up</Button>
            </> }

            <Modal show={show} onHide={handleClose} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title>{signToggleValue} Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  {signToggleValue === "Sign Up" && <>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" value={signupform.username} placeholder="Enter Username" onChange={handleSignUpForm} required/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={signupform.email} placeholder="Enter email" onChange={handleSignUpForm} required/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={signupform.password} placeholder="Password" onChange={handleSignUpForm} required/>
                  </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Repeat Password</Form.Label>
                      <Form.Control type="password" name={"password2"} value={signupform.password2} placeholder="repeat Password" onChange={handleSignUpForm} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" name="terms" value={signupform.terms} label="Agree to the temrs of use" onClick={(e) => setSignupform({...signupform, terms: e.target.value == "true" ? "false" : "true"})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Sign Up with:</Form.Label>
                      <Container className="my-3">
                        <Row className="justify-content-md-center">
                          <Col xs lg="5">
                            <Image width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png"  alt="google-logo" thumbnail />
                          </Col>
                          <Col xs lg="5">
                            <Image width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook-new" thumbnail />
                          </Col>
                        </Row>
                      </Container>
                    </Form.Group>
                  </>
                }
                  {signToggleValue === "Login" && <>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={loginForm.email} placeholder="Enter email" onChange={handleLoginForm} required/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={loginForm.password} placeholder="Password" onChange={handleLoginForm} required/>
                  </Form.Group> 
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Login  with:</Form.Label>
                      <Container className="my-3">
                        <Row className="justify-content-md-center">
                          <Col xs lg="5">
                            <Image width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png"  alt="google-logo" thumbnail />
                          </Col>
                          <Col xs lg="5">
                            <Image width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook-new" thumbnail />
                          </Col>
                        </Row>
                      </Container>
                    </Form.Group>
                    </>
                  }
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {signToggleValue === "Login" ?
                  <Button variant="primary" id="login" onClick={handleLoginSubmit}>{signToggleValue}</Button> :
                  <Button id="signup" variant="primary" onClick={handleSignUpSubmit}>{signToggleValue}</Button>
                }
              </Modal.Footer>
            </Modal>
          </Form>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
