import React, {Component} from 'react';

class CompositionVsInheritance extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <hr />
                <b>CompositionVsInheritance:</b>
                <WelcomeDialog />
                <br />
                SplitPane:
                <SplitPane />
                <br/>
                Specialization - SignUp Dialog:
                    <SignUpDialog />
                <hr />
            </div>
        );
    }
}

export default CompositionVsInheritance;

function FancyBorder(props){
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    handleChange(e){
        this.setState({login:e.target.value});
    }

    handleSignUp(){
        const msg = "Welcom aboard," + this.state.login.toUpperCase() + "!";
        alert(msg);
    }

    render(){
        return (
            <Dialog 
                    title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input 
                    value={this.state.login}
                    onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up! 
                </button>
            </Dialog>
        );
    }
}

function WelcomeDialog(){
    return(
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    );
}

function SplitPane(props){
    return(
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App() {
    return(
        <SplitPane
            left={<Contacts />}
            right={<Chat />} 
            />
    );
}

function Contacts(){
    return (
        <div>Contacts1</div>
    );
}

function Chat(){
    return (
        <div>Chat2</div>
    );
}