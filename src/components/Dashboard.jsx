import React from 'react';
import Dashchart from './Dashchart';

function Dashboard() {

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Total Users</h3>
        <p className="text-3xl font-bold">1,234</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Total Sales</h3>
        <p className="text-3xl font-bold">$12,345</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">New Signups</h3>
        <p className="text-3xl font-bold">123</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Pending Orders</h3>
        <p className="text-3xl font-bold">45</p>
      </div>
    </div>
      <Dashchart/>
    </>
  );
}

export default Dashboard;
