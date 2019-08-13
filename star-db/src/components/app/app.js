import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: null,
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch', error, errorInfo);
        this.setState({ hasError: true });
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        const { showRandomPlanet, selectedPerson } = this.state;
        const planet = showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div className="stardb-app">
                <Header />
                { planet }

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={ this.toggleRandomPlanet }
                >
                    Toggle Random Planet
                </button>

                <ErrorButton />


            </div>
        );
    }
}
