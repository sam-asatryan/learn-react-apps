import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    swapiService = new SwapiService();
    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService.getAllPeople().then((peopleList) => {
            this.setState({
                peopleList
            });
        });
    }

    renderItems(peopleList) {
        return peopleList.map(({ id, name }) => {
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={ () => this.props.onPersonSelected(id) }
                >
                    {name}
                </li>
            );
        })
    }

    render() {
        const { peopleList } = this.state;

        if (! peopleList) {
            return <Spinner/>;
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                { items }
            </ul>
        );
    }
}
