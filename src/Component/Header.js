import React, { Component } from 'react'
import { Button,Navbar,Nav,NavDropdown,Carousel,Form,FormControl} from 'react-bootstrap';
import { BrowserRouter, Route, Switch,Link} from 'react-router-dom';
export class Header extends Component {
  render() {
    
    return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand > Product-Form</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     <Nav.Link ><Link to="/signin">SignIn</Link></Nav.Link>
      <Nav.Link ><Link to="/signup">SignUp</Link></Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">

        <NavDropdown.Item><Link to="/ServerDBForm">Input Form</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" onClick={this.go1}>Syl Paractice</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}

export default Header
