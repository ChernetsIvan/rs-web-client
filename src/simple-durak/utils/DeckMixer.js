//Перемешивает карты в колоде
class DeckMixer{

    //Возвращает перемешанную колоду
    static mix(inputDeck){
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
}

export default DeckMixer;