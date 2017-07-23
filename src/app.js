import React, { Component } from "react";
import { Provider } from 'react-redux';
import UI from './components';

export default class extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={this.props.store}>
                <UI />
            </Provider>
        );
    }
}