import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card/Card';

class Deck extends React.Component{
    render(){ 
        //перекопируем массив, дабы не влиять...
        //...на массив cards при pop() после 'отделения' последнего - козыря игры
        var cardsWithoutLast = [];
        cardsWithoutLast = this.props.cards.concat();
        let trumpCard = cardsWithoutLast.pop();

        let output = null;

        let cards = cardsWithoutLast.map((elem)=>{
            return <Card key={elem.id} size={elem.size} suit={elem.suit} 
                bootStrapColClass="col-1" hidden={false}/>;
        })
        
        if(this.props.viewMode===this.props.viewModes.developerMode){
            //Отрисовывать в этом режиме:
            //1)Козырную карту;
            //2)Все оставшиеся карты в колоде.

            //1)Козырь.
            let output_TrumpCard = null;
            if(trumpCard !== undefined){
                output_TrumpCard = 
                    <Card key={trumpCard.id} size={trumpCard.size} suit={trumpCard.suit}
                        bootStrapColClass="col-1" hidden={false} />;
            } 

            output = (
                <div className="container">
                    <div className="row">
                        {output_TrumpCard}
                    </div>
                    <div className="row justify-content-center">
                        {cards}
                    </div>
                </div>
            );
        }

        if(this.props.viewMode===this.props.viewModes.userMode){
            //Отрисовывать в этом режиме:
            //1)Козырную карту (переопределив bootstrap-класс);
            //2)Карту (рубашкой кверху) "эмулирующую" колоду.
            
            //1)Козырь.
            let output_TrumpCard = null;
            if(trumpCard !== undefined){
                //"Переопределяем" bootstrap-класс col-6 вместо col-1:
                output_TrumpCard = 
                    <Card key={trumpCard.id} size={trumpCard.size} suit={trumpCard.suit}
                        bootStrapColClass="col-6" hidden={false} />;
            }
            
            //2)Колода.
            let output_MockDeck = null;
            let output_CountOfCardsInDeck = null;
            if(cardsWithoutLast.length > 0){
                //37 - заведомо уникальный key
                output_MockDeck = 
                    <Card key={37} bootStrapColClass="col-6" hidden={true} />;
                output_CountOfCardsInDeck = cardsWithoutLast.length;
            }

            output = (
                <div className="container">
                    <div className="row">
                        {output_TrumpCard}
                        {output_MockDeck}
                    </div>
                    <div className="row">
                        <div className="col-6">
                        </div>
                        <div className="col-6">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-auto">
                                        <b>{output_CountOfCardsInDeck}</b>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            );
        }

        return output;
    }
}

export default Deck;

Deck.propTypes = {
    cards: PropTypes.array,
    viewMode:PropTypes.string,
    viewModes: PropTypes.object
};