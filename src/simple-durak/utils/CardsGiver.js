class CardsGiver{
    //взять из НАЧАЛА (!) колоды fullDeck и положить в inputDeck столько карт, 
    //чтобы в inputDeck в итоге было 6 карт
    static giveUpToSixCards(fullDeck, inputDeck){
        //если хотя бы одно из условий не выполняется, в цикл не заходим:
        while(inputDeck.length < 6 && fullDeck.length > 0){
            let card = fullDeck.shift();
            inputDeck.push(card);
        }
    }
}

export default CardsGiver;