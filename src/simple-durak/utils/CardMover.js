//Перемещает карты внутри колоды
class CardMover{

    //Перемещает первую попавшуюся карту с козырной мастью
    //в конец колоды 
    static moveAnyCardWithTrumpSuitToTailOfFullDeck(trumpSuit, fullDeck){
        for(let i=0; i < fullDeck.length; i++){
            if(fullDeck[i].suit.suit === trumpSuit.suit){
                let card = fullDeck[i];
                fullDeck.splice(i,1);
                fullDeck.push(card);
                break;
            }
        }
        //return fullDeck;
    }
}

export default CardMover;