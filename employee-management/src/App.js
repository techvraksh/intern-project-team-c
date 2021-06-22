import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ClientDetails from "./Front-end/pages/client_detail_page";
import LandingPage from "./Front-end/pages/landing_page";
import Payment from "./Front-end/pages/payment/payment";
import JobsOpening from "./Front-end/pages/job-openings/jobs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmpDashboard from "./Front-end/pages/emp-dash";
import AdminDashboard from "./Front-end/pages/admin-dash";
import LoginPage from "./Front-end/pages/login_page";
import SignupPage from "./Front-end/pages/signup_page";
import EmployeeDetail from "./Front-end/pages/employee-details";
import ProjectDetail from "./Front-end/pages/project_details";
import ProjectPage from "./Front-end/pages/project_page";
import Employees from "./Front-end/pages/employees";
import Clients from "./Front-end/pages/client";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/employee">
            <EmpDashboard />
          </Route>
          <Route path="/admin">
            <AdminDashboard />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/home">
            <LandingPage />
          </Route>
          <Route path="/details">
            <EmployeeDetail />
          </Route>
          <Route path="/projects">
            <ProjectPage />
          </Route>
          <Route path="/projectdetail">
            <ProjectDetail />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/employeedetail">
            <EmployeeDetail />
          </Route>
          <Route path="/payments">
            <Payment />
          </Route>
          <Route path="/paymentdetails">
            <Payment />
          </Route>
          <Route path="/jobs">
            <JobsOpening />
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
          <Route path="/clientdetails">
            <ClientDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
