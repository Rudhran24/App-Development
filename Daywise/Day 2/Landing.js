import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

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

const companies = [
  { name: 'Google', logo: googleLogo },
  { name: 'Tata', logo: tataLogo },
  { name: 'Tesla', logo: teslaLogo },
  { name: 'Zoho', logo: zohoLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Amazon', logo: amazonLogo },
  { name: 'Flipkart', logo: flipkartLogo },
  { name: 'Apple', logo: appleLogo },
  { name: 'Facebook', logo: facebookLogo },
  { name: 'IBM', logo: ibmLogo },
  { name: 'Intel', logo: intelLogo },
  { name: 'Oracle', logo: oracleLogo },
  { name: 'Salesforce', logo: salesforceLogo },
  { name: 'SAP', logo: sapLogo },
  { name: 'WhatsApp', logo: whatsappLogo }
];

const Landing = () => {
  return (
    <div className="container mt-4">
      <h1>Companies You Can Apply</h1>
      <div className="row mb-4">
        {companies.map((company, index) => (
          <div key={index} className="col-md-3 text-center mb-4">
            <img src={company.logo} alt={`${company.name} Logo`} className="img-fluid mb-2" />
            <h4>{company.name}</h4>
            <Link to={`/company-details/${company.name.toLowerCase()}`} className="btn btn-primary">View Jobs</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
