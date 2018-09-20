import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
    };
  }

  componentDidMount() {
    axios.get('/api/users').then((response) => {
      if (response.data.data.length > 0) {
        this.setState({
          usersData: response.data.data,
        });
      }
    });
  }

  render() {
    const { usersData } = this.state;
    const users = usersData.map((item, key) => (
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
        <div className="row">
          <div className="col">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Users</h4>
              </div>
              <div className="card-body">
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
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Users;
