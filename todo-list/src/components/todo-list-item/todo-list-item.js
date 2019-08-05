import React, { Component } from 'react';
import './todo-list-item.css';
// const TodoListItem = (props) => {
//     return <span>{ props.label }</span>;
// };

export default class TodoListItem extends Component {

    // old method
    // constructor(props) {
    //     super(props);
    //     this.onLabelClick = () => {
    //         console.log(`Done: ${this.props.label}`);
    //     }
    // }

    // state = {
    //     done: false,
    //     important: false
    // };
    //
    // // new method (class fields)
    // onLabelClick = () => {
    //     this.setState(({ done }) => {
    //         return {
    //             done: ! done
    //         };
    //     });
    // };
    //
    // onMarkImportant = () => {
    //     // doesn't change state, state is 'readonly'
    //     // this.state.important = ! this.state.important;
    //
    //     this.setState(({ important }) => {
    //         return {
    //             important: ! important
    //         };
    //     });
    // };

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                        onClick={ onToggleDone }>
                    {label}
                </span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={ onDeleted }>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}
