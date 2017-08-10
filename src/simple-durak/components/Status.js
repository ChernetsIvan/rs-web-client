import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component{
    render(){
        let outText = null;

        if(this.props.fullDeck.length===0 && !this.props.firstStart){   
            if(this.props.computerCards.length===0){
                outText = statusMessages.PlayerLose;
            }
            if(this.props.playerCards.length===0){
                outText = statusMessages.PlayerWin;
            }
            if(this.props.computerCards.length===0 && 
                this.props.playerCards.length===0){
                outText = statusMessages.GameResultDraw;
            }         
        }

        if(outText === null) {
            switch(this.props.mode.mode){
                case this.props.GameMode.PlayerAttack || 
                    this.props.GameMode.AiDefence: {
                    outText = statusMessages.PlayerAttack;
                    break;
                }
                case this.props.GameMode.PlayerDefence || 
                    this.props.GameMode.AiAttack: {
                    outText = statusMessages.PlayerDefence;
                    break;
                }
                case this.props.GameMode.PlayerDiscard: {
                    outText = statusMessages.PlayerDiscard;
                    break;
                }
                default:{
                    outText = null;
                }
            }
        }
        
        let dash = <span>&mdash;</span>;
        return (
            <div className="col-auto">
                <h3 className="mt-2">{dash} {outText}</h3>
            </div>
        );
    }
}

export default Status;

Status.propTypes = {
    mode:PropTypes.array,
    GameMode: PropTypes.object,
    computerCards: PropTypes.array,
    playerCards: PropTypes.array,
    fullDeck: PropTypes.array,
    firstStart: PropTypes.bool
};

const statusMessages = {
    PlayerAttack: "Ваш ход!",
    PlayerDefence: "Защищайтесь!",
    PlayerDiscard: "Беру! Подбрасывать будете?",
    PlayerLose: "Вы проиграли! Сыграем ещё раз ? :)",
    PlayerWin: "Вы выиграли! Поздравляю :)",
    GameResultDraw: "Ничья!"
}