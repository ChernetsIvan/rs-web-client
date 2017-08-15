import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Классы-компоненты
import './../Card/Card.css' // Подключаем единожды, чтобы не объявлять в каждом из components!
import AI from './../AI';
import Player from './../Player';
import Deck from './../Deck';
import Field from './../Field';
import Status from './../Status';
//кнопки->
import PlayerTakeButton from './../buttons/PlayerTakeButton';
import RemoveCardsFromTableButton from './../buttons/RemoveCardsFromTableButton';
import AiTakeButton from './../buttons/AiTakeButton';

class GameScreen extends Component {    
    render() {
        return (
            <div>
                <div className="container  my-1">
                    <div className="row justify-content-between">
                        <div className="col-auto">
                            <button
                                className="btn btn-secondary mr-3" 
                                onClick={this.props.handleBeginGameClick}>
                                
                                Новая игра
                            </button>
                        </div>
                        <Status 
                            mode={this.props.mode}
                            GameMode={this.props.GameMode} 
                            computerCards={this.props.computerCards}
                            playerCards={this.props.playerCards}
                            fullDeck={this.props.fullDeck}
                            firstStart={this.props.firstStart}/>
                        <div className="col-2"></div>
                    </div>  
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <AI cards={this.props.computerCards} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-10">
                                <Field cards={this.props.aiField} />                
                                <Field cards={this.props.playerField} />
                            </div>
                            <div className="col-2">
                                <Deck cards={this.props.fullDeck} />
                            </div>                                                       
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Player 
                                    cards={this.props.playerCards}                            
                                    onPrevClick={this.props.onPrevClick}
                                    onNextClick={this.props.onNextClick}
                                    playerStartInd={this.props.playerStartInd}
                                    playerEndInd={this.props.playerEndInd}
                                    handlePlayerMove={this.props.handlePlayerMove} />  
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <RemoveCardsFromTableButton 
                                    aiField={this.props.aiField}
                                    playerField={this.props.playerField}
                                    onClickHandler={this.props.handleRemoveCardsFromTableClick} />
                                <AiTakeButton 
                                    mode={this.props.mode}
                                    GameMode={this.props.GameMode}
                                    onClickHandler={this.props.handleAiTakeClick} />
                                <PlayerTakeButton 
                                    mode={this.props.mode}
                                    GameMode={this.props.GameMode}
                                    onClickHandler={this.props.handlePlayerTakeClick}
                                    playerCards={this.props.playerCards} />
                            </div> 
                        </div>
                    </div>                                 
                </div>
            </div>
        );
    }
}

export default GameScreen;

GameScreen.propTypes = {
    handleBeginGameClick: PropTypes.func,
    mode:PropTypes.array,
    GameMode: PropTypes.object,
    computerCards: PropTypes.array,
    playerCards: PropTypes.array,
    fullDeck: PropTypes.array,
    firstStart: PropTypes.bool,
    aiField: PropTypes.array,
    playerField: PropTypes.array,
    onPrevClick: PropTypes.func,
    onNextClick: PropTypes.func,
    playerStartInd: PropTypes.number,
    playerEndInd: PropTypes.number,
    handlePlayerMove: PropTypes.func,
    handleRemoveCardsFromTableClick: PropTypes.func,
    handleAiTakeClick: PropTypes.func,
    handlePlayerTakeClick: PropTypes.func
};