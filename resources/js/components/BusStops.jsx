import React, { Component } from 'react';
import axios from 'axios';
import Map from './Map';

class BusStops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busStopsData: [],
    };
  }

  componentDidMount() {
    axios.get('/api/bus-stops').then((response) => {
      if (response.data.data.length > 0) {
        this.setState({
          busStopsData: response.data.data,
        });
      }
    });
  }

  render() {
    const { busStopsData } = this.state;
    const busStops = busStopsData.map(item => (
      <li className="list-group-item" key={item.id}>
        <div className="row">
          <div className="col-10">
            <h6>{item.attributes.name}</h6>
            <button type="button" className="btn btn-info btn-sm">
              <small>
                <span className="badge badge-light">Lat</span>
                {item.attributes.latitude}
              </small>
            </button>
            <button type="button" className="btn btn-info btn-sm">
              <small>
                <span className="badge badge-light">Long</span>
                {item.attributes.longitude}
              </small>
            </button>
          </div>

          <div className="col-2">
            @ADRIAN edit link here
            {' '}
            <i className="fas fa-edit" />
            <button
              type="button"
              rel="no-refresh"
              className="btn-link"
              data-id="{item.id}"
            >
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      </li>
    ));

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Bus Stop Map</h4>
              </div>
              <div className="card-body">
                {/* MAP COMPONENT */}
                <Map isMarkerShown />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Available Bus Stops</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {busStops}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusStops;
