    import React from 'react';
    import '../styles/board.css';
    import { useGameLogic } from '../helper/GameLogic';

    const Board = () => {
        // Get states of squares, isXNext, winner, isDraw, handleClick, handleReset from useGameLogic FC
        const {squares, isXNext, winner, isDraw, handleClick, handleReset} = 
                useGameLogic();
        let status;
        // If winner is true then display winner: X or O
        // If isDraw is true then display Tie
        // If neither of the above true display Next player: X or O
        if (winner) {
            status = `Winner: ${winner}`;
        }else if (isDraw){
            status = `Tie`;
        }else{    
            status = `Next player: ${isXNext ? 'X' : 'O'}`;
        }

        // Render the square
        const renderSquare = (index: number) => {
            return (    
                <div className="square" onClick={() => handleClick(index)}>
                    {squares[index]}
                </div>
            );
        };       
        
        // Render status and board
        // Status can be next player, winner or tie
        // Board will render all the 9 squares
        // Render the reset button as well below the squares
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