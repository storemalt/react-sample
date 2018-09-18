import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get('/api/users').then((response) => {
      if (response.data.data.length > 0) {
        this.setState({
          users: response.data.data,
        });
      }
    });
  }

  render() {
    const users = this.state.users.map((item, key) => (
      <tr key={item.id}>
        <th scope="row">
          {' '}
          {key + 1}
          {' '}
        </th>
        <td>{item.attributes.name}</td>
        <td>{item.attributes.username}</td>
        <td>{item.attributes.created_at}</td>
      </tr>
    ));

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Registered</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    );
  }
}

if (document.getElementById('content')) {
  ReactDOM.render(<Dashboard />, document.getElementById('content'));
}

export default Dashboard;
