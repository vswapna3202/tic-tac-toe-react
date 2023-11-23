    import React from 'react';
    import '../styles/board.css';
    import { useGameLogic } from '../helper/GameLogic';

    const Board = () => {
        const {squares, isXNext, winner, isDraw, handleClick, handleReset} = 
                useGameLogic();
        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        }else if (isDraw){
            status = `Tie`;
        }else{    
            status = `Next player: ${isXNext ? 'X' : 'O'}`;
        }

        const renderSquare = (index: number) => {
            return (    
                <div className="square" onClick={() => handleClick(index)}>
                    {squares[index]}
                </div>
            );
        };       
        
        return (
            <>
                <div className="status">{status}</div><br/>
                <div className = "board">
                    <div>
                        {renderSquare(0)}
                        {renderSquare(3)}
                        {renderSquare(6)}
                    </div>

                    <div>
                        {renderSquare(1)}
                        {renderSquare(4)}
                        {renderSquare(7)}
                    </div>

                    <div>
                        {renderSquare(2)}
                        {renderSquare(5)}
                        {renderSquare(8)}
                    </div>    
                </div>
                <div>
                    <button className="reset" onClick={handleReset} >
                        Reset
                    </button>
                </div>
            </>
        );
    };

    export default Board;