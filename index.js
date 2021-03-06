import {
    FeldInitialization,
    P1,
    P2
} from "./model.js"; // A Field and Players

import {
    winProofer_1
} from "./winChecker.js"; // rules, "connect 4" now

var Player1 = P1; // object
var Player2 = P2; // object
var aPlayer = ""; // string
var aKey = 0; // int, active players Symbole
var gameOn = false; //make this game possible

var myField = FeldInitialization();

// import Players, Players Keys and show it in a body.
var saver = document.getElementById("saveBTN");
saver.addEventListener('click', initialization, false);

var a1 = document.getElementById("btn1");
a1.addEventListener('click', () => ColumnChoosed(0));
var a2 = document.getElementById("btn2");
a2.addEventListener('click', () => ColumnChoosed(1));
var a3 = document.getElementById("btn3");
a3.addEventListener('click', () => ColumnChoosed(2));
var a4 = document.getElementById("btn4");
a4.addEventListener('click', () => ColumnChoosed(3));
var a5 = document.getElementById("btn5");
a5.addEventListener('click', () => ColumnChoosed(4));
var a6 = document.getElementById("btn6");
a6.addEventListener('click', () => ColumnChoosed(5));
var a7 = document.getElementById("btn7");
a7.addEventListener('click', () => ColumnChoosed(6));

var s1 = document.getElementById("saveMe");
s1.addEventListener('click', buyMe, false);
var s2 = document.getElementById("loadMe");
s2.addEventListener('click', buyMe, false);


// game initialisation, 
function initialization() {
    // ClearAll();
    gameOn = true;
    aPlayer = Player1.name;
    aKey = Player1.key;
    document.getElementById("nm1").innerHTML = "Player 1: " + Player1.name;
    document.getElementById("nm2").innerHTML = "Player 2: " + Player2.name;
    document.getElementById("smb1").innerHTML = "Symbol: " + Player1.key;
    document.getElementById("smb2").innerHTML = "Symbol: " + Player2.key;
    document.getElementById("ap").innerHTML = "Your turn, " + aPlayer;
    drawTable();
}

// proof and change players 
function Player_Change() {
    if (aPlayer == Player1.name) {
        aPlayer = Player2.name;
        aKey = Player2.key;
        document.getElementById("ap").innerHTML = "Your turn, " + aPlayer;
    } else if (aPlayer == Player2.name) {
        aPlayer = Player1.name;
        aKey = Player1.key;
        document.getElementById("ap").innerHTML = "Your turn, " + aPlayer;
    } else {
        alert("At first you most import the players.");
    }
}

// proof and save a turn
function saveTurn(btnNR) {
    if (gameOn) {
        for (var i = 0; i < 6; i++) {
            if (myField[5 - i][btnNR] == 0) {
                myField[5 - i][btnNR] = aKey;
                winProofer_1(aKey, myField);
                // Player_Change();
                break;
            } else if (myField[0][btnNR] != 0) {
                alert("The column is full, please choose another column");
                //   ActivePlayer();
                break;
            }
        }
    }
}

// "Game Loop" if a column is choosed
function ColumnChoosed(BTNnr) {
    saveTurn(BTNnr);
    //change Pl
    Player_Change();
    //draw
    drawTable();

}

// Loop to display the elements of 2D array. 
function drawTable() {
    document.querySelector(".kvadrat").style.color = "white";
    document.querySelector(".kvadrat").innerHTML = "";
    for (var i = 0; i < 6; i++) {
        document.querySelector(".kvadrat").innerHTML += "<br>";
        for (var j = 0; j < 7; j++) {
            document.querySelector(".kvadrat").innerHTML += " | " + myField[i][j] + " | ";
            document.querySelector(".kvadrat").innerHTML += " ";
        }
        document.querySelector(".kvadrat").innerHTML += "<br>";
    }
}

// my extras
function buyMe() {
    alert("For this option please buy the full version");
}





















////////////////////////////    f R E E D O M E     Z O N E    ////////////////////////////

// function Column1Choosed() {
//     //prufung
//     saveTurn(0);
//     //change Pl
//     Player_Change();
//     //draw
//     drawTable();
// }

// function Column2Choosed() {
//     //prufung
//     saveTurn(1);
//     //change Pl
//     Player_Change();
//     //draw
//     drawTable();
// }

// function Column3Choosed() {
//     //prufung
//     saveTurn(2);
//     //change Pl
//     Player_Change();
//     //draw
//     drawTable();
// }

// function Column4Choosed() {
//     //prufung
//     saveTurn(3);
//     //change Pl
//     Player_Change();
//     //draw
//     drawTable();
// }

// function Column5Choosed() {
//     //prufung
//     saveTurn(4);
//     //change Pl
//     Player_Change();
//     //draw
//     drawTable();
// }

// function Column6Choosed() {
//     //prufung
//     saveTurn(5);
//     //change Pl
//     Player_Change();
//     //draw
//     drawTable();
// }

// function Column7Choosed() {
//     //prufung
//     saveTurn(6);
//     //change Pl
//     Player_Change();
//     //draw
//     drawTable();
// }

// function ColumnChoosed(BTNnr) {
//     saveTurn(BTNnr);
//     //change Pl
//     Player_Change();
//     //draw
//     drawTable();

// }

// var gameOn = true;
// 
// var aKey = 0; 

// function winProof(activSymbol) {
//     for (var i = 0; i < 6; i++) // y
//     {
//         for (var j = 0; j < 7; j++) // x
//         {
//             // Aktuele Symbol

//             // Vertikale Pr??fung
//             if ((j + 3 < 7) && ((myField[j][i] == activSymbol) && (myField[j + 1][i] == activSymbol) && (myField[j + 2][i] == activSymbol) && (myField[j + 3][i] == activSymbol))) {
//                 endGame();
//                 alert("Vertikale WIN");
//             }
//             //Horizontale Pr??fung
//             if ((i + 3 < 6) && ((myField[j][i] == activSymbol) && (myField[j][i + 1] == activSymbol) && (myField[j][i + 2] == activSymbol) && (myField[j][i + 3] == activSymbol))) {
//                 endGame();
//                 alert("Horizontale WIN");
//             }
//             // Diagonale Pr??fung 1
//             if ((i + 3 < 6) && (j + 3 < 7) && myField[j][i] == activSymbol && myField[j + 1][i + 1] == activSymbol && myField[j + 2][i + 2] == activSymbol && myField[j + 3][i + 3] == activSymbol) {
//                 endGame();
//                 alert("WIN");
//             }
//             // Diagonale Pr??fung 2
//             if ((j + 3 < 7) && (i - 3 > 0) && myField[j][i] == activSymbol && myField[j + 1][i - 1] == activSymbol && myField[j + 2][i - 2] == activSymbol && myField[j + 3][i - 3] == activSymbol) {
//                 endGame();
//                 alert("WIN");
//             }
//         }
//     }
// }


// function alertKomm(btnNR) {
//  // alert("du hast diese Column gew??hlt: " + btnNR);
//  if(gameOn){
// 	  ActivePlayer();
// 	  for (var i = 0; i < 6; i++) {
//          if(gfg[5 - i][btnNR] == 0){
// 			gfg[5 - i][btnNR] = aKey;

// 			drawTable();
// 			winProof(aKey)
// 			break;
// 		}
// 	  else if(gfg[0][btnNR] != 0){
// 		  alert("The column is full, please choose another column");
// 		//   ActivePlayer();
// 		  break;
// 	  }
//       }
//  } else {
// 	 SaveNames();
//    }
// }

// function SaveNames() // save the names
// {
// 		Player1.name = document.getElementById("name1").value;
// 		Player2.name = document.getElementById("name2").value;

//     document.getElementsByClassName('playground')[0].style.display = "initial";

// 	gameOn = true;

// 	ChangeNames(Player1.name, Player2.name);
// 	MenuOffner();
// 	ActivePlayer();
// 	drawTable();
// }

// function ChangeNames(NM1, NM2) // ??ndert Playersnamen
// {
// 	document.getElementById("nm1").innerHTML = "Player 1: " + NM1;
// 	document.getElementById("nm2").innerHTML = "Player 2: " + NM2;
// }

// function ActivePlayer() // ??ndert Playersnamen
// {
// 	if(aPlayer == Player2.name){
// 		aPlayer = Player1.name;
// 		aKey = Player1.key;
// 		}
// 	else if(aPlayer == Player1.name){
// 		aPlayer = Player2.name; 
// 		aKey = Player2.key;
// 		}
// 	else {
// 		aPlayer = Player1.name; 
// 		aKey = Player2.key;
// 		}
// 	document.getElementById("ap").innerHTML = "Your turn, " + aPlayer;

// }

// function MenuOffner() // schaltet Namesbereich aus
// {
// 	document.getElementsByClassName('pn')[0].style.display = "none";
// }

// function winProof(activSymbol){
// 	 for (var i = 0; i < 6; i++) // y
//             {
//                 for (var j = 0; j < 7; j++) // x
//                 {
//                     // Aktuele Symbol

//                     // Horizontale Pr??fung
//                     if ((j + 3 < 7) && ((gfg[j][i] == activSymbol) && (gfg[ j + 1][i] == activSymbol) && (gfg[ j + 2][i] == activSymbol) && (gfg[ j + 3][i] == activSymbol)))
//                     {
//                         endGame();
// 						alert("WIN");
//                     }
//                     //Vertikale Pr??fung
//                     if ((i + 3 < 6) && ((gfg[j][i] == activSymbol) && (gfg[j][i + 1] == activSymbol) && (gfg[j][i + 2] == activSymbol) && (gfg[j][i + 3] == activSymbol)))
//                     {
//                         endGame();
// 						alert("WIN");
//                     }
//                     // Diagonale Pr??fung 1
//                     if ((i + 3 < 6) && (j + 3 < 7) && gfg[j][i] == activSymbol && gfg[j + 1][i + 1] == activSymbol && gfg[j + 2][i + 2] == activSymbol && gfg[j + 3][i + 3] == activSymbol)
//                     {
// 						endGame();                    
// 						alert("WIN");
//                     }
//                     // Diagonale Pr??fung 2
//                     if ((j + 3 < 7) && (i - 3 > 0) && gfg[j][i] == activSymbol && gfg[j + 1][i - 1] == activSymbol && gfg[j + 2][i - 2] == activSymbol && gfg[j + 3][i - 3] == activSymbol)
//                     {
// 						endGame();
//                         alert("WIN");
//                     }
//                 }
//             }
// }

// function endGame(){
// 		document.getElementsByClassName('playground')[0].style.display = "none";
// 		document.getElementById('salute').style.display = "initial";
// }

// function RefreshAll() // schaltet Namesbereich aus
// {
// 	document.getElementsByClassName('pn')[0].style.display = "";
// 	document.getElementById("name1").value = "";
// 	document.getElementById("name2").value = "";
// 	document.getElementsByClassName('playground')[0].style.display = "none";
// 	document.getElementById('salute').style.display = "none";
// 	feldInitialization();
// 	aPlayer = "";
// }


// document.getElementById("demo").innerHTML = "Hello JavaScript"; // geht

// childNods


//  document.addEventListener("click", function(){
//  document.getElementById("demo").innerHTML = "Hello World!";
//  });