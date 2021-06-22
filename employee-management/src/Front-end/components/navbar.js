import { Navbar, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Navbar bg="light" expand="lg">
        <div className="image">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          <div style={{ marginRight: "10px" }} />
          <Navbar.Brand href="#home">Employee Management System</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="user">
          <div>
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
          <Button href="login" variant="link">
            Login
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
