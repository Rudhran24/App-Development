// Inside your UserDashboard component

const applyForJob = () => {
    // Example of applying for a job at Google
    handleApplyJob('Software Engineer', 'Google');
  };
  
  return (
    <div style={{ display: 'flex' }}>
      {/* Dashboard Sidebar */}
      <div style={{ width: '250px', background: '#f8f9fa', padding: '20px' }}>
        <h2>Dashboard</h2>
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              padding: '10px 20px',
              border: 'none',
              background: '#007bff',
              color: '#fff',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            {showNotifications ? 'Hide Notifications' : 'View Notifications'}
          </button>
        </div>
        <div>
          <button
            onClick={() => setShowCompanies(!showCompanies)}
            style={{
              padding: '10px 20px',
              border: 'none',
              background: '#007bff',
              color: '#fff',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            {showCompanies ? 'Hide Companies' : 'View Companies'}
          </button>
        </div>
        {/* Simulate applying for a job */}
        <div style={{ marginTop: '20px' }}>
          <button onClick={applyForJob} style={{ padding: '10px 20px', border: 'none', background: '#28a745', color: '#fff', borderRadius: '4px' }}>
            Apply for Job at Google
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* Rest of your component */}
      </div>
    </div>
  );
  