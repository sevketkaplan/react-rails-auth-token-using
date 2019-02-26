import React, { Component } from 'react';
import Auth from '../modules/Auth';


class AddMonsterForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            [name]: val,
        })
    }
    render() {
        return (
            <div className="form">
                <form onSubmit={(e) => this.props.addMonster(e, this.state)}>
                    <input type="text" name="name" placeholder="name"
                        value={this.state.name} onChange={this.handleChange} />

                    <input type="text" name="description" placeholder="description"
                        value={this.state.description} onChange={this.handleChange} />

                        <input type="submit" value="Add Monster"/>
                </form>
            </div>
        )
    }
}

export default AddMonsterForm;