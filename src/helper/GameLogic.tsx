import {useState, useEffect} from 'react';
import { calculateWinner } from './CalculateWinner';

export const useGameLogic = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const[isXNext, setIsXNext] = useState(true); 
    const[winner, setWinner] = useState(null);
    const[isDraw, setIsDraw] = useState(false);

    const handleClick = (index: number) => {  
        if(squares[index] || winner){            
            return;
        }
    
        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const handleReset = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    }

    useEffect(() => {
        const updatedWinner = calculateWinner(squares);            
        setWinner(updatedWinner);   
        if (!updatedWinner && squares.every((square) => square !== null)) {
            setIsDraw(true);
          } else {
            setIsDraw(false);
          }             
    },[squares]);

    useEffect(() => {
        if (winner || isDraw){                
            setIsXNext(true);              
        }
    },[winner, isDraw]);
    
    return { squares, isXNext, winner, isDraw, handleClick, handleReset };
}
