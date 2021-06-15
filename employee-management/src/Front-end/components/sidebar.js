import React from "react";
import { Nav } from "react-bootstrap";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faHome,
  faUserClock,
  faMoneyBill,
  faTasks,
  faUserSecret,
  faFolderOpen,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
const SideBar = () => {
  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <Nav.Link href="/home">
          <FontAwesomeIcon icon={faHome} />
          <i>Home</i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link link="employees">
          <FontAwesomeIcon icon={faUserCircle} />
          <i>Employess</i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="tracking">
          <FontAwesomeIcon icon={faUserClock} />
          <i>Tracking</i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="payment">
          <FontAwesomeIcon icon={faMoneyBill} />
          <i>Payment</i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="projects">
          <FontAwesomeIcon icon={faTasks} />
          <i>Projects</i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="clients">
          <FontAwesomeIcon icon={faUserSecret} />
          <i>Clients</i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="jobopenings">
          <FontAwesomeIcon icon={faFolderOpen} />
          <i>Job Openings</i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="settings">
          <FontAwesomeIcon icon={faCog} />
          <i>settings</i>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SideBar;
