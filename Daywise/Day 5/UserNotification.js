import React from 'react';
import { useNotifications } from './userNotifications';
import './UserNotification.css';


const UserNotifications = () => {
  const { notifications, removeNotification } = useNotifications();

  const handleDelete = (id) => {
    removeNotification(id);
  };

  console.log(notifications); // Debugging line

  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <p>{notification.message}</p>
              <p><strong>Date:</strong> {notification.date}</p>
              <p><strong>Time:</strong> {notification.time}</p>
              <p><strong>Status:</strong> {notification.status || 'Pending'}</p> {/* Added status paragraph */}
              <button onClick={() => handleDelete(notification.id)} className="delete-button">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserNotifications;
