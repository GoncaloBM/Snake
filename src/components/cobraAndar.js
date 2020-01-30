export const cobraAndar = (board, direction) => {
    const newBoard = copyNewBoard(board);

    switch (direction) {

        case "left":
            for (let i = 0; i < board.length; i++) {
                const newLine = [...board[i]]
                newBoard.push(newLine)
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i][j] === 1) {
                        newBoard[i][j] = 0;
                        newBoard[i][j - 1] = 1
                    }
                }
            }
            return newBoard;

        case "right":
            for (let i = 0; i < board.length; i++) {
                const newLine = [...board[i]]
                newBoard.push(newLine)
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i][j] === 1) {
                        newBoard[i][j] = 0;
                        newBoard[i][j + 1] = 1
                    }
                }
            }
            return newBoard;

        case "up":
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i][j] === 1) {
                        console.log(newBoard);

                        newBoard[i][j] = 0;
                        newBoard[i - 1][j] = 1;
                    }
                }
            }
            return newBoard;

        case "down":
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[i].length; j++) {
                    if (board[i][j] === 1) {
                        newBoard[i][j] = 0;
                        newBoard[i + 1][j] = 1;
                    }
                }
            };
            return newBoard;
    }
}

const copyNewBoard = (board) => {
    let newBoard = [];
    for (let i = 0; i < board.length; i++) {
        const newLine = [...board[i]]
        newBoard.push(newLine)

    };
    return newBoard;
}