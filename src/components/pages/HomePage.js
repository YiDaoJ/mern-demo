import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/login" style={{ display: 'block', padding: 10 }}>Login</Link>
      <Link to="/test" style={{ display: 'block', padding: 10 }}>Test Page</Link>
    </div>
  );
};

export default HomePage;