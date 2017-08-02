import React, {Componet} from 'react';

class HandlingEvents extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = 
        {
            buttonClicks: 0,
            isToggleOn: true
        }

        //This bindings is necessary to make this work in the callback
        this.handleClickOnButton = this.handleClickOnButton.bind(this);
        this.handleClickOnLink = this.handleClickOnLink.bind(this);
        
        //При использовании "property initializer syntax" -
        //(handleClickOnToggle) здесь привязывать не нужно
    }

    handleClickOnButton() {
        this.setState(prevState => ({
            buttonClicks: prevState.buttonClicks + 1
        }));
    }

    handleClickOnLink(e){
        e.preventDefault();
        console.log('The link was clicked');
    }

    //Так называемый "property initializer syntax".
    //This syntax ensures 'this' is bound within handleClickOnToggle
    //Warning: this is *experimental* syntax.
    handleClickOnToggle = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickOnButton}>
                    Click Me ({this.state.buttonClicks} clicked)
                </button>
                <a href="#" onClick={this.handleClickOnLink}>
                    Click me. Nothing will be.
                </a>
                <button onClick = {this.handleClickOnToggle}>
                    {this.state.isToggleOn ?  'ON' : 'OFF'}
                </button>     
            </div>
        );
    }
}

export default HandlingEvents;