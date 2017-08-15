import React from 'react';
import Enum from 'es6-enum'

//Класс-модель
import CardModel from './models/CardModel'

//Классы-ГлавныеКомпоненты
import StartScreen from './components/main/StartScreen';
import GameScreen from './components/main/GameScreen';

//Классы-утилиты
import PlayerActionsHandler from './utils/PlayerActionsHandler';
import AiActions from './utils/AiActions';
import DeckUtils from './utils/DeckUtils';

import { find } from 'lodash-es';

const GameMode = Enum(
    "PlayerAttack", 
    "PlayerDefence", 
    "PlayerDiscard",    //AI забирает: игрок подбрасывает ему карты
    "AiAttack",
    "AiDefence", 
    "AiDiscard");       //Игрок забирает: AI подбрасывает ему карты


//козырная масть. Есть один из элементов массива cardSuits.
//обращаться trumpSuit.suit
var trumpSuit = null;
//сначала вся колода - 36 карт, после раздачи игрокам - 24 карты. Остаток колоды.
var fullDeck = [];
//карты AI
var computerCards = [];
//карты на игровом поле, которые 'положил' AI - aiField
var aiField = [];
//карты на игровом поле, которые 'положил' Player - playerField
var playerField = [];
//карты Player'a
var playerCards = [];
//Режимы Игры для отработки логики AI
var gameMode = [];
//это первый запуск игры после загрузки страницы?
var firstStart = true;
//в начале игры первым ходит Игрок?
var isFirstMovePlayer = true;
//показывать настройки для начала новой игры?
var isRenderSettingsForStartNewGame = true;

class SimpleDurak extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fullDeck: fullDeck,
            computerCards: computerCards,
            aiField: aiField,
            playerField: playerField,
            playerCards: playerCards,
            
            playerStartInd:0,
            playerEndInd:9,
            
            isFirstMovePlayer: isFirstMovePlayer,
            isRenderSettingsForStartNewGame: isRenderSettingsForStartNewGame
        };

        this.handleBeginGameClick = this.handleBeginGameClick.bind(this);
        this.handleStartGameClick = this.handleStartGameClick.bind(this);
        
        this.handleRemoveCardsFromTableClick = this.handleRemoveCardsFromTableClick.bind(this);
        
        this.handlePlayerTakeClick = this.handlePlayerTakeClick.bind(this);
        this.handleAiTakeClick = this.handleAiTakeClick.bind(this);

        this.handlePlayerMove = this.handlePlayerMove.bind(this);
        
        this.handlePlayerNextButtonClick = this.handlePlayerNextButtonClick.bind(this);
        this.handlePlayerPrevButtonClick = this.handlePlayerPrevButtonClick.bind(this);

        this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    handleBeginGameClick(){
        isRenderSettingsForStartNewGame = true;
        this.setState({
            isRenderSettingsForStartNewGame: isRenderSettingsForStartNewGame
        });
    }

    handleStartGameClick(){       
        startGameButtonClickHandler(this);        
    }

    //Кнопка "Отбой!"
    handleRemoveCardsFromTableClick(){
        removeCardsFromTableAndGiveCards(true);

        this.setState({
            fullDeck: fullDeck,
            computerCards: computerCards,
            aiField: aiField,
            playerField: playerField,
            playerCards: playerCards,
        });

        gameMode.mode = GameMode.AiAttack;
        AiActions.makeAi_Attack_Move(gameMode, GameMode, computerCards, 
            aiField, isFieldContainSuchCard, fullDeck, removeCardsFromTableAndGiveCards);
    }

    //Кнопка "Беру!"
    handlePlayerTakeClick(){
        
        PlayerActionsHandler.handleClickOnTakeButton(playerField, playerCards, aiField,
            fullDeck, computerCards,  gameMode, GameMode, isFieldContainSuchCard, 
            removeCardsFromTableAndGiveCards);

        this.setState({
            fullDeck: fullDeck,
            computerCards: computerCards,
            aiField: aiField,
            playerField: playerField,
            playerCards: playerCards
        });
    }

    //Кнопка "Подбросить нечего, забирай!"
    handleAiTakeClick(){
        
        PlayerActionsHandler.handleClickOnAiTakeButton(playerField, computerCards, 
            aiField, fullDeck, playerCards, gameMode,
            GameMode);

        this.setState({
            fullDeck: fullDeck,
            computerCards: computerCards,
            aiField: aiField,
            playerField: playerField,
            playerCards: playerCards,
        });
    }

    handlePlayerMove(cardID){
        PlayerActionsHandler.handleClickOnCard(cardID, playerCards, gameMode, GameMode, playerField,
            isFieldContainSuchCard, aiField, trumpSuit, fullDeck, computerCards, 
            removeCardsFromTableAndGiveCards);
        
        this.setState({
            playerField: playerField,
            playerCards: playerCards,
        })
    }

    handlePlayerNextButtonClick(){
        this.setState({
            playerStartInd: this.state.playerStartInd + 1,
            playerEndInd: this.state.playerEndInd + 1
        })
    }

    handlePlayerPrevButtonClick(){
        this.setState({
            playerStartInd: this.state.playerStartInd - 1,
            playerEndInd: this.state.playerEndInd - 1
        })
    }

    handleRadioChange(){
        isFirstMovePlayer = !isFirstMovePlayer;
        this.setState({
            isFirstMovePlayer: isFirstMovePlayer
        })
    }

    render(){
        let output = null;
        if(isRenderSettingsForStartNewGame){
            //Отображение настроек для начала Новой игры
            output = 
                <StartScreen isFirstMovePlayer={this.state.isFirstMovePlayer} 
                    onClickStartGame={this.handleStartGameClick}
                    onChangeRadio={this.handleRadioChange} />
        }else{            
            //output = RenderGameProcess(this);
            output = 
                <GameScreen 
                    handleBeginGameClick={this.handleBeginGameClick}
                    mode={gameMode}
                    GameMode={GameMode}
                    computerCards={computerCards}
                    playerCards={playerCards}
                    fullDeck={fullDeck}
                    firstStart={firstStart}
                    aiField={aiField}
                    playerField={playerField}
                    onPrevClick={this.handlePlayerPrevButtonClick}
                    onNextClick={this.handlePlayerNextButtonClick}
                    playerStartInd={this.state.playerStartInd}
                    playerEndInd={this.state.playerEndInd}
                    handlePlayerMove={this.handlePlayerMove}
                    handleRemoveCardsFromTableClick={this.handleRemoveCardsFromTableClick}
                    handleAiTakeClick={this.handleAiTakeClick}
                    handlePlayerTakeClick={this.handlePlayerTakeClick} />
        }

        return output;     
    }
}
export default SimpleDurak;


function startGameButtonClickHandler(simpleDurakObject){
    isRenderSettingsForStartNewGame = false;

    //чистим массивы от прошлой игры
    clearArrays();

    trumpSuit = DeckUtils.chooseSuitForTrumpCardInFuture(cardSuits);

    //Наполняем колоду картами
    //На ходу устанавливаем power для каждой карты по принципу:
    //козырь->10*rank.cardValue, НЕкозырь->1*rank.cardValue
    let z = 0;
    let power, coef;
    
    cardSuits.forEach(function(element,index, array){
        if(element.suit === trumpSuit.suit){
            coef = 10;
        }else{
            coef = 1;
        }
        cardRanks.forEach(function(element2, index2, array2){
            power = coef * element2.cardValue;
            fullDeck.push(
                new CardModel(z, element2, element, power)
            );
            z++;
        });
    });
    
    //Вызов этих и выше методов именно в таком порядке!    
    fullDeck = DeckUtils.shuffle(fullDeck); 
    DeckUtils.moveAnyCardWithTrumpSuitToTailOfFullDeck(trumpSuit, fullDeck);
    DeckUtils.giveUpToSixCards(fullDeck, computerCards);
    DeckUtils.giveUpToSixCards(fullDeck,playerCards);
    DeckUtils.sortInputDeckByPower(playerCards, true);   
    
    if(isFirstMovePlayer){
        //Первым ходит Игрок:
        gameMode.mode = GameMode.PlayerAttack;
    }else{
        //Первым ходит AI:
        gameMode.mode = GameMode.AiAttack;
        AiActions.makeAi_Attack_Move(gameMode, GameMode, computerCards, 
            aiField, isFieldContainSuchCard, fullDeck, removeCardsFromTableAndGiveCards);
    }

    //обновляем "затронутые" (а именно - изменнённые и изменяемые) states:
    simpleDurakObject.setState({
        fullDeck: fullDeck,
        computerCards: computerCards,
        aiField: aiField,
        playerField: playerField,
        playerCards: playerCards,
        playerStartInd:0,
        playerEndInd:9,
        renderSettingsForStartNewGame: isRenderSettingsForStartNewGame
    });

    firstStart = false;
}

function clearArrays(){
    fullDeck = [];
    computerCards = [];
    aiField = [];
    playerField = [];
    playerCards = [];
}

function removeCardsFromTableAndGiveCards(givePlayerFirst){
    aiField = [];
    playerField = [];
    if(givePlayerFirst){
        DeckUtils.giveUpToSixCards(fullDeck,playerCards);
        DeckUtils.giveUpToSixCards(fullDeck, computerCards);        
    }else{
        DeckUtils.giveUpToSixCards(fullDeck, computerCards);
        DeckUtils.giveUpToSixCards(fullDeck,playerCards);
    }
    DeckUtils.sortInputDeckByPower(playerCards, true);
}

//Игровое поле(aiField + playerField) содержит такую же по размеру карту inputCard?
function isFieldContainSuchCard(inputCard){
    let field = aiField.concat(playerField);
    let card = find(field, (card) => {
        return card.rank.cardValue === inputCard.rank.cardValue;
    });
    if(card === undefined){
        return false;
    }else{
        return true;
    }
}


const cardRanks = [
    {text: "6", cardValue:1},
    {text: "7", cardValue:2},
    {text: "8", cardValue:3},
    {text: "9", cardValue:4},
    {text: "10", cardValue:5},
    {text: "В", cardValue:6},
    {text: "Д", cardValue:7},
    {text: "К", cardValue:8},
    {text: "Т", cardValue:9}
];

const cardSuits = [
    {suit: "Ч"},
    {suit: "К"},
    {suit: "П"},
    {suit: "Б"}
];