import React from "react";
import { Link } from "react-router-dom";

const Pharmacies = () => {
  return (
    <React.Fragment>
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">Pharmacy 1 Name</h5>
          <p className="card-text">Phone number</p>
          <p>Address</p>
          <p>Fax</p>
          <a href="#" className="btn btn-primary">
            More details - links to pharmacy 1 website
          </a>
        </div>
      </div>

      <br />

      <div className="card" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">Pharmacy 1 Name</h5>
          <p className="card-text">Phone number</p>
          <p>Address</p>
          <p>Fax</p>
          <a href="#" className="btn btn-primary">
            More details - links to pharmacy 2 website
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pharmacies;
