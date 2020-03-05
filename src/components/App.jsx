import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Navbar from "./Navbar"
import Week from "./Week";
import Day from "./Day";
import Meds from "./Meds";
import SingleMeds from "./SingleMed";
import Doctors from "./Doctors";
import Pharmacies from "./Pharmacies"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/Week" component={Week} />
          <Route exact path="/Day" component={Day} />
          <Route exact path="/Meds" component={Meds} />
          <Route exact path="/SingleMeds" component={SingleMeds} />
          <Route exact path="/Doctors" component={Doctors} />
          <Route exact path="/Pharmacies" component={Pharmacies} />
        </Switch>
    </Router>
  )};

export default App;
