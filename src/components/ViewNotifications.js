// src/components/ViewNotifications.js
import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useNotifications } from './NotificationsContext';
import './ViewNotifications.css';

const ViewNotifications = () => {
  const { notifications } = useNotifications();

  return (
    <Container className="view-notifications-container">
      <h1 className="view-notifications-title">Notifications</h1>
      <ListGroup className="notifications-list">
        {notifications.length ? (
          notifications.map((notification) => (
            <ListGroup.Item key={notification.id} className={`notification-item ${notification.status.toLowerCase()}`}>
              <div className="notification-message">{notification.message}</div>
              <div className="notification-timestamp">
                {notification.date} {notification.time}
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No notifications yet.</ListGroup.Item>
        )}
      </ListGroup>
    </Container>
  );
};

export default ViewNotifications;
