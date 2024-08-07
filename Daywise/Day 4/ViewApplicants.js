import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useApplicants } from './ApplicantContext';
import { useNotifications } from './userNotifications';
import './ViewApplicants.css';

const ViewApplicants = () => {
  const { applicants, updateApplicantStatus } = useApplicants();
  const { notifications, addNotification, updateNotificationStatus } = useNotifications();

  const handleAction = (id, action) => {
    const status = action === 'accept' ? 'Accepted' : 'Rejected';
    updateApplicantStatus(id, status);

    const notificationIndex = notifications.findIndex(notification => notification.applicantId === id);
    if (notificationIndex !== -1) {
      updateNotificationStatus(notifications[notificationIndex].id, status);
    } else {
      const notification = {
        id: Date.now(),
        applicantId: id,
        message: `Your application has been ${status}.`,
        status: status,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };
      addNotification(notification);
    }
  };

  return (
    <Container className="view-applicants-container">
      <h1 className="view-applicants-title">View Applicants</h1>
      <Table striped bordered hover className="applicants-table">
        <thead>
          <tr>
            <th>Applicant Name</th>
            <th>Email</th>
            <th>Applied Position</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applicants.length ? (
            applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td>{applicant.name}</td>
                <td>{applicant.email}</td>
                <td>{applicant.position}</td>
                <td>{applicant.status}</td>
                <td className="action-buttons">
                  <Button
                    variant="success"
                    className="action-button"
                    onClick={() => handleAction(applicant.id, 'accept')}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="danger"
                    className="action-button"
                    onClick={() => handleAction(applicant.id, 'reject')}
                  >
                    Reject
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No applicants yet.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewApplicants;
