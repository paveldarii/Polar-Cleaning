import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import globalStyle from "../../utils/GlobalStyle";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
function NavBar() {
  const [store] = useStoreContext();

  return (
    <Navbar
      expand="lg"
      style={{
        ...globalStyle.navBarTextStyle,
        ...globalStyle.themeColor,
      }}
    >
      <Navbar.Brand style={globalStyle.navBarTextStyle} href="/">
        Polar Cleaning
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Residential</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Commercial</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Get Quote</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
