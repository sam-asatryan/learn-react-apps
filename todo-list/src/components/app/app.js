import React, { Component } from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItemForm from "../add-item-form";

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        searchKeyword: '',
        filter: 'all' // all, active, done

    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const itemIndex = todoData.findIndex((item) => item.id === id);

            const newArray = [
                ...todoData.slice(0, itemIndex),
                ...todoData.slice(itemIndex + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(( { todoData } ) => {
            const newTodoData = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newTodoData
            };
        });
    };

    toggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    toggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    toggleProperty(items, id, propertyName) {
        const itemIndex = items.findIndex((item) => item.id === id);
        const item = items[itemIndex];

        const newItem = { ...item, [propertyName]: ! item[propertyName] };

        return [
            ...items.slice(0, itemIndex),
            newItem,
            ...items.slice(itemIndex + 1)
        ];
    }

    onSearchChange = (searchKeyword) => {
        this.setState({ searchKeyword });
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    search(todoData, searchKeyword) {
        if (! searchKeyword) {
            return todoData;
        }

        return todoData.filter(
            (item) => item.label.toLowerCase().includes(searchKeyword.toLowerCase())
        );
    }

    filter(todoData, filter) {
        switch (filter) {
            case 'all':
                return todoData;
            case 'active':
                return todoData.filter((item) => ! item.done);
            case 'done':
                return todoData.filter((item) => item.done);
            default:
                return todoData;
        }
    }

    render() {

        const { todoData, searchKeyword, filter } = this.state;

        const visibleItems = this.filter(
            this.search(todoData, searchKeyword),
            filter
        );

        const countDone = todoData.filter((item) => item.done).length;
        const todoCount = todoData.length - countDone;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={countDone} />

                <div className="top-panel d-flex">
                    <SearchPanel
                        onChangeSearchInput={ this.onSearchChange }
                        searchKeyword={ searchKeyword }
                    />
                    <ItemStatusFilter
                        filter={ filter }
                        onFilterChange={ this.onFilterChange }
                    />
                </div>

                <AddItemForm onAddItem={ this.addItem }/>

                <TodoList
                    todoItemsData={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.toggleImportant }
                    onToggleDone={ this.toggleDone }
                />
            </div>
        );
    }
}

