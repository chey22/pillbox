import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Form, FormControl } from "react-bootstrap";
import Meds from "./Meds";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Button variant="secondary" size="sm" className="btn mr-3">
                <Link to="/Home" className="nav-link">
                  PILLBOX<span className="sr-only">(current)</span>
                </Link>
              </Button>
            </li>
            <li className="nav-item">
              <Button variant="secondary" size="sm" className="btn mr-3">
                <Link to="/Week" className="nav-link">
                  Weekly View
                </Link>
              </Button>
            </li>
            <li className="nav-item">
              <Button variant="secondary" size="sm" className="btn mr-3">
                <Link to="/Day" className="nav-link">
                  Daily View
                </Link>
              </Button>
            </li>
            <li className="nav-item">
              <Button variant="secondary" size="sm" className="btn mr-3">
                <Link to="/Meds" className="nav-link">
                  My Medications
                </Link>
              </Button>
            </li>
            <li className="nav-item">
              <Button variant="secondary" size="sm" className="btn mr-3">
                <Link to="/SingleMeds" className="nav-link">
                  Medication Details
                </Link>
              </Button>
            </li>
            <li className="nav-item">
              <Button variant="secondary" size="sm" className="btn mr-3">
                <Link to="/Doctors" className="nav-link" href="#">
                  My Doctors
                </Link>
              </Button>
            </li>
            <li className="nav-item">
              <Button variant="secondary" size="sm" className="btn mr-3">
                <Link to="Pharmacies" className="nav-link" href="#">
                  My Pharmacies
                </Link>
              </Button>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      // {/* <Navbar bg="primary" variant="dark">
      //     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //     <Nav className=f"mr-auto">
      //       <Nav.Link href="#home">Home</Nav.Link>
      //       <Nav.Link href="#features">Features</Nav.Link>
      //       <Nav.Link href="#pricing">Pricing</Nav.Link>
      //     </Nav>
      //     <Form inline>
      //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //       <Button variant="outline-light">Search</Button>
      //     </Form>
      //   </Navbar> */}
    );
  }
}

export default Navbar;
