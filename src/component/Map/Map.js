import React from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import '../Contacts/Contacts.css';

export class Maps extends React.Component {
    render() {
        return (

                <Map className={'maps'}
                     google={this.props.google}
                     zoom={15}
                     initialCenter={{lat: 49.9838569, lng: 36.2599784}}>
                    <Marker position={{lat: 49.98576946, lng: 36.24965083}}/>
                </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyArM-u7fWQuxXR1oSC1zsDRA0BdKOsNErg'
})(Maps);
