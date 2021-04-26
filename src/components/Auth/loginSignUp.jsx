import React, { Component } from 'react';
// import { Redirect } from 'react-router';
import './loginSignUp.css';
import Axios from 'axios';
// import { Redirect } from 'react-router';
// import Homepage from '../Homepage/Homepage';
// import { Route, Switch, useHistory } from 'react-router-dom';

class LoginSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            checked: true,
        };
    }

    handleChecked = (e) => {
        if (this.state.checked === true) {
            this.setState({ ...this.state, checked: false });
        } else {
            this.setState({ ...this.state, checked: true });
        }
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSignInSubmit = (e) => {
        e.preventDefault();

        // const url = 'http://localhost:5000/signin';
        // const user = {
        //     email: this.state.email,
        //     password: this.state.password
        // }

        // Axios.post(url, user).then((res) => {

        //     localStorage.setItem('jwt', JSON.stringify(res.data.token));
        //     localStorage.setItem('first_name', JSON.stringify(res.data.user.first_name));
        //     localStorage.setItem('last_name', JSON.stringify(res.data.user.last_name));
        //     window.location = "/Homepage";

        // }).catch((e) => {
        //     alert("invalid details");
        // });
        fetch('http://localhost:5000/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: this.state.password,
                email: this.state.email,
            }),
        }).then((res) => {
            res.json().then((data) => {
                console.log(data);
                const username = data.user.first_name + ' ' + data.user.last_name;
                localStorage.setItem('jwt', data.token);
                localStorage.setItem('username', username);
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('userid', data.user._id);
                // <Redirect to='/Homepage' />;
                this.props.history.push('/Homepage');
            });
        });

        // window.location = '/Homepage';
    };

    handleSignUpSubmit = (e) => {
        e.preventDefault();

        const url = 'http://localhost:5000/signup';
        const user = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        };

        Axios.post(url, user)
            .then()
            .catch(() => {
                alert('user already exist');
            });
    };

    render() {
        return (
            <React.Fragment>
                <div class='row'>
                    <div class='col-md-6 mx-auto p-0'>
                        <div class='card'>
                            <div class='login-box'>
                                <div class='login-snip'>
                                    <input
                                        id='tab-1'
                                        type='radio'
                                        name='tab'
                                        class='sign-in'
                                        checked={this.state.checked}
                                    />
                                    <label for='tab-1' class='tab'>
                                        Login
                  </label>
                                    <input
                                        id='tab-2'
                                        type='radio'
                                        name='tab'
                                        class='sign-up'
                                        onClick={this.handleChecked.bind(this)}
                                    />
                                    <label for='tab-2' class='tab'>
                                        Sign Up
                  </label>
                                    <div class='login-space'>
                                        <div class='login'>
                                            <form onSubmit={this.handleSignInSubmit.bind(this)}>
                                                <div class='group'>
                                                    <label for='user' class='label'>
                                                        Username
                          </label>
                                                    <input
                                                        type='text'
                                                        class='input'
                                                        placeholder='Enter email address'
                                                        name='email'
                                                        value={this.state.email}
                                                        onChange={this.handleInputChange.bind(this)}
                                                    />
                                                </div>
                                                <div class='group'>
                                                    <label for='pass' class='label'>
                                                        Password
                          </label>
                                                    <input
                                                        type='password'
                                                        class='input'
                                                        data-type='password'
                                                        placeholder='Enter password'
                                                        name='password'
                                                        value={this.state.password}
                                                        onChange={this.handleInputChange.bind(this)}
                                                    />
                                                </div>
                                                <div class='group'>
                                                    <input type='submit' class='button' value='Sign In' />
                                                </div>
                                                <div class='hr'></div>
                                            </form>
                                        </div>

                                        <div class='sign-up-form'>
                                            <form onSubmit={this.handleSignUpSubmit.bind(this)}>
                                                <div class='group'>
                                                    <label for='user' class='label'>
                                                        First Name
                          </label>
                                                    <input
                                                        type='text'
                                                        class='input'
                                                        placeholder='Enter first name'
                                                        name='firstName'
                                                        value={this.state.firstName}
                                                        onChange={this.handleInputChange.bind(this)}
                                                    />
                                                </div>
                                                <div class='group'>
                                                    <label for='user' class='label'>
                                                        Last Name
                          </label>
                                                    <input
                                                        type='text'
                                                        class='input'
                                                        placeholder='Enter last name'
                                                        name='lastName'
                                                        value={this.state.lastName}
                                                        onChange={this.handleInputChange.bind(this)}
                                                    />
                                                </div>
                                                <div class='group'>
                                                    <label for='user' class='label'>
                                                        Email Address
                          </label>
                                                    <input
                                                        type='text'
                                                        class='input'
                                                        placeholder='Enter email address'
                                                        name='email'
                                                        value={this.state.email}
                                                        onChange={this.handleInputChange.bind(this)}
                                                    />
                                                </div>
                                                <div class='group'>
                                                    <label for='pass' class='label'>
                                                        Password
                          </label>
                                                    <input
                                                        type='password'
                                                        class='input'
                                                        data-type='password'
                                                        placeholder='Create your password'
                                                        name='password'
                                                        value={this.state.password}
                                                        onChange={this.handleInputChange.bind(this)}
                                                    />
                                                </div>
                                                <div class='group'>
                                                    <input
                                                        type='submit'
                                                        class='button'
                                                        value='Sign Up'
                                                        onClick={this.handleChecked.bind(this)}
                                                    />
                                                </div>
                                                <div class='hr'></div>
                                                <div class='foot'>
                                                    {' '}
                                                    <label for='tab-1'>Already Member?</label>{' '}
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginSignUp;