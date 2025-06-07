import React, { useEffect } from 'react';
import HeaderDashboard from './Header-dashboard';
import LeftSidebar from './Left-Sidebar';

const Dashboard = () => {
  // Load Bootstrap hanya saat dashboard ini dirender
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css');
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderDashboard />
      <div style={{ display: 'flex', flex: 1 }}>
        <LeftSidebar />
        <main>
          
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
