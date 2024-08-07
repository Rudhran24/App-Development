import React, { useState } from 'react';
import { Table, Button, Container, Form, Row, Col } from 'react-bootstrap';
import './ManageJobs.css'; // Import custom CSS

const ManageJobs = () => {
  // Initial list of job postings
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Engineer', department: 'Engineering', location: 'New York' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco' },
    // Add more jobs as needed
  ]);

  // State for form visibility and form data
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', department: '', location: '' });

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setJobs([...jobs, { id: jobs.length + 1, ...formData }]);
    setFormData({ title: '', department: '', location: '' });
    setShowForm(false); // Hide the form after submission
  };

  // Function to handle deletion of a job posting
  const handleDelete = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <Container className="manage-jobs-container">
      <h1 className="manage-jobs-title">Manage Jobs</h1>
      <Button variant="primary" className="mb-3 add-job-button" onClick={() => setShowForm(true)}>Add New Job</Button>
      
      {showForm && (
        <Form onSubmit={handleFormSubmit} className="mb-4">
          <Row>
            <Col>
              <Form.Group controlId="formJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter job title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formJobDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formJobLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" className="mt-3 submit-button">
            Submit
          </Button>
        </Form>
      )}

      <Table striped bordered hover className="jobs-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Department</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.department}</td>
              <td>{job.location}</td>
              <td>
                <Button 
                  variant="warning" 
                  className="mr-2 edit-button"
                  onClick={() => console.log(`Edit job ${job.id}`)} // Placeholder for edit functionality
                >
                  Edit
                </Button>
                <Button 
                  variant="danger"
                  className="delete-button"
                  onClick={() => handleDelete(job.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageJobs;
