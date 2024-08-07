import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './components/UserDashboard';
import CompanyDashboard from './components/CompanyDashboard';
import Profile from './components/Profile';
import Landing from './components/Landing';
import CompanyDetails from './components/CompanyDetails';
import { AuthProvider } from './components/AuthContext';
import { NotificationsProvider } from './components/userNotifications';
import ManageJobs from './components/ManageJobs';
import ViewApplicants from './components/ViewApplicants';
import CompanyAnalytics from './components/CompanyAnalytics';
import UserManagement from './components/UserManagement';
import UserNotification from './components/UserNotification';
import { ApplicantProvider } from './components/ApplicantContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ApplicantProvider>
          <NotificationsProvider>
            <CustomNavbar />
            <div style={{ padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/company-dashboard/:company" element={<CompanyDashboard />}>
                  <Route path="manage-jobs" element={<ManageJobs />} />
                  <Route path="view-applicants" element={<ViewApplicants />} />
                  <Route path="company-analytics" element={<CompanyAnalytics />} />
                  <Route path="user-management" element={<UserManagement />} />
                </Route>
                <Route path="/profile" element={<Profile />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/company-details/:companyName" element={<CompanyDetails />} />
                <Route path="/notifications" element={<UserNotification />} />
              </Routes>
            </div>
          </NotificationsProvider>
        </ApplicantProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
