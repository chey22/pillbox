import React from "react";
import Navbar from "./Navbar"
import Week from "./Week";
import Meds from "./Meds";
import SingleMed from "./SingleMed";


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <h1>WEEKLY VIEW</h1>
      <Week />
      <Meds />
      <Meds />
      <Meds />
      <Meds />

    </React.Fragment>
  )};

export default App;
