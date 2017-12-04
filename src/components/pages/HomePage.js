import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';

class HomePage extends Component {

  state = {
    projects: [],
    languages: []
  }
  
  componentWillMount() {
    

  }  

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <Link to="/login" style={{ display: 'block', padding: 10 }}>Login</Link>
        <Link to="/test" style={{ display: 'block', padding: 10 }}>Test Page</Link>
        <button>Test Button</button>
      </div>
    );
  }
}

export default HomePage;