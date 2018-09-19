import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Users from './Users.jsx';
import Dashboard from './Dashboard.jsx';

class Index extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  // @ADRIAN create store function to database
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="btn-group mb-4" role="group"
                aria-label="Basic example"
              >
                {/* Links */}
                <Link
                  to="/dashboard"
                  className="btn btn-success">Dashboard
                </Link>
                <Link
                  to="/busstops" className="btn btn-success">Bus
                  Stops</Link>
                <Link
                  to="/busstops/create"
                  className="btn btn-success">Add</Link>
                <Link
                  to="/users"
                  className="btn btn-success">Users</Link>
              </div>

              {/* Routes */}
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/users" component={Users} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

if (document.getElementById('content')) {
  ReactDOM.render(<Index />, document.getElementById('content'));
}

export default Index;
