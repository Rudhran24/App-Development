import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { addUserNotification } from './userNotifications';
import { addCompanyNotification } from './companyNotifications';

const ApplyJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [resume, setResume] = useState(null);
  const [validated, setValidated] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const application = {
        name,
        email,
        phone,
        skills,
        experience,
        resume,
        companyId: id,
        status: 'Pending',
      };

      addUserNotification({
        message: `You applied for a job at company ${id}`,
        application,
        status: 'Pending',
      });

      addCompanyNotification({
        message: `${name} applied for a job`,
        application,
        status: 'Pending',
      });

      setSubmissionStatus('Your application is submitted successfully!');
      setTimeout(() => {
        navigate(`/company-details/${id}`);
      }, 2000);
    }
    setValidated(true);
  };

  return (
    <div className="apply-job-container">
      <h1>Apply for Job</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder="Enter name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <Form.Control.Feedback type="invalid">
            Please provide your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            required
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder="Enter phone number" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
          <Form.Control.Feedback type="invalid">
            Please provide your phone number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formSkills">
          <Form.Label>Skills</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder="Enter your skills" 
            value={skills} 
            onChange={(e) => setSkills(e.target.value)} 
          />
          <Form.Control.Feedback type="invalid">
            Please provide your skills.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formExperience">
          <Form.Label>Experience</Form.Label>
          <Form.Control 
            required
            type="text" 
            placeholder="Enter your experience" 
            value={experience} 
            onChange={(e) => setExperience(e.target.value)} 
          />
          <Form.Control.Feedback type="invalid">
            Please provide your experience.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formResume">
          <Form.Label>Resume</Form.Label>
          <Form.Control 
            required
            type="file" 
            onChange={(e) => setResume(e.target.files[0])} 
          />
          <Form.Control.Feedback type="invalid">
            Please upload your resume.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {submissionStatus && <p>{submissionStatus}</p>}
    </div>
  );
};

export default ApplyJob;
