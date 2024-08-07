const handleRegister = () => {
    if (validate()) {
      // Save user details in local storage
      localStorage.setItem('user', JSON.stringify({ name, email, phone, address, password }));
      
      navigate('/login'); // Navigate to login page after successful registration
    }
  };
  