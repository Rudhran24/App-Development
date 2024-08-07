// src/components/notifications.js
export const getUserNotifications = () => {
    const notifications = localStorage.getItem('userNotifications');
    return notifications ? JSON.parse(notifications) : [];
  };
  
  export const addUserNotification = (notification) => {
    const notifications = getUserNotifications();
    notifications.push(notification);
    localStorage.setItem('userNotifications', JSON.stringify(notifications));
  };
  
  export const getCompanyNotifications = () => {
    const notifications = localStorage.getItem('companyNotifications');
    return notifications ? JSON.parse(notifications) : [];
  };
  
  export const addCompanyNotification = (notification) => {
    const notifications = getCompanyNotifications();
    notifications.push(notification);
    localStorage.setItem('companyNotifications', JSON.stringify(notifications));
  };
  