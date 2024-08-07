// src/components/NotificationsContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for notifications
const NotificationsContext = createContext();

// Provider component to wrap around your app or components that need access to notifications
export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Function to add a notification
  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  // Function to remove a notification by id
  const removeNotification = (id) => {
    setNotifications((prevNotifications) => prevNotifications.filter(notification => notification.id !== id));
  };

  return (
    <NotificationsContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationsContext.Provider>
  );
};

// Custom hook to use the notifications context
export const useNotifications = () => useContext(NotificationsContext);
