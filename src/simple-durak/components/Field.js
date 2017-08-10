import React from 'react';
import PropTypes from 'prop-types';

import InvisibleCard from './Card/InvisibleCard';
import Card from './Card/Card';

class Field extends React.Component{
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
                    bootStrapColClass={"col-1"}
                    hidden={this.props.cards[i].hidden}
                    />      
            );
        }

        if(this.props.viewMode===this.props.viewModes.developerMode){
            if(this.props.cards.length > 0){
                output = (
                    <div className="container">
                        <div className="row">                        
                            {cards}                        
                        </div>
                    </div>
                );
            }else{
                output = (
                    <div>
                        <br />
                    </div>                
                );
            }
        }

        if(this.props.viewMode===this.props.viewModes.userMode){

            //Чтобы "не скакала" разметка:
            if(this.props.cards.length === 0){
                output = <InvisibleCard />;
            }else{
                output = (
                    <div className="container">
                        <div className="row">
                            {cards}
                        </div>
                    </div>
                );
            }
        }

        return output;
    }
}

export default Field;

Field.propTypes = {
    cards: PropTypes.array,
    viewMode:PropTypes.string,
    viewModes: PropTypes.object
};