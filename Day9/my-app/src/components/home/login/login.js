import React, { Component } from 'react';
import "./login.css";
import Id_Button from './id_button';
import Psw_button from "./psw_button";


class Login extends Component {
  render() {
    return <div className="Login_Block">
      <h1>Login</h1>
      <Id_Button/>
      <Psw_button/>
    </div>
  }
};


export default Login;
