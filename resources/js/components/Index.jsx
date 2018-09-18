import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard.jsx';
import Example from './Example';

class Index extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Route path="/" exact component={Example} />
            <Route path="/dashboard" exact component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

if (document.getElementById('content')) {
  ReactDOM.render(<Index />, document.getElementById('content'));
}

export default Index;
