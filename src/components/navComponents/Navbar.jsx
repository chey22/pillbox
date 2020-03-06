import React, { useState, useEffect } from "react";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import Title from './title'

let Navigation = () => {
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

          <Title content1="/Meds" content2="My Medications" />

          <Title content1="/SingleMeds" content2="Medication Details" />

          <h5 className="my-auto mr-3">
            <NavDropdown title={<span className="text-light">{view}</span>} id="collasible-nav-dropdown"
              className="bg-dark rounded my-1">
              <NavDropdown.Item href="/Week">Weekly View</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Day">Daily View</NavDropdown.Item>
            </NavDropdown>
          </h5>

          <Title content1="/Doctors" content2="My Doctors" />

          <Title content1="/Pharmacies" content2="My Pharmacies" />

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
