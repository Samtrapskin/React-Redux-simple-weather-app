import React, {Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {term: ''}

    }

    render() {
        return (
            <form className="input-group">
            <input />
            pls
            <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
            </form>
        )
    }
}

