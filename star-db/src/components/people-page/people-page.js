import React, { Component } from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundary from "../error-boundary";


export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 1
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const { selectedPerson } = this.state;
        const itemList = (
            <ItemList
                onPersonSelected={ this.onPersonSelected }
                getData={ this.swapiService.getAllPeople }
                renderItem={ ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})` }
            />
        );
        const personDetails = (
            <ErrorBoundary>
                <PersonDetails personId={ selectedPerson }/>
            </ErrorBoundary>
        );

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}