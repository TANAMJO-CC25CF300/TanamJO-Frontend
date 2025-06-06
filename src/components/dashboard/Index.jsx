import React from 'react';
import HeaderDashboard from './Header-dashboard';
import LeftSidebar from './Left-Sidebar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderDashboard />
      <div style={{ display: 'flex', flex: 1 }}>
        <LeftSidebar />
        <main style={{ flex: 1, padding: '2rem' }}>
          <h2>Welcome to Dashboard</h2>
          <p>This is your main dashboard content area.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 