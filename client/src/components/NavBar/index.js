import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import globalStyle from "../../utils/GlobalStyle";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import logo from "../../assets/icons/logo.png";
function NavBar() {
  const [store] = useStoreContext();

  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        ...globalStyle.navBarTextStyle,
        ...globalStyle.themeColor,
        padding: "3px",
      }}
    >
      <Navbar.Brand style={globalStyle.navBarTextStyle} href="/">
        <Image
          style={{ height: "50px" }}
          src={logo}
          alt="Polar Cleaning"
        ></Image>
      </Navbar.Brand>
      <div
        style={{
          marginLeft: "auto",
          fontSize: "16px",
          lineHeight: "1.5",
          fontWeight: "normal",
        }}
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          style={{ color: "#002e6e" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ color: "#002e6e" }} href="/pricing">
              Residential
            </Nav.Link>
            <Nav.Link style={{ color: "#002e6e" }} href="/pricing">
              Commercial
            </Nav.Link>
            <Nav.Link style={{ color: "#002e6e" }} href="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link style={{ color: "#002e6e" }} href="/about">
              About Us
            </Nav.Link>
            <Nav.Link style={{ color: "#002e6e" }} href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
