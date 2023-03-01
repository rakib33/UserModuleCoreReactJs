import React, { Component } from 'react';

class Zombie extends Component {

  render() {
        return(
            <div>
                <h1>Zmb: {this.props.Title}</h1>
                <ul style={{listStyle: 'none'}}>
                    <li><span>Level: {this.props.email}</span></li>
                    <li><span>hp: {this.props.Password}/{this.props.Password}</span></li>
                </ul>
            </div>
        )
    }
}

export default Zombie;