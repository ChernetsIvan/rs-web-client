import React, { Component } from 'react';

const User = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(User)}!
    </h1>
);

const element2 = <div tabIndex="0"></div>;

const element3 = <img src={User.avatarUrl}></img>;

const element4 = <img src={User.avatarUrl}/>;

const element5 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you!</h2>
    </div>
);

const title = <h1>{User.firstName}</h1>;

const element6 = <title />;

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user){
    if(user){
        return <h1>Hello, {formatName(User)}!</h1>;
    }
    return <h1>Hello, Stranger!</h1>;
}

class IntroducingJSX extends Component{

    render() {
        return(
            title
        );
    }

}

export default IntroducingJSX;