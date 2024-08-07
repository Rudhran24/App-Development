import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPage from './Landing';
import './UserDashboard.css';
import { useNotifications } from './userNotifications';

const UserDashboard = () => {
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const { notifications, removeNotification } = useNotifications();

  const handleViewCompanies = () => {
    setShowLandingPage(true);
    setShowNotifications(false);
  };

  const handleViewNotifications = () => {
    setShowLandingPage(false);
    setShowNotifications(true);
  };

  const handleViewProfile = () => {
    setShowLandingPage(false);
    setShowNotifications(false);
    navigate('/profile');
  };

  const handleDelete = (id) => {
    removeNotification(id);
  };

  return (
    <div className="dashboard-container">
      {/* Dashboard Sidebar */}
      <div className="sidebar">
        <h2>User</h2>
        <button onClick={handleViewCompanies}>View Companies</button>
        <button onClick={handleViewNotifications}>View Notifications</button>
        <button onClick={handleViewProfile}>View Profile</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {showLandingPage && <LandingPage />}
        
        {showNotifications && (
          <>
            <h2>Notifications</h2>
            {notifications.length === 0 ? (
              <p>No notifications available.</p>
            ) : (
              <ul>
                {notifications.map((notification) => (
                  <li key={notification.id}>
                    <p>{notification.message}</p>
                    
                    <p><strong>Date:</strong> {notification.date}</p>
                    <p><strong>Time:</strong> {notification.time}</p>
                    <button onClick={() => handleDelete(notification.id)} className="delete-button">Delete</button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
