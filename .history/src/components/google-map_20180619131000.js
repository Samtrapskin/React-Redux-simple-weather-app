import React, {Component} from 'react';

class GoogleMap extends Component {

        componentDidMount() {
            new.google.maps.Map(this.refs.map,)
        }
        render() {
            //this.refs.map
            return <div ref="map" />
        }



}

export default GoogleMap;