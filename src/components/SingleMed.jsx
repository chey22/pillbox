import React from "react";

const SingleMed = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">Med Name Here</h5>
        <p className="card-text">Dosage</p>
        <p className="card-text">Imprint</p>
        <p className="card-text">Color</p>
        <p className="card-text">Shape</p>
        <p className="card-text">Instructions</p>
        <p className="card-text">Warnings</p>
        <a href="#" className="btn btn-primary">
          More details - links to drugs.com
        </a>
      </div>
    </div>
  );
};

export default SingleMed;
