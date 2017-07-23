import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import Footer from './Footer';
import Counter from '../containers/Counter';
import AsyncApp from './AsyncApp';

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Counter />
                <AddTodo />
                <TodoList />
                <Footer />
                <AsyncApp />
            </div>
        );
    }
}