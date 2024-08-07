import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginBackground from './Gifs/landing.gif';
import formGIF from './Gifs/login.gif';
import { useAuth } from './AuthContext'; // Import the useAuth hook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure login from useAuth

  const validate = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Logged in as', email);
      login({ email }); // Use the login function from context
      const company = identifyCompanyByEmail(email); // Function to get company from email
      if (company) {
        navigate(`/company-dashboard/${company}`);
      } else {
        navigate('/user-dashboard'); // Redirect to user dashboard
      }
    }
  };

  const identifyCompanyByEmail = (email) => {
    // Function to map email to company name
    const companies = {
      'google@gmail.com': 'google',
      'tata@gmail.com': 'tata',
      'tesla@gmail.com': 'tesla',
      'zoho@gmail.com': 'zoho',
      'microsoft@gmail.com': 'microsoft',
      'amazon@gmail.com': 'amazon',
      'flipkart@gmail.com': 'flipkart',
      'apple@gmail.com': 'apple',
      'facebook@gmail.com': 'facebook',
      'ibm@gmail.com': 'ibm',
      'intel@gmail.com': 'intel',
      'oracle@gmail.com': 'oracle',
      'salesforce@gmail.com': 'salesforce',
      'sap@gmail.com': 'sap',
      'whatsapp@gmail.com': 'whatsapp',
    };
    return companies[email];
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <Container fluid className="p-0">
      <Row noGutters className="h-100">
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img src={formGIF} alt="Form GIF" style={{ width: '80%', height: 'auto' }} />
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div style={{ width: '80%' }}>
            <Form onSubmit={handleSubmit}>
              <h2 className="text-center mb-4">Login</h2>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </Form.Group>
              <button type="submit" className="button">Login</button>
              <p>Don't have an account?</p>
              <button type="button" className="button" onClick={handleRegister}>Register</button>
            </Form>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        body, html {
          height: 100%;
          margin: 0;
        }
        .container-fluid {
          background: url(${loginBackground}) no-repeat center center fixed;
          background-size: cover;
          height: 100vh;
        }
        .button {
          background-color: #007bff;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 10px 2px;
          cursor: pointer;
          border-radius: 5px;
        }
        .button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </Container>
  );
};

export default Login;
