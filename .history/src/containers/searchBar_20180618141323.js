import React, {Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {term: ''}

    }

    render() {
        return (
            <form className="input-group">
            <input 
            placeholder="Get a 5-day forecast in your favorite cities"
            className="form-control"
            value= {this.state.term}
            onChange= {this.On}
            />
            <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
            </form>
        )
    }
}
