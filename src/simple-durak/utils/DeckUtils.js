import { pull, find } from 'lodash-es';

class DeckUtils{
    //отсортировать входной массив карт по возрастанию isAsc=true
    //(убыванию-> isAsc=false)  по параметру 'power'
    static sortInputDeckByPower(inputDeck, isAsc){
        inputDeck.sort(function(a,b){
            if(isAsc){
                return a.power - b.power;
            }else{
                return b.power - a.power;
            }        
        });
    }

    //Возвращает перемешанную колоду
    static shuffle(inputDeck){
        var newFullDeck = [];
        while(inputDeck.length > 0){
            //Случайный индекс в inputDeck
            let randIndex = Math.random() * (inputDeck.length-1);
            randIndex = Math.round(randIndex);

            let card = inputDeck[randIndex];
            newFullDeck.push(card);

            inputDeck.splice(randIndex, 1);
        }
        return newFullDeck;
    }

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

export default DeckUtils;