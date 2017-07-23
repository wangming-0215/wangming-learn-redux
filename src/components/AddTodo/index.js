import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: '' }
    }

    handleInputChange = (e) => {
        this.setState({
            todo: e.target.value
        });
    };

    handleAddTodo = () => {
        if (this.state.todo) {
            this.props.addTodo(this.state.todo);
            this.setState({
                todo: ''
            });
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input onChange={this.handleInputChange} value={this.state.todo} />
                    <button onClick={this.handleAddTodo}>Add Todo</button>
                </div>
            </div>
        );
    }
}