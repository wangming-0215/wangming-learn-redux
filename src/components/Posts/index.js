import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {this.props.items.map((post, index) => {
                    <li key={index}>{post.title}</li>
                })}
            </ul>
        );
    }
}