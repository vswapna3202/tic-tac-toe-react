import {useState, useEffect} from 'react';
import { calculateWinner } from './CalculateWinner';

export const useGameLogic = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const[isXNext, setIsXNext] = useState(true); 
    const[winner, setWinner] = useState(null);
    const[isDraw, setIsDraw] = useState(false);

    const handleClick = (index: number) => {
        // Return nothing if there is a winner or square already has been clicked  
        if(squares[index] || winner){            
            return;
        }
    
        // Make a copy of squares and toggle between X and O for
        // Next move and set squares as newSquares and isXNext as the not of current isXNext to toggle between X and O using true false
        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    // If reset button is clicked fill all squares as null and reset nextplayer to have value X
    const handleReset = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    }

    // Invoke calculateWinner method by passing squares which has the the selections by both players. 
    // SetWinner based on calculateWinner return value.
    // If all squares are filled up and updatedWinner is false it means a draw and no winner so setIsDraw as true
    useEffect(() => {
        const updatedWinner = calculateWinner(squares);            
        setWinner(updatedWinner);   
        if (!updatedWinner && squares.every((square) => square !== null)) {
            setIsDraw(true);
          } else {
            setIsDraw(false);
          }             
    },[squares]);

    // If there is a winner or isDraw setIsXNext as true
    useEffect(() => {
        if (winner || isDraw){                
            setIsXNext(true);              
        }
    },[winner, isDraw]);

    // Return all states 
    return { squares, isXNext, winner, isDraw, handleClick, handleReset };
}
