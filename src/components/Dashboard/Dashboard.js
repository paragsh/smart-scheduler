import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ol>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
      </ol>
    </div>
  );
};

export default Dashboard;
