import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import PersonView from "./person-view";
import Spinner from "../spinner";

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        const { personId } = this.props;

        if (! personId) {
            return;
        }

        this.setState({ loading: true });

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                });
            });
    };

    render() {

        const { person, loading } = this.state;

        if (! person && ! loading) {
            return <span>Select a person from a list</span>;
        }

        const loadingView = loading ? <Spinner /> : null;
        const personView = ! loading ? <PersonView person={ person } /> : null;

        return (
            <div className="person-details card">
                { loadingView }
                { personView }
            </div>
        )
    }
}
