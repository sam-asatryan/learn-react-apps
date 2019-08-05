import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    onChangeSearchInput = (event) => {
        this.props.onChangeSearchInput(event.target.value);
    };

    render() {
        const { searchKeyword } = this.props;

        return (
            <input
                type="text"
                className="form-control search-input search-panel"
                placeholder="Type to search"
                onChange={ this.onChangeSearchInput }
                value={ searchKeyword }
            />
        );
    }
}

