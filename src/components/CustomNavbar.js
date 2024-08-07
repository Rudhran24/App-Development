// src/components/NavbarComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth hook
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components
import './CustomNavbar.css'; // Import custom CSS
import logo from './logos/Opportunity.jpg'; // Adjust the path to the image accordingly

const NavbarComponent = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img
          src={logo}
          alt="Opportunity Logo"
          style={{ width: '100px', height: '50px', marginRight: '10px', borderradius:'10px' }}
        />
        OPPORTUNITY
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {!isAuthenticated ? (
            <>
              <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
              <Nav.Link as={Link} to="/register" className="nav-link">Register</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={logout} className="nav-link logout-link">
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
