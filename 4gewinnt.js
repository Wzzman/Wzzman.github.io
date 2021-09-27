// wssp, hier sind alle meine Funktionen gesammelt.


let Player1 = {     
  name: "noname",   
  key: 1        
};

let Player2 = {     
  name: "noname",  
  key: 2        
};

let aPlayer = "";

function alertKomm(btnNR) {
  alert("du hast diese Column gewählt: " + btnNR);
  ActivePlayer();
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
  
	ChangeNames(Player1.name, Player2.name);
	MenuOffner();
	
	ActivePlayer();
}

function ChangeNames(NM1, NM2) // ändert Playersnamen
{
	document.getElementById("nm1").innerHTML = "Player 1: " + NM1;
	document.getElementById("nm2").innerHTML = "Player 2: " + NM2;
	
}

function ActivePlayer() // ändert Playersnamen
{
	if(aPlayer == Player2.name){aPlayer = Player1.name}
	else if(aPlayer == Player1.name){aPlayer = Player2.name}
	else {aPlayer = Player1.name}
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
	
	aPlayer = "";
}

// document.getElementById("demo").innerHTML = "Hello JavaScript"; // geht

// childNods

