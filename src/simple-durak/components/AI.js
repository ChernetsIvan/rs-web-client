import React from 'react';
import PropTypes from 'prop-types';

import InvisibleCard from './Card/InvisibleCard';
import Card from './Card/Card';

class AI extends React.Component{
    render(){
        let output = null;
        
        if(this.props.viewMode===this.props.viewModes.developerMode){

            let cards = [];
            for(let i = 0; i < this.props.cards.length; i++){
                cards.push(
                    <Card 
                        id = {this.props.cards[i].id} 
                        key={this.props.cards[i].id} 
                        size={this.props.cards[i].size} 
                        suit={this.props.cards[i].suit}
                        power={this.props.cards[i].power}
                        onCardClick={this.props.cards[i].onCardClick}
                        bootStrapColClass="col-1"
                        hidden={false}
                        />      
                );
            }

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
                //Не забываем, что выводим только первые 9 рубашкой кверху карт           
                
                let inputCards = [];
                inputCards = this.props.cards.concat();
                //И показываем, сколько не видно
                let countOfCardsThatNotShown = 0;
                let out_countOfCardsThatNotShown = null;
                while(inputCards.length > 9){
                    inputCards.pop();
                    countOfCardsThatNotShown++;
                    out_countOfCardsThatNotShown = <b>+{countOfCardsThatNotShown}</b>;
                }


                let outputCards = [];
                for(let i = 0; i < inputCards.length; i ++){
                    outputCards.push(
                        <Card 
                            key={inputCards[i].id}
                            bootStrapColClass="col-1 ml-3"
                            hidden={true}/>
                    );
                }

                output = (
                    <div className="container mt-1">
                        <div className="row justify-content-center">              
                            {outputCards}
                            <div className="col-1 align-self-center">
                                {out_countOfCardsThatNotShown}
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

export default AI;

AI.propTypes = {
    cards: PropTypes.array,
    viewMode:PropTypes.string,
    viewModes: PropTypes.object
};