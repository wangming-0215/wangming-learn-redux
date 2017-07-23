import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getPosts(this.props.selectedSubreddit);
    }

    handleSelectChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        const { selectedSubreddit, onChange, options } = this.props;
        return (
            <span>
                <h1>{selectedSubreddit}</h1>
                <select onChange={this.handleSelectChange} value={selectedSubreddit}>
                    {options.map(option => (
                        <option value={option} key={option}>{option}</option>
                    ))}
                </select>
            </span>
        );
    }
}