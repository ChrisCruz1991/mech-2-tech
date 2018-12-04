import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";
import VehiclePage from "../pages/VehiclePage";
import ClientsDashboard from "../pages/ClientsDashboard";
import ClientPage from "../pages/ClientPage";
import EmployeesDashboard from "../pages/EmployeesDashboard";
import EmployeePage from "../pages/EmployeePage";
import Home from "../pages/Home";
import EmployeesForm from "../pages/EmployeesForm";
import Membership from "../pages/Membership";
import NewVehiclePage from "../pages/NewVehiclePage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="app">
            <Switch>
              <Route exact path="/vehicle" component={Dashboard} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/vehicle/new/:id" component={NewVehiclePage} />
              <Route path="/vehicle/:id" component={VehiclePage} />
              <Route exact path="/clients" component={ClientsDashboard} />
              <Route path="/clients/new" component={Membership} />
              <Route path="/client/:id" component={ClientPage} />
              <Route exact path="/employees" component={EmployeesDashboard} />
              <Route path="/employees/new" component={EmployeesForm} />
              <Route path="/employee/:id" component={EmployeePage} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Routes;
