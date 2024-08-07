// src/components/ApplicantContext.js
import React, { createContext, useState, useContext } from 'react';

const ApplicantContext = createContext();

export const useApplicants = () => useContext(ApplicantContext);

export const ApplicantProvider = ({ children }) => {
  const [applicants, setApplicants] = useState([]);

  const addApplicant = (applicant) => {
    setApplicants((prevApplicants) => [...prevApplicants, applicant]);
  };

  const updateApplicantStatus = (id, status) => {
    setApplicants((prevApplicants) =>
      prevApplicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status } : applicant
      )
    );
  };

  return (
    <ApplicantContext.Provider value={{ applicants, addApplicant, updateApplicantStatus }}>
      {children}
    </ApplicantContext.Provider>
  );
};
