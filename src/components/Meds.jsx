import React from "react";
import { Link } from "react-router-dom";

const Meds = () => {
  return (
    <React.Fragment>
      <h1>My Medications</h1>
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">Med1</h5>
          <p className="card-text">Dosage</p>
          <p className="card-text">Frequency</p>
          <a href="#" className="btn btn-primary">
            More details
          </a>
        </div>
      </div>
      <br />
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">Med2</h5>
          <p className="card-text">Dosage</p>
          <p className="card-text">Frequency</p>
          <a href="#" className="btn btn-primary">
            More details
          </a>
        </div>
      </div>
      <br />
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">Med3</h5>
          <p className="card-text">Dosage</p>
          <p className="card-text">Frequency</p>
          <a href="#" className="btn btn-primary">
            More details
          </a>
        </div>
      </div>
      <br />
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">Med4</h5>
          <p className="card-text">Dosage</p>
          <p className="card-text">Frequency</p>
          <a href="#" className="btn btn-primary">
            More details
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Meds;
