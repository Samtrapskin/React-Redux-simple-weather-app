import React, {Component} from 'react';

class GoogleMap extends Component {

        componentDidMount() {
            new.GoogleMap
        }
        render() {
            //this.refs.map
            return <div ref="map" />
        }



}

export default GoogleMap;