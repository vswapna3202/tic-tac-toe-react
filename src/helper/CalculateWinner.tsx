
// Calculate winner of tic-tac-toe game depending on values in squares array
export const calculateWinner = (squares : any) => {
    // Lines which are a success combination for the game
    const lines = [
        [0, 1 ,2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Loop through lines and for each line assign the value to a, b and c
    // Check in squares if squares of a , b and c are same if so we have winner
    // Do this for all the winning lines and return the winner
    for (const line of lines){
        const[a,b,c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){            
            return squares[a];
        }
    }
    // Return null if no winner is found
    return null;
}

