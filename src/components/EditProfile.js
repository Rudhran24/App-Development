// src/components/EditProfile.js
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css'; // Import the CSS file

const EditProfile = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedUserDetails) {
      setUserDetails(storedUserDetails);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    navigate('/profile'); // Redirect back to profile page after updating
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="form-group">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name"
            value={userDetails.name} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email"
            value={userDetails.email} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formPhone" className="form-group">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
            type="text" 
            name="phone"
            value={userDetails.phone} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            name="password"
            value={userDetails.password} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditProfile;
