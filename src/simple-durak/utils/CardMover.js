import { pull, find } from 'lodash-es';

//Перемещает карты внутри колоды
class CardMover{

    //Перемещает первую попавшуюся карту с козырной мастью
    //в конец колоды 
    static moveAnyCardWithTrumpSuitToTailOfFullDeck(trumpSuit, fullDeck){
        let card = find(fullDeck, (card) => {
            return card.suit.suit === trumpSuit.suit;
        });
        pull(fullDeck, card);
        fullDeck.push(card);
    }
}

export default CardMover;