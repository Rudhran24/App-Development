import React, { useState } from 'react';
import { Table, Button, Container, Modal } from 'react-bootstrap';
import { useApplicants } from './ApplicantContext';
import './UserManagement.css'; // Import custom CSS

const UserManagement = () => {
  const { applicants, updateApplicantStatus } = useApplicants();
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedApplicantId, setSelectedApplicantId] = useState(null);

  const handleDelete = (id) => {
    // Filter out the applicant from the list
    updateApplicantStatus(id, 'Rejected'); // Or any status to signify removal
    setShowConfirm(false); // Hide confirmation modal after deletion
  };

  const handleEditClick = (id) => {
    setSelectedApplicantId(id);
    setShowConfirm(true); // Show confirmation modal
  };

  return (
    <Container className="user-management-container">
      <h1 className="user-management-title">Applicant Management</h1>
      <Table striped bordered hover className="applicants-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(applicant => (
            <tr key={applicant.id}>
              <td>{applicant.name}</td>
              <td>{applicant.email}</td>
              <td>{applicant.phoneNumber}</td>
              <td>{applicant.position}</td>
              <td>{applicant.status}</td>
              <td className="action-buttons">
                <Button 
                  variant="warning" 
                  className="action-button"
                  onClick={() => handleEditClick(applicant.id)}
                >
                  Edit
                </Button>
                <Button 
                  variant="danger"
                  className="action-button"
                  onClick={() => handleDelete(applicant.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Confirmation Modal */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this applicant?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={() => handleDelete(selectedApplicantId)}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserManagement;
