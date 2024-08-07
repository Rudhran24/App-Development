import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CompanyDetails.css';
import { useApplicants } from './ApplicantContext';

import { useNotifications } from './userNotifications'; // Ensure this import is correct

// Import company logos
import googleLogo from './logos/Google.jpg';
import tataLogo from './logos/Tata.jpg';
import teslaLogo from './logos/Tesla.jpg';
import zohoLogo from './logos/Zoho.jpg';
import microsoftLogo from './logos/Microsoft.jpg';
import amazonLogo from './logos/Amazon.jpg';
import flipkartLogo from './logos/Flipkart.jpg';
import appleLogo from './logos/Apple.jpg';
import facebookLogo from './logos/Facebook.jpg';
import ibmLogo from './logos/IBM.jpg';
import intelLogo from './logos/Intel.jpg';
import oracleLogo from './logos/Oracle.jpg';
import salesforceLogo from './logos/Salesforce.jpg';
import sapLogo from './logos/Sap.jpg';
import whatsappLogo from './logos/Whatsapp.jpg';

const companies = {
  google: {
    logo: googleLogo,
    description: "Google is a global technology leader specializing in internet services, software, and hardware.",
    jobOffers: ["Software Engineer", "Product Manager", "Data Scientist"],
    skillsRequired: ["JavaScript", "Python", "Machine Learning"],
    salary: "80,000 - 150,000 USD"
  },
  tata: {
    logo: tataLogo,
    description: "Tata is a multinational conglomerate with businesses spanning diverse sectors including automotive, steel, and IT services.",
    jobOffers: ["Engineer", "Consultant", "HR Manager"],
    skillsRequired: ["Project Management", "Engineering", "Business Analysis"],
    salary: "60,000 - 120,000 USD"
  },
  tesla: {
    logo: teslaLogo,
    description: "Tesla is an electric vehicle and clean energy company known for its electric cars, battery energy storage systems, and solar products.",
    jobOffers: ["Mechanical Engineer", "Electrical Engineer", "Software Developer"],
    skillsRequired: ["Electric Vehicles", "Battery Systems", "Software Engineering"],
    salary: "70,000 - 140,000 USD"
  },
  zoho: {
    logo: zohoLogo,
    description: "Zoho is a software company offering cloud-based applications for businesses including CRM, finance, and HR.",
    jobOffers: ["Software Developer", "Sales Executive", "Technical Support"],
    skillsRequired: ["CRM", "Software Development", "Customer Support"],
    salary: "65,000 - 120,000 USD"
  },
  microsoft: {
    logo: microsoftLogo,
    description: "Microsoft is a global leader in software development, known for its operating systems, software products, and cloud services.",
    jobOffers: ["Software Engineer", "Cloud Solutions Architect", "UX Designer"],
    skillsRequired: ["C#", ".NET", "Cloud Computing"],
    salary: "90,000 - 160,000 USD"
  },
  amazon: {
    logo: amazonLogo,
    description: "Amazon is an international technology company focusing on e-commerce, cloud computing, and artificial intelligence.",
    jobOffers: ["Operations Manager", "Software Engineer", "Data Analyst"],
    skillsRequired: ["AWS", "E-commerce", "Data Analysis"],
    salary: "75,000 - 150,000 USD"
  },
  flipkart: {
    logo: flipkartLogo,
    description: "Flipkart is a leading Indian e-commerce company offering a wide range of products including electronics, fashion, and groceries.",
    jobOffers: ["E-commerce Manager", "Logistics Coordinator", "Customer Service Representative"],
    skillsRequired: ["E-commerce", "Supply Chain Management", "Customer Service"],
    salary: "60,000 - 110,000 USD"
  },
  apple: {
    logo: appleLogo,
    description: "Apple is a technology company known for its innovative products including the iPhone, iPad, and Mac computers.",
    jobOffers: ["Hardware Engineer", "Software Engineer", "Product Designer"],
    skillsRequired: ["iOS Development", "Product Design", "Hardware Engineering"],
    salary: "85,000 - 155,000 USD"
  },
  facebook: {
    logo: facebookLogo,
    description: "Facebook is a social media giant that provides platforms for social networking and online communication.",
    jobOffers: ["Data Scientist", "Software Engineer", "Product Manager"],
    skillsRequired: ["Data Analysis", "Software Engineering", "Product Management"],
    salary: "90,000 - 160,000 USD"
  },
  ibm: {
    logo: ibmLogo,
    description: "IBM is a multinational technology company specializing in cloud platforms, cognitive solutions, and enterprise systems.",
    jobOffers: ["Consultant", "Data Scientist", "Cloud Engineer"],
    skillsRequired: ["Cloud Computing", "Data Science", "Consulting"],
    salary: "80,000 - 140,000 USD"
  },
  intel: {
    logo: intelLogo,
    description: "Intel is a leading semiconductor company known for its processors and technology innovations.",
    jobOffers: ["Hardware Engineer", "Software Developer", "Research Scientist"],
    skillsRequired: ["Semiconductors", "Software Development", "Hardware Design"],
    salary: "85,000 - 150,000 USD"
  },
  oracle: {
    logo: oracleLogo,
    description: "Oracle provides enterprise software solutions including databases, cloud infrastructure, and applications.",
    jobOffers: ["Database Administrator", "Cloud Engineer", "Software Developer"],
    skillsRequired: ["Oracle Databases", "Cloud Computing", "Software Development"],
    salary: "80,000 - 140,000 USD"
  },
  salesforce: {
    logo: salesforceLogo,
    description: "Salesforce offers customer relationship management (CRM) software and applications for businesses.",
    jobOffers: ["CRM Developer", "Sales Executive", "Technical Support Specialist"],
    skillsRequired: ["CRM", "Sales", "Technical Support"],
    salary: "70,000 - 130,000 USD"
  },
  sap: {
    logo: sapLogo,
    description: "SAP provides enterprise resource planning (ERP) software and solutions for business management.",
    jobOffers: ["SAP Consultant", "Business Analyst", "ERP Developer"],
    skillsRequired: ["SAP", "Business Analysis", "ERP Development"],
    salary: "75,000 - 140,000 USD"
  },
  whatsapp: {
    logo: whatsappLogo,
    description: "WhatsApp is a messaging platform known for its end-to-end encrypted messaging and voice communication services.",
    jobOffers: ["Software Engineer", "Product Manager", "UI/UX Designer"],
    skillsRequired: ["Software Development", "Product Management", "UI/UX Design"],
    salary: "80,000 - 150,000 USD"
  }
};

const CompanyDetails = () => {
  const { companyName } = useParams();
  const company = companies[companyName] || null;
  const { addNotification } = useNotifications();
  const { addApplicant } = useApplicants(); // Get addApplicant function
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    jobPreference: '',
    skill: '',
    resume: null,
    errors: {}
  });
  
  const [submissionMessage, setSubmissionMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!formData.jobPreference) errors.jobPreference = "Job preference is required";
    if (!formData.skill) errors.skill = "Skill is required";
    if (!formData.resume) errors.resume = "Resume is required";
    setFormData({ ...formData, errors });
    return Object.keys(errors).length === 0;
  };
  
  const applyForJob = (jobDetails) => {
    const { jobTitle } = jobDetails;
    const notification = {
      id: Date.now(),
      message: `Your application for the position of ${jobTitle} at ${companyName} is submitted successfully. Soon you will get the response from our side.`,
      status: 'Submitted',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    };
    addNotification(notification);
    
    // Add applicant data to context
    const applicant = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      position: formData.jobPreference,
      status: 'Pending',
      resume: formData.resume
    };
    addApplicant(applicant);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmissionMessage("Your application is submitted successfully. Soon you will get the response from our side.");
      
      // Example job details (replace with actual values if necessary)
      const jobDetails = {
        jobTitle: formData.jobPreference
      };
      applyForJob(jobDetails);
      
      // Optionally, navigate to the user dashboard
      // navigate('/user-dashboard');
    }
  };

  return (
    <div className="container">
      <div className="company-details">
        {company && (
          <>
            <div className="company-logo" style={{ width: '100px', height: 'auto' }}>
              <img src={company.logo} alt={`${companyName} logo`} />
            </div>
            <h1>{companyName.toUpperCase()}</h1>
            <p>{company.description}</p>
            <h3>Job Offers</h3>
            <ul>
              {company.jobOffers.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
            <h3>Skills Required</h3>
            <ul>
              {company.skillsRequired.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h3>Salary</h3>
            <p>{company.salary}</p>
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>
                  Phone Number:
                  <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </label>
                <label>
                  Job Preference:
                  <input type="text" name="jobPreference" value={formData.jobPreference} onChange={handleChange} />
                </label>
                <label>
                  Skill:
                  <input type="text" name="skill" value={formData.skill} onChange={handleChange} />
                </label>
                <label>
                  Resume:
                  <input type="file" name="resume" onChange={handleChange} />
                </label>
                <button type="submit">Apply</button>
                <button onClick={() => navigate('/user-dashboard')} className="back-button">
                Go Back to User Dashboard
              </button>
              </form>
              
              {submissionMessage && (
                <div className="submission-message">
                  <p>{submissionMessage}</p>
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default CompanyDetails;