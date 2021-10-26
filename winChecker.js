
export function winProofer_1(activSymbol, myField) {
    for (var i = 0; i < 6; i++) // y
    {
        for (var j = 0; j < 7; j++) // x
        {
            // Aktuele Symbol

            // Vertikale Prüfung
            if ((j + 3 < 7) && ((myField[j][i] == activSymbol) && (myField[j + 1][i] == activSymbol) && (myField[j + 2][i] == activSymbol) && (myField[j + 3][i] == activSymbol))) {
               // endGame();
                alert("Vertikale WIN");
            }
            //Horizontale Prüfung
            if ((i + 3 < 6) && ((myField[j][i] == activSymbol) && (myField[j][i + 1] == activSymbol) && (myField[j][i + 2] == activSymbol) && (myField[j][i + 3] == activSymbol))) {
              //  endGame();
                alert("Horizontale WIN");
            }
            // Diagonale Prüfung 1
            if ((i + 3 < 6) && (j + 3 < 7) && myField[j][i] == activSymbol && myField[j + 1][i + 1] == activSymbol && myField[j + 2][i + 2] == activSymbol && myField[j + 3][i + 3] == activSymbol) {
             //   endGame();
                alert("WIN");
            }
            // Diagonale Prüfung 2
            if ((j + 3 < 7) && (i - 3 > 0) && myField[j][i] == activSymbol && myField[j + 1][i - 1] == activSymbol && myField[j + 2][i - 2] == activSymbol && myField[j + 3][i - 3] == activSymbol) {
              //  endGame();
                alert("WIN");
            }
        }
    }
}