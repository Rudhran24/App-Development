// src/components/Companies.js
import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from './logos/Google.jpg'; // Import your logos here
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

// List of all companies
const allCompanies = [
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

const Companies = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {allCompanies.map((company, index) => (
        <div
          key={index}
          style={{
            width: '250px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              style={{
                width: '120px',
                height: 'auto',
                objectFit: 'contain',
                marginBottom: '10px'
              }}
            />
            <h3>{company.name}</h3>
            <Link to={`/company-details/${company.name.toLowerCase()}`}>
              <button
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  background: '#007bff',
                  color: '#fff',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Companies;
