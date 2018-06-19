import React, {Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


export default WeatherList extends Component{
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            City
                        </th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}