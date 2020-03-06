import React, { useState, useEffect } from "react";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";

let Navigation = () => {
  const [view, setView] = useState()
  const [navlink, setNavlink] = useState([])

  useEffect(() => {
    const contents = [{ content1: "/Meds", content2: "My Medications" },
    { content1: "/SingleMeds", content2: "Medication Details" },
    { content1: "/Doctors", content2: "My Doctors" },
    { content1: "/Pharmacies", content2: "My Pharmacies" }]

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

    let navmaker = () => {
      let arr = contents.map((element) => {
        return (
          <h5 className="my-auto mr-3">
            <Nav.Link href={element.content1} className="bg-dark rounded text-light my-1">
              {element.content2}
            </Nav.Link>
          </h5>
        )
      })

      setNavlink(arr)
    }

    navmaker()
  }, [])

  return (
    <Navbar bg="info" expand="lg" variant="dark">
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {navlink[0]}

          {navlink[1]}

          <h5 className="my-auto mr-3">
            <NavDropdown title={<span className="text-light">{view}</span>} id="collasible-nav-dropdown"
              className="bg-dark rounded my-1">
              <NavDropdown.Item href="/Week">Weekly View</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Day">Daily View</NavDropdown.Item>
            </NavDropdown>
          </h5>

          {navlink[2]}

          {navlink[3]}

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
