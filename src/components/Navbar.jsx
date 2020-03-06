import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
// import Meds from "./Meds";

let Navigation = () => {
  console.log(window.location.pathname)
  const [view, setView] = useState()

  useEffect(() => {
    switch (window.location.pathname) {
      case "/Week":
        setView("Weekly View");
        break;
      case "/Day":
        setView("Daily View");
        break;
      default:
        setView("View");
        break;
    }
  }, [])

  return (
    <Navbar bg="info" expand="lg" variant="dark">
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <h5 className="my-auto mr-3">
            <Nav.Link href="/Meds" className="bg-dark rounded text-light">
              My Medications
            </Nav.Link>
          </h5>

          <h5 className="my-auto mr-3">
            <Nav.Link href="/SingleMeds" className="bg-dark rounded text-light">
              Medication Details
            </Nav.Link>
          </h5>

          <h5 className="my-auto mr-3">
            <NavDropdown title={<span className="text-light">{view}</span>} id="collasible-nav-dropdown"
              className="bg-dark rounded">
              <NavDropdown.Item href="/Week">Weekly View</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Day">Daily View</NavDropdown.Item>
            </NavDropdown>
          </h5>

          <h5 className="my-auto mr-3">
            <Nav.Link href="/Doctors" className="bg-dark rounded text-light">
              My Doctors
            </Nav.Link>
          </h5>

          <h5 className="my-auto mr-3">
            <Nav.Link href="/Pharmacies" className="bg-dark rounded text-light">
              My Pharmacies
            </Nav.Link>
          </h5>

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <div className="bg-dark rounded">
            <Button variant="outline-success">Search</Button>
          </div>
        </Form>
      </Navbar.Collapse>


    </Navbar>
  );
}

export default Navigation;
