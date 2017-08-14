class AiActions{

    //AI: Сделать ход 'защиты'
    //Смотрит последнюю карту в массиве playerField
    static makeAi_Defence_Move(gameMode, GameMode, playerField, computerCards,
        aiField, trumpSuit){

        if(gameMode.mode===GameMode.AiDefence){
            let cardToBeat = playerField[playerField.length-1];
            AiActions.sortInputDeckByPower(computerCards,true);
            
            //Сначала пытаемся отбиться НЕ козырем
            let result = computerCards.every(function(element,index,array){
                if(element.power > cardToBeat.power){
                    if(element.suit.suit === cardToBeat.suit.suit){
                        //сила карты больше, масть сходится -> 
                        //делаем ход минимально возможной по силе - картой.
                        //возможно - козырной, если отбиваем тоже козырную.
                        aiField.push(element);
                        computerCards.splice(index,1);
                        gameMode.mode = GameMode.PlayerAttack;
                        return false;
                    }
                }
                return true;
            });
            if(result===false){
                return;
            }            

            //Пытаемся отбиться козырем
            //Значит "отбиваемая" карта -> НЕ козырная
            result = computerCards.every(function(element, index, array){
                if(element.power > cardToBeat.power){
                    if(element.suit.suit === trumpSuit.suit){
                        //ВОТ ТУТ будем модифицировать, чтобы при козыре Б не
                        //не отбивал 6К ->TБ.

                        //сила карты больше, масть НЕ сходится -> 
                        //делаем ход козырной, минимально возможной по силе - картой.
                        aiField.push(element);
                        computerCards.splice(index,1);
                        gameMode.mode = GameMode.PlayerAttack;
                        return false;
                    }
                }
                return true;
            });
            if(result===false){
                return;
            }

            //AI отбиться не смог. Меняем режим игры на "Игрок Подбрасывает"
            gameMode.mode = GameMode.PlayerDiscard;
        }
    }

    //AI: Сделать ход 'атаки'
    static makeAi_Attack_Move(gameMode, GameMode, computerCards, aiField,
        isFieldContainSuchCard, fullDeck, removeCardsFromTableAndGiveCards){
        if(gameMode.mode===GameMode.AiAttack){
            if(computerCards.length > 0){
                AiActions.sortInputDeckByPower(computerCards,true);
                
                //Это начало Атаки - первый ход?
                if(aiField.length === 0){
                    //Выясняем, с чего бы лучше походить.
                    //Ищем одинаковые по power и size.cardValue.
                    //Для этого сначала нужно выяснить, есть ли в computerCards 
                    //одинаковые по size.cardValue карты. А уже благодаря 
                    //сортировке по power они будут рядом
                    for(let i=0; i<computerCards.length-1; i++){
                        let cCard = computerCards[i];
                        for(let j=i+1; j<computerCards.length; j++){
                            if(cCard.size.cardValue === 
                            computerCards[j].size.cardValue){                            
                                //Одинаковые по размеру. 
                                //Тогда ходим этой и выходим.
                                AiActions.aiContinueAttack(i, aiField, computerCards, 
                                    gameMode, GameMode);                            
                                return;        
                            }        
                        }
                    }
                    //Одинаковых по size.cardValue и power не нашлось, ходим самой слабой.
                    AiActions.aiContinueAttack(0,aiField, computerCards, gameMode, GameMode);                    
                }else{
                    //Это продолжение атаки.
                    //Можем атаковать только такими по размеру,
                    //какие уже есть на aiField + playerField.
                    //Поочерёдно проверяем наши отсортированные карты и выбираем ту,
                    //которой МОЖНО (см. далее - будет проверка->ВЫГОДНО) атаковать
                    let indexCardWeMayAttack = null;
                    for(let i=0; i<computerCards.length; i++){
                        if(isFieldContainSuchCard(computerCards[i])){
                            indexCardWeMayAttack = i;
                            break;
                        }
                    }
                    if(indexCardWeMayAttack===null){
                        //Не найдена ни одна карта, которой МОЖНО было бы атаковать.
                        AiActions.aiStopAttack(removeCardsFromTableAndGiveCards, 
                            gameMode, GameMode);
                        return;
                    }
                    //Найдена карта, которой МОЖНО было бы атаковать.
                    //А это ВЫГОДНО?
                    if(computerCards[indexCardWeMayAttack].power < 10){
                        //Эта карта - даже не козырь. Атакуем.
                        AiActions.aiContinueAttack(indexCardWeMayAttack, 
                            aiField, computerCards, gameMode, GameMode);
                    }else{
                        //Козырь - а его жалко. Анализируем дальше.
                        //Этот козырь - больше 10-ки?
                        if(computerCards[indexCardWeMayAttack].power > 50){
                            //Это В,Д,К или Т.
                            if(fullDeck.length === 0){
                                if(computerCards.length === 1){
                                    AiActions.aiContinueAttack(indexCardWeMayAttack, aiField,
                                        computerCards, gameMode, GameMode);
                                }else{
                                    AiActions.aiStopAttack(removeCardsFromTableAndGiveCards, 
                                        gameMode, GameMode);
                                }
                            }else{
                                AiActions.aiStopAttack(removeCardsFromTableAndGiveCards, 
                                    gameMode, GameMode);
                            }
                        }else{
                            //Это или 10 или ниже.
                            if(fullDeck.length > 5){
                                //До конца игры далеко. Жалко козыря - отбой.
                                AiActions.aiStopAttack(removeCardsFromTableAndGiveCards, 
                                    gameMode, GameMode);
                            }else{
                                //Близок конец игры. Атакуем.
                                AiActions.aiContinueAttack(indexCardWeMayAttack, aiField,
                                    computerCards, gameMode, GameMode);
                            }
                        } 
                    }
                }            
            }        
        }
    }

    static aiContinueAttack(indexCardToAttack, aiField, computerCards, 
        gameMode, GameMode){

        aiField.push(computerCards[indexCardToAttack]);
        computerCards.splice(indexCardToAttack,1);
        gameMode.mode = GameMode.PlayerDefence;
    }

    static aiStopAttack(removeCardsFromTableAndGiveCards, gameMode, GameMode){
        removeCardsFromTableAndGiveCards(false);
        gameMode.mode = GameMode.PlayerAttack;
    }

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
}

export default AiActions;