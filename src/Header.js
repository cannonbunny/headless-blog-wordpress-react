import React from "react"
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// <NavDropdown.Item href="/">2019</NavDropdown.Item>
// <NavDropdown.Divider />
function Header(){
  return(
    <div>
      <Navbar>
      <Navbar.Brand href="/">4 6 B E L O W</Navbar.Brand>
      <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/about">About</a>
          </Navbar.Text>
          <NavDropdown title="Adventure Never Ends" id="nav-dropdown">

            <NavDropdown.Item href="/">Going Home?</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
