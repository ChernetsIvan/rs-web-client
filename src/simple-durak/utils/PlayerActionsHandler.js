class PlayerActionsHandler{

    //Вся обработка кликов Игрока по картам Игрока 
    static handleClickOnCard(cardID, playerCards, gameMode, GameMode,
        playerField, isFieldContainSuchCard, makeAi_Defence_Move, 
        aiField, trumpSuit, makeAi_Attack_Move, fullDeck, computerCards,
        removeCardsFromTableAndGiveCards){

        //У Игрока есть карты?
        if(playerCards.length > 0){
            for(let i = 0; i < playerCards.length; i ++){
                //Это та карта, что выбрал Игрок?
                if(playerCards[i].id === cardID){
                    let card = playerCards[i];

                    if(gameMode.mode === GameMode.PlayerAttack){                    
                        //Это первая карта на playerField? Если нет - ход допустим?
                        if( (playerField.length === 0) ||
                            isFieldContainSuchCard(card)===true){                         
                            
                            playerField.push(card);                        
                            playerCards.splice(i, 1);                         
                            gameMode.mode = GameMode.AiDefence;                        
                            //заставляем AI сделать ход защиты
                            makeAi_Defence_Move(
                                gameMode, 
                                GameMode, 
                                playerField, 
                                computerCards,
                                aiField, 
                                trumpSuit);
                        }
                        break;
                    }

                    if(gameMode.mode === GameMode.PlayerDiscard){
                        //Такая карта допустима?
                        if(isFieldContainSuchCard(card)===true){
                            playerField.push(card);                        
                            playerCards.splice(i, 1);                         
                        }
                        break;
                    }

                    if(gameMode.mode === GameMode.PlayerDefence){
                        if(card.power > aiField[aiField.length-1].power){                        
                            //Карта больше по силе. Масть правильная? Или если козырь, то ОК.
                            if(card.suit.suit===
                            aiField[aiField.length-1].suit.suit || 
                            card.suit.suit=== trumpSuit.suit){
                                playerField.push(card);                        
                                playerCards.splice(i, 1);
                                gameMode.mode = GameMode.AiAttack;   
                                //заставляем AI сделать ход атаки
                                makeAi_Attack_Move(
                                    gameMode, 
                                    GameMode, 
                                    computerCards, 
                                    aiField,
                                    isFieldContainSuchCard, 
                                    fullDeck,
                                    removeCardsFromTableAndGiveCards);     
                            }                    
                        }
                        break;
                    }
                }
            }
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

        gameMode.mode = GameMode.PlayerAttack;
    }

}

export default PlayerActionsHandler;