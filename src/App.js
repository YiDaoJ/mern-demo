import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/HomePage';
import TestPage from './components/pages/HomePage';

const App = () => {
  return (
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/test" exact component={TestPage} />
    </div>
  );
};

export default App;