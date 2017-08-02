import React, { Component } from 'react';
//import Header from './3/Header'
//import RegistrationFrom from './5/RegistrationForm'

//import './Monster.css'

import Smth from './7/Smth';
import Table from './html.net/Table'

/*
const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
]; 
*/

class Monster extends Component { 
    render() {
        return (
            <div className="container">
                Monster
                {
                    //<Header items="string"/>
                    //<RegistrationFrom />
                }
                <Smth />                
                <Table />
            </div>
        );
    }
}

export default Monster;
