let Player1 = {     
  name: "noname",   
  key: 2        // SPÄTER ÄNDERN ZURUCK. warum so?
};

let Player2 = {     
  name: "noname",  
  key: 1   
};

let gameOn = false;
let aPlayer = "";
let aKey = 0;

// var div = document.querySelector(".kvadrat");

document.getElementsByClassName('playground')[0].style.display = "none";

// Create one dimensional array
    var gfg = new Array(7);
	
// Loop to create 2D array using 1D array
for (var i = 0; i < gfg.length; i++) {
    gfg[i] = new Array(6);
}
  
// var h = 0;
  
// Loop to initialize 2D array elements.
function feldInitialization(){
	for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 7; j++) {
        gfg[i][j] = 0;
    }
}
}
feldInitialization();
  
// Loop to display the elements of 2D array. 
function drawTable(){
//	var x = document.getElementsByClassName(".kvadrat");
	document.querySelector(".kvadrat").style.color = "white";
	document.querySelector(".kvadrat").innerHTML = "";
for (var i = 0; i < 6; i++) {
	document.querySelector(".kvadrat").innerHTML +="<br>";
    for (var j = 0; j < 7; j++)    {
        document.querySelector(".kvadrat").innerHTML += " | " + gfg[i][j] + " | ";
		document.querySelector(".kvadrat").innerHTML +=" ";
    }
    document.querySelector(".kvadrat").innerHTML +="<br>";
} 

}
// drawTable(aKey);

function alertKomm(btnNR) {
 // alert("du hast diese Column gewählt: " + btnNR);
 if(gameOn){
	  ActivePlayer();
	  for (var i = 0; i < 6; i++) {
         if(gfg[5 - i][btnNR] == 0){
			gfg[5 - i][btnNR] = aKey;
			drawTable();
			break;
		}
	  else if(gfg[0][btnNR] != 0){
		  alert("The column is full, please choose another column");
		  ActivePlayer();
		  break;
	  }
      }
 } else {
	 SaveNames();
   }
 
}

function SaveNames() // save the names
{
	if(document.getElementById("name1").value != "" && document.getElementById("name1").value != "(change here)"){
		Player1.name = document.getElementById("name1").value;
	} else {
		Player1.name = prompt("Please enter your name", "Harry Potter");
	}
	
	if(document.getElementById("name2").value != "" && document.getElementById("name2").value != "(change here)"){
		Player2.name = document.getElementById("name2").value;
	}  else {
		Player2.name = prompt("Please enter your name", "Albus Dambldor");
	}
	
    document.getElementsByClassName('playground')[0].style.display = "initial";
    
	gameOn = true;
	
	ChangeNames(Player1.name, Player2.name);
	MenuOffner();
	ActivePlayer();
	drawTable();
}

function ChangeNames(NM1, NM2) // ändert Playersnamen
{
	document.getElementById("nm1").innerHTML = "Player 1: " + NM1;
	document.getElementById("nm2").innerHTML = "Player 2: " + NM2;
}

function ActivePlayer() // ändert Playersnamen
{
	if(aPlayer == Player2.name){
		aPlayer = Player1.name;
		aKey = Player1.key;
		}
	else if(aPlayer == Player1.name){
		aPlayer = Player2.name; 
		aKey = Player2.key;
		}
	else {
		aPlayer = Player1.name; 
		aKey = Player2.key;
		}
	document.getElementById("ap").innerHTML = "Your turn, " + aPlayer;
	
}

function MenuOffner() // schaltet Namesbereich aus
{
	document.getElementsByClassName('pn')[0].style.display = "none";
}

function RefreshAll() // schaltet Namesbereich aus
{
	document.getElementsByClassName('pn')[0].style.display = "";
	document.getElementById("name1").value = "";
	document.getElementById("name2").value = "";
	document.getElementsByClassName('playground')[0].style.display = "none";
	feldInitialization();
	aPlayer = "";
}

// document.getElementById("demo").innerHTML = "Hello JavaScript"; // geht

// childNods


//  document.addEventListener("click", function(){
//  document.getElementById("demo").innerHTML = "Hello World!";
//  });

