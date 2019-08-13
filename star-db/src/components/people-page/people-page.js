import React, { Component } from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class PeoplePage extends Component {
    state = {

    };

    render() {
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onPersonSelected={ this.onPersonSelected }/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={ selectedPerson }/>
                </div>
            </div>
        );
    }
}