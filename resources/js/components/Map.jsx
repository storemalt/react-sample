import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBVrUTos54M4MAFXWd2dR1tiOfU6BcfHBE&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 1.265972, lng: 103.822368 }}
  >
    {props.isMarkerShown
    && <Marker position={{ lat: 1.265972, lng: 103.822368 }} />}
  </GoogleMap>
));

export default Map;
