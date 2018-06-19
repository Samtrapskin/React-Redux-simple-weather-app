import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList'
export default class App extends Component {
  render() {
    console.log(name)
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
      
    );
  }
}
