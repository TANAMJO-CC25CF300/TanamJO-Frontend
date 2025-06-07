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
        <main className="p-4">
          <div className="container">
            <h2 className="text-primary">Welcome to Dashboard</h2>
            <p>This is your main dashboard content area.</p>
            <button className="btn btn-success mt-3">Contoh Tombol Bootstrap</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
