// src/components/CompanyAnalytics.js
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const CompanyAnalytics = () => {
  return (
    <Container>
      <h1>Company Analytics</h1>
      <Row>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Total Job Postings</Card.Title>
              <Card.Text>50</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Total Applicants</Card.Title>
              <Card.Text>200</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Interviews Scheduled</Card.Title>
              <Card.Text>30</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Hires Made</Card.Title>
              <Card.Text>15</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyAnalytics;
