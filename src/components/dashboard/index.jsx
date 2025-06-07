import React from 'react';
import LayoutDashboard from './layoutdashboard';

const Dashboard = () => {
  return (
    <LayoutDashboard>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Welcome to GreenLeaf</h2>
                <p className="text-gray-600">
                    Your personal plant care companion. Explore our plant guides and encyclopedia to learn more about gardening.
                </p>
            </div>
        </div>
    </LayoutDashboard>
  );
};

export default Dashboard;
