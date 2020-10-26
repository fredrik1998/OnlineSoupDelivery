import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {geolocated} from 'react-geolocated'

import Linearstepper from './Linearstepper'
import RatingWidget from './Rating';

const DEFAULT_LATITUDE = 59.329323;
const DEFUALT_LONGITUDE = 18.068581;


class Track extends Component {
    render() {
        const longitude = this.props.coords ? this.props.coords.longitude : DEFUALT_LONGITUDE;
        const latitude = this.props.coords ? this.props.coords.latitude : DEFAULT_LATITUDE;

        return (
          <div>
                <Map center={[longitude,latitude]} zoom={8}> 
                <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
               />
               {
                   !this.props.coords ?
                   <div className="loading">Loading</div>
                   :
                   <Marker position={[longitude,latitude]}>
                       <Popup>
                           Delivery is here
                       </Popup>
                   </Marker>
               }
               </Map>
             <div class="trackinfo">
                 <Linearstepper></Linearstepper>
               <RatingWidget></RatingWidget>
       
               </div>
               </div> 
               
        );
    }
}
export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 10000,
  })(Track);

