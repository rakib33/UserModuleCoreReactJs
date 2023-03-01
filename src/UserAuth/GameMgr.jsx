import React, { Component,useState } from 'react';
import Zombie from './Zombie';

const Humbug = {
    name: 'Humbug',
    level: 5,
    hp: 20
}
const SignIn = "signin";
const SignUp = "signup"
let [authMode, setAuthMode] = useState("signin");

const SignInData = {
    email: 'rakibul@gmail.com',
    Password: 5,
    Title: 'Sign In'
  }

  const changeAuthMode =() =>{
      console.log('change request');
      setAuthMode(authMode === SignIn ? SignUp : SignIn)
      console.log('auth mode :' + authMode);
  }

class GameMgr extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(authMode === SignIn){
        return(
            <div>
                <h1>Sign In</h1>
                <Zombie name={"Geek"} level={5} hp={21}></Zombie>
                <Zombie {...SignInData}></Zombie>
            </div>
        )
        }

        return(
            <div>
                <h2>Sign Up</h2>
            </div>
        )
    }
}

export default GameMgr;