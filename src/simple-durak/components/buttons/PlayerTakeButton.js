import React  from 'react';
import PropTypes from 'prop-types';

class PlayerTakeButton extends React.Component{
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.onClickHandler();
    }

    render(){
        
        let button = null;
        if(this.props.mode.mode === this.props.GameMode.PlayerDefence || 
            this.props.mode.mode === this.props.GameMode.AiDiscard){
            
            let dash = <span>&mdash;</span>;
            if(this.props.playerCards.length > 0 ){
                button = (
                    <button
                    className="btn btn-danger" 
                    onClick={this.onClick}>
                        {dash} Беру!
                    </button>
                );
            }
        }
        
        let output = null;
        if(this.props.viewMode===this.props.viewModes.developerMode){
            output = (
                <div className="container mt-1">
                    <div className="row justify-content-center">
                        {button}
                    </div>
                </div>
            );
        }
        if(this.props.viewMode===this.props.viewModes.userMode){
            output = button;
        }
        
        return output;
    }
}

export default PlayerTakeButton;

PlayerTakeButton.propTypes = {
    mode: PropTypes.array,
    GameMode:PropTypes.any,
    onClickHandler: PropTypes.any,
    viewMode:PropTypes.string,
    viewModes: PropTypes.object,
    playerCards: PropTypes.array
};