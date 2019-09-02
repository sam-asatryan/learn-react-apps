import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then((itemList) => {
            this.setState({
                itemList
            });
        });
    }

    renderItems(items) {
        return items.map((item) => {

            const { id } = item;
            const label = this.props.renderItem(item );

            return (
                <li
                    key={ id }
                    className="list-group-item"
                    onClick={ () => this.props.onPersonSelected(id) }
                >
                    {label}
                </li>
            );
        })
    }

    render() {
        const { itemList } = this.state;

        if (! itemList) {
            return <Spinner/>;
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                { items }
            </ul>
        );
    }
}
