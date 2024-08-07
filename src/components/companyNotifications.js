// src/components/companyNotifications.js

export const getCompanyNotifications = () => {
    const notifications = localStorage.getItem('companyNotifications');
    return notifications ? JSON.parse(notifications) : [];
  };
  
  export const addCompanyNotification = (notification) => {
    const notifications = getCompanyNotifications();
    notifications.push(notification);
    localStorage.setItem('companyNotifications', JSON.stringify(notifications));
  };
  
  export const updateCompanyNotification = (index, updatedNotification) => {
    const notifications = getCompanyNotifications();
    notifications[index] = updatedNotification;
    localStorage.setItem('companyNotifications', JSON.stringify(notifications));
  };
  