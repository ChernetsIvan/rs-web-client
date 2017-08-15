import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StartScreen extends Component {    
    render() {
        let dash = <span>&mdash;</span>;
        return (
            <div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-auto">                        
                            <h1 className="display-2">Карточная игра</h1>                                                
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-auto">
                            <h1 className="display-3">"Простой дурак"</h1>
                        </div>
                    </div> 
                    <div className="row justify-content-center mt-5">                    
                        <div className="col-auto">
                            <span className="mr-4"><b>Первым ходит:</b></span>                        
                            <span className="mr-2">                            
                                <input type="radio" 
                                    name="PlayerFirst"
                                    className=""
                                    checked={this.props.isFirstMovePlayer}
                                    onChange={this.props.onChangeRadio}/>
                                <span className="ml-2">Игрок</span>
                            </span>
                            <span className="mr-2">
                                <input type="radio" 
                                    name="AiFirst"
                                    checked={!this.props.isFirstMovePlayer}
                                    onChange={this.props.onChangeRadio}/>
                                <span className="ml-2">Компьютер</span>
                            </span>                        
                        </div>                    
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-auto">
                            <button
                                className="btn btn-secondary mr-3" 
                                onClick={this.props.onClickStartGame}>
                                
                                {dash} Поехали!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartScreen;

StartScreen.propTypes = {
    isFirstMovePlayer: PropTypes.bool,
    onClickStartGame: PropTypes.func,
    onChangeRadio: PropTypes.func
};