// src/components/AddJob.js
import React, { useState } from 'react';
import './AddJob.css'; // Import CSS file

const AddJob = ({ onAddJob }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      jobTitle,
      description,
      requiredSkills: requiredSkills.split(',').map(skill => skill.trim()), // Convert comma-separated string to array
      salary,
    };
    onAddJob(newJob); // Pass new job details to parent
    setJobTitle('');
    setDescription('');
    setRequiredSkills('');
    setSalary('');
  };

  return (
    <div className="add-job-container">
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Required Skills (comma-separated)</label>
          <input
            type="text"
            value={requiredSkills}
            onChange={(e) => setRequiredSkills(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
