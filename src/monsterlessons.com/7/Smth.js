import React, { Component } from 'react';

class Smth extends Component {
    constructor(props){
        super(props);

        this.submit = this.submit.bind(this);
    }
    
    submit(){
        console.log("submit", this.testInput.value);
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="test"
                    ref={(TestTextInput)=> this.testInput = TestTextInput} />
                <button onClick={this.submit}>Submit</button>
            </div>
        );
    }
}

export default Smth;
