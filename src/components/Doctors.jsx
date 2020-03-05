import React from "react";
// import { Link } from 'react-router-dom';

const Doctors = () => {
    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">Family Doctor Office Name</h5>
            <p className="card-text">Phone number</p>
            <p>Address</p>
            <p>Fax</p>
            <a href="https://" className="btn btn-primary">
              More details - links to office website
            </a>
          </div>
        </div>

        <br/>

        <div className="card" style={{ width: "18rem" }}>
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title"> Specialist Doctor Office Name</h5>
            <p className="card-text">Phone number</p>
            <p>Address</p>
            <p>Fax</p>
            <a href="https://" className="btn btn-primary">
              More details - links to office website
            </a>
          </div>
        </div>

      </React.Fragment>
    );
  };
  
  export default Doctors;
  