import React, {Component} from 'react';

class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}

class GroupWelcome extends React.Component{
    render(){
        return(
            <div>
                <Welcome name="Sara"/>
                <Welcome name="Bill" />
                <Welcome name="Emily" />
            </div>
        );
    }
}

export default GroupWelcome;


function Comment(props) {
    return(
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {
                    //formatDate(props.date)
                }
            </div>
        </div>
    );
}

function Avatar(props){
    return(
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.author} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}