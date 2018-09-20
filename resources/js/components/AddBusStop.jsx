import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddBusStop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      latitude: '',
      longitude: '',
      bus_schedule: '',
    };
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value,
    });
  }

  handleLatitudeChange(e) {
    this.setState({
      latitude: e.target.value,
    });
  }

  handleLongitudeChange(e) {
    this.setState({
      longitude: e.target.value,
    });
  }

  handleScheduleChange(e) {
    this.setState({
      bus_schedule: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/bus-stops', this.state).then((response) => {
    }).then((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container">

        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Add a Bus Stop</h4>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Enter Name"
                  onChange={this.handleNameChange.bind(this)}
                  value={this.state.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  id="address"
                  aria-describedby="address"
                  placeholder="Enter Address"
                  onChange={this.handleAddressChange.bind(this)}
                  value={this.state.address}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bus_schedule">Schedule</label>
                <input
                  type="text"
                  name="bus_schedule"
                  className="form-control"
                  id="bus_schedule"
                  aria-describedby="bus_schedule"
                  placeholder="Enter Schedule"
                  onChange={this.handleScheduleChange.bind(this)}
                  value={this.state.schedule}
                />
              </div>

              <div className="form-group">
                <label htmlFor="latitude">Latitude</label>
                <input
                  type="text"
                  name="latitude"
                  className="form-control"
                  id="latitude"
                  aria-describedby="latitude"
                  placeholder="Enter Latitude"
                  onChange={this.handleLatitudeChange.bind(this)}
                  value={this.state.latitude}
                />
              </div>

              <div className="form-group">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="text"
                  name="longitude"
                  className="form-control"
                  id="longitude"
                  aria-describedby="longitude"
                  placeholder="Enter Longitude"
                  onChange={this.handleLongitudeChange.bind(this)}
                  value={this.state.longitude}
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBusStop;
