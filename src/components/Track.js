import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {geolocated} from 'react-geolocated'

import Linearstepper from './Linearstepper'


import Rating from './Rating';


class Track extends Component {
  state = {
    lat: 59.334591,
    lng: 18.063240,
    zoom: 16, }
    render() {

const position = [this.state.lat, this.state.lng];

        return (
          <div>
                <Map center={position} zoom={this.state.zoom}> 
                <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
               />
              
                   <Marker position={position}>
                       <Popup>
                           Delivery is here
                       </Popup>
                   </Marker>
               
               </Map>
             <div class="trackinfo">
                 <Linearstepper></Linearstepper>
             
                 <Rating></Rating>
               
       
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

