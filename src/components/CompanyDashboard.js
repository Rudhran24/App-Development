import React from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './CompanyDashboard.css';

const CompanyDashboard = () => {
  const navigate = useNavigate();
  const { company } = useParams(); // Get the company parameter from the URL

  // Handle undefined company name
  const companyName = company ? company.charAt(0).toUpperCase() + company.slice(1) : 'Company';

  const handleNavigation = (path) => {
    navigate(`/company-dashboard/${company}/${path}`); // Corrected navigation path
  };

  return (
    <Container fluid className="company-dashboard">
      <Row>
        <Col md={3} className="sidebar">
          <h2>{companyName}</h2>
          <Button 
            variant="primary" 
            className="w-100 mb-2" 
            onClick={() => handleNavigation('manage-jobs')}
          >
            Manage Jobs
          </Button>
          <Button 
            variant="secondary" 
            className="w-100 mb-2" 
            onClick={() => handleNavigation('view-applicants')}
          >
            View Applicants
          </Button>
          <Button 
            variant="success" 
            className="w-100 mb-2" 
            onClick={() => handleNavigation('company-analytics')}
          >
            Company Analytics
          </Button>
          <Button 
            variant="danger" 
            className="w-100" 
            onClick={() => handleNavigation('user-management')}
          >
            User Management
          </Button>
        </Col>
        <Col md={9} className="content">
          <Outlet /> {/* This will render the nested routes */}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyDashboard;
