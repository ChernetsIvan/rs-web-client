import React, {Component} from 'react';

class Clock extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState(
            {
                date: new Date()
            }
        );
    }

    render(){
        return(
            <div>
                <h1>Hello from Clock # {this.props.id}!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

class GroupOfClock extends React.Component{
    render(){
        return(
            <div>
                <Clock id={1}/>
                <Clock id={2}/>
                <Clock id={3}/>
            </div>
        );
    }
}

export default GroupOfClock;