export const fillBoardRandomly = size => {
    const board = [];

    for (let i = 0; i < size; i++) {
        const newRow = [];
        for (let j = 0; j < size; j++) {
            newRow.push("");
        }
        board.push(newRow);
    }
    return board;
};



export const jogo = () => {
    let board = fillBoardRandomly(getRandomNumber(30));

    for (let index = 1; index <= 10; index++) {
        board = getNextBoard(board);
        console.log(`Geração ${index}:`, board);
    }

    //   console.log("Está cá qualquer coisa");
};