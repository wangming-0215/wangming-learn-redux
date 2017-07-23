import React, { Component } from 'react';
import Picker from '../../containers/Picker';
import Posts from '../../containers/Posts'

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Picker options={['reactjs', 'frontend']} />
                <Posts />
            </div>
        );
    }
}