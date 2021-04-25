// import React, { Component } from 'react';
// import { Redirect } from 'react-router';
// import "./loginSignUp.css";
// import Axios from 'axios'


// class LoginSignUp extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { email: '', password: '', firstName: '', lastName: '', checked: true };
//     }

//     handleChecked = (e) => {
//         if (this.state.checked == true) {
//             this.setState({ ...this.state, checked: false });
//         } else {
//             this.setState({ ...this.state, checked: true });
//         }
//     }

//     handleInputChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     handleSignInSubmit = (e) => {
//         e.preventDefault();

//         const url = 'http://localhost:5000/signin';
//         const user = {
//             email: this.state.email,
//             password: this.state.password
//         }

//         fetch(url, { headers: { "Content-Type": "application/json" }, body: JSON.stringify(user) }).then(res => {
//             res.json().then(userdata => {
//                 console.log(userdata)
//                 localStorage.setItem('jwt', userdata.token);
//                 localStorage.setItem('userdata', JSON.stringify(userdata.user));
//                 localStorage.setItem('userid', userdata.user._id);
//             }).catch(e => console.log(e))

//         }).catch(e => console.log(e));

//         //     Axios.post(url, user).then((res) => {

//         //         // localStorage.setItem('jwt', JSON.stringify(res.data.token));
//         //         // localStorage.setItem('first_name', JSON.stringify(res.data.user.first_name));
//         //         // localStorage.setItem('last_name', JSON.stringify(res.data.user.last_name));
//         //         // localStorage.setItem('user_id', JSON.stringify(res.data.user._id));
//         //         // localStorage.setItem('userdata', JSON.stringify(res.data.user));
//         //         res.json().then((userdata) => {
//         //             localStorage.setItem('jwt', userdata.token);
//         //             localStorage.setItem('userdata', JSON.stringify(userdata.user));
//         //         }).catch((e) => {
//         //             console.log(e);
//         //         })
//         //         window.location = "/Homepage";

//         //     }).catch((e) => {
//         //         alert(e);
//         //     });
//         window.location = "/Homepage";
//     }

//     handleSignUpSubmit = (e) => {
//         e.preventDefault();

//         const url = 'http://localhost:5000/signup';
//         const user = {
//             email: this.state.email,
//             password: this.state.password,
//             firstName: this.state.firstName,
//             lastName: this.state.lastName
//         }

//         Axios.post(url, user).then((res) => {
//             alert("user successfully created");
//         }).catch((e) => {
//             alert("user alredy exist");
//         });

//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div className="row">
//                     <div className="col-md-6 mx-auto p-0">
//                         <div className="card">
//                             <div className="login-box">
//                                 <div className="login-snip">
//                                     <input id="tab-1" type="radio" name="tab" className="sign-in" checked={this.state.checked} />
//                                     <label for="tab-1" className="tab">Login</label>
//                                     <input id="tab-2" type="radio" name="tab" className="sign-up" onClick={this.handleChecked.bind(this)} />
//                                     <label for="tab-2" className="tab">Sign Up</label>
//                                     <div className="login-space">
//                                         <div className="login">
//                                             <form onSubmit={this.handleSignInSubmit.bind(this)}>
//                                                 <div className="group">
//                                                     <label for="user" className="label">Username</label>
//                                                     <input type="text" className="input" placeholder="Enter email address" name="email" value={this.state.email} onChange={this.handleInputChange.bind(this)} />
//                                                 </div>
//                                                 <div className="group">
//                                                     <label for="pass" className="label">Password</label>
//                                                     <input type="password" className="input" data-type="password" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleInputChange.bind(this)} />
//                                                 </div>
//                                                 <div className="group">
//                                                     <input type="submit" className="button" value="Sign In" />
//                                                 </div>
//                                                 <div className="hr"></div>
//                                             </form>
//                                         </div>

//                                         <div className="sign-up-form">
//                                             <form onSubmit={this.handleSignUpSubmit.bind(this)}>
//                                                 <div className="group">
//                                                     <label for="user" className="label">First Name</label>
//                                                     <input type="text" className="input" placeholder="Enter first name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange.bind(this)} />
//                                                 </div>
//                                                 <div className="group">
//                                                     <label for="user" className="label">Last Name</label>
//                                                     <input type="text" className="input" placeholder="Enter last name" name="lastName" value={this.state.lastName} onChange={this.handleInputChange.bind(this)} />
//                                                 </div>
//                                                 <div className="group">
//                                                     <label for="user" className="label">Email Address</label>
//                                                     <input type="text" className="input" placeholder="Enter email address" name="email" value={this.state.email} onChange={this.handleInputChange.bind(this)} />
//                                                 </div>
//                                                 <div className="group">
//                                                     <label for="pass" className="label">Password</label>
//                                                     <input type="password" className="input" data-type="password" placeholder="Create your password" name="password" value={this.state.password} onChange={this.handleInputChange.bind(this)} />
//                                                 </div>
//                                                 <div className="group">
//                                                     <input type="submit" className="button" value="Sign Up" onClick={this.handleChecked.bind(this)} />
//                                                 </div>
//                                                 <div className="hr"></div>
//                                                 <div className="foot"> <label for="tab-1">Already Member?</label> </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

// export default LoginSignUp;