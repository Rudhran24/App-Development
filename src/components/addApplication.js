const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Create an application object
      const application = {
        name,
        email,
        phone,
        skills,
        experience,
        resume,
      };
  
      // Add application to localStorage
      addApplication(application);
  
      setSubmissionStatus('Your application is submitted successfully!');
      setTimeout(() => {
        navigate(`/company-details/${id}`);
      }, 2000); // Redirect after 2 seconds
    }
    setValidated(true);
  };
  