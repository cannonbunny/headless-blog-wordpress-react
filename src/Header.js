// header class with bootstrap navbar

import React from "react"
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends React.Component{
  render(){
  return(
    <div>
      <Navbar>
      <Navbar.Brand href="/">4 6 B E L O W</Navbar.Brand>
      <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="Adventure Never Ends" id="nav-dropdown">
            <NavDropdown.Item href="/blog">Story Blog</NavDropdown.Item>
            <NavDropdown.Item href="/photo">Photo Gallery</NavDropdown.Item>
            <NavDropdown.Item href="/gear">Gear Review</NavDropdown.Item>
            <NavDropdown.Item href="/about">About Me</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Going Home?</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
}

export default Header
