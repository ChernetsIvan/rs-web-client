import React from 'react';
import PropTypes from 'prop-types';

import InvisibleCard from './Card/InvisibleCard';
import Card from './Card/Card';

class Player extends React.Component{
    constructor(props){
        super(props);

        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
        this.handlePrevButtonClick = this.handlePrevButtonClick.bind(this);    
    }

    handleNextButtonClick(){
        this.props.onNextClick();
    }

    handlePrevButtonClick(){
        this.props.onPrevClick();
    }

    render(){
        let output = null;
 
        let cards = [];
        for(let i = 0; i < this.props.cards.length; i++){
            cards.push(
                <Card 
                    id = {this.props.cards[i].id} 
                    key={this.props.cards[i].id} 
                    size={this.props.cards[i].size} 
                    suit={this.props.cards[i].suit}
                    power={this.props.cards[i].power}
                    onCardClick={this.props.handlePlayerMove}
                    bootStrapColClass="col-1"
                    hidden={false}
                    />      
            );
        }
        
        if(this.props.viewMode===this.props.viewModes.developerMode){
            output = (
                <div className="container">
                    <div className="row justify-content-center">
                        {cards}
                    </div>
                </div>
            );
        }
        
        if(this.props.viewMode===this.props.viewModes.userMode){
            if(this.props.cards.length > 0){   

                //Показ кнопок Prev и Next
                let out_PrevButton = null;
                if(this.props.playerStartInd > 0
                    && this.props.cards.length > 10){

                    out_PrevButton = (
                        <button onClick={this.handlePrevButtonClick}
                            className="btn btn-info">

                            <b>&larr;{this.props.playerStartInd}</b>
                        </button>
                    );
                }else{
                    out_PrevButton = null;
                }

                let out_NextButton = null;
                if(this.props.playerEndInd < this.props.cards.length-1
                    && this.props.cards.length > 10){

                    out_NextButton = (
                        <button onClick={this.handleNextButtonClick}
                            className="btn btn-info">

                            <b>{(this.props.cards.length-1) - this.props.playerEndInd}&rarr;</b>
                        </button>
                    );
                }else{
                    out_NextButton = null;
                }

                //Выводим максимум 10 карт: от startInd до endInd
                let outCards = [];
                if(this.props.cards.length > 10){
                    outCards = cards.slice(this.props.playerStartInd, this.props.playerEndInd + 1);
                }else{
                    outCards = cards;
                }
                 
                output = (
                    <div className="container">
                        
                        <div className="row justify-content-center">
                            <div className="col-1 align-self-center">
                                {out_PrevButton}
                            </div>
                            {outCards}
                            <div className="col-1 align-self-center">
                                {out_NextButton}
                            </div>
                        </div>
                    </div>
                );
            }else{
                output = <InvisibleCard />;
            }
        }
        
        return output;
    }
}

export default Player;

Player.propTypes = {
    cards: PropTypes.array,
    viewMode:PropTypes.string, 
    viewModes: PropTypes.object,
    onPrevClick: PropTypes.func,
    onNextClick: PropTypes.func,
    playerStartInd: PropTypes.number,
    playerEndInd: PropTypes.number,
    handlePlayerMove: PropTypes.func
};
