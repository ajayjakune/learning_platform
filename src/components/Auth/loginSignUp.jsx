import React, { Component } from 'react';
import './loginSignUp.css';
import Axios from 'axios';

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

    handleChecked = () => {
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
                const username = data.user.first_name + ' ' + data.user.last_name;
                localStorage.setItem('jwt', data.token);
                localStorage.setItem('username', username);
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('userid', data.user._id);
                localStorage.setItem('userImg', data.user.profile_photo);

                // Callback Added for setting the token value in App.js
                this.props.setToken(data.token);
                // this.props.history.push('/Homepage');
            });
        });
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
            .then(() => alert('User Registered Successfully'))
            .catch(() => {
                alert('user already exist');
            });
    };

    render() {
        return (
            <div className='background-login'>
                <div className='mt-3'>
                    <div className='col-md-6 mx-auto p-0'>
                        <div className='login-box'>
                            <div className='login-snip'>
                                <input
                                    id='tab-1'
                                    type='radio'
                                    name='tab'
                                    className='sign-in'
                                    checked={this.state.checked}
                                    onClick={this.handleChecked.bind(this)}
                                />
                                <label htmlFor='tab-1' className='tab'>
                                    Login
                                </label>
                                <input
                                    id='tab-2'
                                    type='radio'
                                    name='tab'
                                    className='sign-up'
                                    onClick={this.handleChecked.bind(this)}
                                />
                                <label htmlFor='tab-2' className='tab'>
                                    Sign Up
                                </label>
                                <div className='login-space'>
                                    <div className='login'>
                                        <form onSubmit={this.handleSignInSubmit.bind(this)}>
                                            <div className='group'>
                                                <label htmlFor='user' className='label'>
                                                    Username
                                                </label>
                                                <input
                                                    type='text'
                                                    className='input'
                                                    placeholder='Enter email address'
                                                    name='email'
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange.bind(this)}
                                                />
                                            </div>
                                            <div className='group'>
                                                <label htmlFor='pass' className='label'>
                                                    Password
                                                </label>
                                                <input
                                                    type='password'
                                                    className='input'
                                                    data-type='password'
                                                    placeholder='Enter password'
                                                    name='password'
                                                    value={this.state.password}
                                                    onChange={this.handleInputChange.bind(this)}
                                                />
                                            </div>
                                            <div className='group'>
                                                <input type='submit' className='button' value='Sign In' />
                                            </div>
                                            <div className='hr'></div>
                                        </form>
                                    </div>

                                    <div className='sign-up-form'>
                                        <form onSubmit={this.handleSignUpSubmit.bind(this)}>
                                            <div className='group'>
                                                <label htmlFor='user' className='label'>
                                                    First Name
                                                </label>
                                                <input
                                                    type='text'
                                                    className='input'
                                                    placeholder='Enter first name'
                                                    name='firstName'
                                                    value={this.state.firstName}
                                                    onChange={this.handleInputChange.bind(this)}
                                                />
                                            </div>
                                            <div className='group'>
                                                <label htmlFor='user' className='label'>
                                                    Last Name
                                                </label>
                                                <input
                                                    type='text'
                                                    className='input'
                                                    placeholder='Enter last name'
                                                    name='lastName'
                                                    value={this.state.lastName}
                                                    onChange={this.handleInputChange.bind(this)}
                                                />
                                            </div>
                                            <div className='group'>
                                                <label htmlFor='user' className='label'>
                                                    Email Address
                                                </label>
                                                <input
                                                    type='text'
                                                    className='input'
                                                    placeholder='Enter email address'
                                                    name='email'
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange.bind(this)}
                                                />
                                            </div>
                                            <div className='group'>
                                                <label htmlFor='pass' className='label'>
                                                    Password
                                                </label>
                                                <input
                                                    type='password'
                                                    className='input'
                                                    data-type='password'
                                                    placeholder='Create your password'
                                                    name='password'
                                                    value={this.state.password}
                                                    onChange={this.handleInputChange.bind(this)}
                                                />
                                            </div>
                                            <div className='group'>
                                                <input
                                                    type='submit'
                                                    className='button'
                                                    value='Sign Up'
                                                    onClick={this.handleChecked.bind(this)}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginSignUp;