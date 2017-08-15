import DeckSort from './DeckSort';

class PlayerActionsHandler{

    //Вся обработка кликов Игрока по картам Игрока 
    static handleClickOnCard(cardID, playerCards, gameMode, GameMode,
        playerField, isFieldContainSuchCard, makeAi_Defence_Move, 
        aiField, trumpSuit, makeAi_Attack_Move, fullDeck, computerCards,
        removeCardsFromTableAndGiveCards){

        //У Игрока есть карты?
        if(playerCards.length > 0){

            playerCards.every(function(element, index, array){
                //Это та карта, что выбрал Игрок?
                if(element.id === cardID){
                    if(gameMode.mode === GameMode.PlayerAttack){                    
                        //Это первая карта на playerField? Если нет - ход допустим?
                        if( (playerField.length === 0) ||
                            isFieldContainSuchCard(element)===true){                         
                            
                            playerField.push(element);                        
                            playerCards.splice(index, 1);                         
                            gameMode.mode = GameMode.AiDefence;                        
                            //заставляем AI сделать ход защиты
                            makeAi_Defence_Move(gameMode, GameMode, playerField, 
                                computerCards, aiField, trumpSuit);
                        }
                        return false;
                    }

                    if(gameMode.mode === GameMode.PlayerDiscard){
                        //Такая карта допустима?
                        if(isFieldContainSuchCard(element)===true){
                            playerField.push(element);                        
                            playerCards.splice(index, 1);                         
                        }
                        return false;
                    }

                    if(gameMode.mode === GameMode.PlayerDefence){
                        if(element.power > aiField[aiField.length-1].power){                        
                            //Карта больше по силе. Масть правильная? Или если козырь, то ОК.
                            if(element.suit.suit===
                                aiField[aiField.length-1].suit.suit || 
                                element.suit.suit=== trumpSuit.suit){
                                
                                playerField.push(element);                        
                                playerCards.splice(index, 1);
                                gameMode.mode = GameMode.AiAttack;   
                                //заставляем AI сделать ход атаки
                                makeAi_Attack_Move(gameMode, GameMode, computerCards, aiField, 
                                    isFieldContainSuchCard, fullDeck, removeCardsFromTableAndGiveCards);     
                            }                    
                        }
                        return false;
                    }
                }
                return true;
            });
        }        
    }

    //Обработка нажатия на кнопку "Беру!"
    static handleClickOnTakeButton(playerField, playerCards, aiField,
        giveUpToSixCards, fullDeck, computerCards, gameMode, GameMode,
        makeAi_Attack_Move, isFieldContainSuchCard, removeCardsFromTableAndGiveCards){

        //TODO - тут написать обработку сброса карт для AI

        //Игрок забирает все карты: и с playerField, и с aiField 
        while(playerField.length > 0){
            playerCards.push(playerField.pop());
        }
        while(aiField.length > 0){
            playerCards.push(aiField.pop());
        }
        DeckSort.sortInputDeckByPower(playerCards, true);

        //AI набирает из fullDeck
        giveUpToSixCards(fullDeck, computerCards);

        gameMode.mode = GameMode.AiAttack;
        makeAi_Attack_Move(gameMode, GameMode, computerCards, 
            aiField, isFieldContainSuchCard, fullDeck, removeCardsFromTableAndGiveCards);
    }

    //Обработка нажатия на кнопку "Подбросить нечего, забирай!"
    static handleClickOnAiTakeButton(playerField, computerCards, aiField,
        giveUpToSixCards, fullDeck, playerCards, gameMode, GameMode){

        //Позволяем AI Забрать все карты: и с playerField, и с aiField 
        while(playerField.length > 0){
            computerCards.push(playerField.pop());
        }
        while(aiField.length > 0){
            computerCards.push(aiField.pop());
        }

        //Player набирает из fullDeck
        giveUpToSixCards(fullDeck,playerCards);
        DeckSort.sortInputDeckByPower(playerCards, true);

        gameMode.mode = GameMode.PlayerAttack;
    }

}

export default PlayerActionsHandler;