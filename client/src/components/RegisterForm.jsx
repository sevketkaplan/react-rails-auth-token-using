import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            name: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            [name]: val,
        });
    }


    render() {
        return (
            <div className="form">
                <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>

                    <input type="text" name="username" placeholder="username" value=
                        {this.state.username} onChange={this.handleChange} />

                    <input type="password" name="password" placeholder="password" value=
                        {this.state.password} onChange={this.handleChange} />

                    <input type="email" name="email" placeholder="email" value=
                        {this.state.email} onChange={this.handleChange} />


                    <input type="text" name="name" placeholder="name" value=
                        {this.state.name} onChange={this.handleChange} />

                    <input type="submit" value="Register!" />

                </form>
            </div>
        )
    }
}

export default RegisterForm;