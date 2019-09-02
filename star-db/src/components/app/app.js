import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
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

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        const { showRandomPlanet } = this.state;
        const planet = showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div className="stardb-app container">
                <Header/>
                {planet}

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}
                >
                    Toggle Random Planet
                </button>

                <ErrorButton/>

                <PeoplePage/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onPersonSelected={ this.onPersonSelected }
                            getData={ this.swapiService.getAllPlanets }
                            renderItem={ (item) => item.name }
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={ this.state.selectedPerson }/>
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onPersonSelected={ this.onPersonSelected }
                            getData={ this.swapiService.getAllStarShips }
                            renderItem={ (item) => (<span>{item.name}<button>Hey</button></span>) }
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={ this.state.selectedPerson }/>
                    </div>
                </div>

            </div>
        );
    }
}
