import React from 'react';
import {Link} from 'react-router-dom';

import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default function MyNavbar(props){
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link component={Nav.Link} to="/">Home</Link>
          <Link component={Nav.Link} to='/board'>게시판</Link>

        </Nav>
        <Nav >
          <Link component={Nav.Link} to='/login'>로그인</Link>
          {/* <Nav.Link href="#link">로그인</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}