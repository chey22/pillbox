import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar"
import Home from "./Pages/Home";
import Week from "./Pages/Week";
import Day from "./Pages/Day";
import Meds from "./Pages/Meds";
import SingleMeds from "./Pages/SingleMed";
import Doctors from "./Pages/Doctors";
import Pharmacies from "./Pages/Pharmacies"


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Week" component={Week} />
        <Route exact path="/Day" component={Day} />
        <Route exact path="/Meds" component={Meds} />
        <Route exact path="/SingleMeds" component={SingleMeds} />
        <Route exact path="/Doctors" component={Doctors} />
        <Route exact path="/Pharmacies" component={Pharmacies} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
};

export default App;
