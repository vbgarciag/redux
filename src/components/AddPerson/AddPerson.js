import React, { Component } from 'react';

import './AddPerson.css';

export default class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    };

    nameChangeHandler = (e) => {
        this.setState({ name: e.target.value })
    };

    ageChangeHandler = (e) => {
        this.setState({ age: e.target.value })
    };

    render() {
        return (
            <div className="AddPerson">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                    onChange={this.nameChangeHandler}
                    value={this.state.name}
                />
                <br/>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Age"
                    onChange={this.ageChangeHandler}
                    value={this.state.age}
                />
                <br/>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
};