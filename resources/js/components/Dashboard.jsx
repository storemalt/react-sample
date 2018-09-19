import React, { Component } from 'react';
import Map from './Map';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">

          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Dashboard</h4>
            </div>
            <div className="card-body">
              <Map isMarkerShown />
            </div>
          </div>

          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Nearest Bus Stop</h4>
            </div>
            <div className="card-body">
              <ul
                className="list-group list-group-flush"
                id="nearest-container"
              />
            </div>
            {/* $busStops->links('pagination::bootstrap-4') */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
