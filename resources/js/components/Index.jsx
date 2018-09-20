import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Users from './Users.jsx';
import Dashboard from './Dashboard.jsx';
import BusStops from './BusStops.jsx';
import AddBusStop from './AddBusStop.jsx';

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
                className="btn-group mb-4"
                role="group"
                aria-label="Basic example"
              >
                {/* Links */}
                <Link
                  to="/"
                  className="btn btn-success"
                >
                  Dashboard
                </Link>
                <Link
                  to="/bus-stops"
                  className="btn btn-success"
                >
                  Bus Stops
                </Link>
                <Link
                  to="/bus-stop/create"
                  className="btn btn-success"
                >
                  Add
                </Link>
                <Link
                  to="/users"
                  className="btn btn-success"
                >
                  Users
                </Link>
              </div>

              {/* Routes */}
              <Route path="/" exact component={Dashboard} />
              <Route path="/users" exact component={Users} />
              <Route path="/bus-stops" exact component={BusStops} />
              <Route path="/bus-stop/create" exact component={AddBusStop} />
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
