// src/components/Profile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('user')) || {});
  const [photo, setPhoto] = useState(profile.photo || '');
  const [name, setName] = useState(profile.name || '');
  const [email, setEmail] = useState(profile.email || '');
  const [password, setPassword] = useState(profile.password || '');
  const [confirmPassword, setConfirmPassword] = useState(profile.password || '');
  const [notification, setNotification] = useState(''); // State for notification
  const navigate = useNavigate();

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const updatedProfile = { name, email, password, photo };
    localStorage.setItem('user', JSON.stringify(updatedProfile));
    setProfile(updatedProfile);
    setNotification('Profile updated successfully!'); // Set notification message

    // Redirect to UserDashboard after a short delay
    setTimeout(() => {
      navigate('/user-dashboard');
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        setProfile((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleProfileUpdate}>
        <div>
          <label>Profile Photo</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          {photo && <img src={photo} alt="Profile" style={{ width: '100px', height: '100px' }} />}
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
    </div>
  );
};

export default Profile;
