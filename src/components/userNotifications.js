import { createContext, useContext, useState } from 'react';

// Create a context for notifications
const NotificationsContext = createContext();

// Provider component to wrap around your app or components that need access to notifications
export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // Function to add a notification with a default status
  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { ...notification, status: notification.status || 'Pending' } // Default status is 'Pending'
    ]);
  };

  // Function to remove a notification by id
  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  // Function to update the status of a notification by id
  const updateNotificationStatus = (id, status) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, status } : notification
      )
    );
  };

  return (
    <NotificationsContext.Provider
      value={{ notifications, addNotification, removeNotification, updateNotificationStatus }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

// Custom hook to use the notifications context
export const useNotifications = () => useContext(NotificationsContext);
