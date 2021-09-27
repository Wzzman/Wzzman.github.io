// wssp, hier sind alle meine Funktionen gesammelt.


let Player1 = {     // объект
  name: "noname",  // под ключом "name" хранится значение "John"
  key: 1        // под ключом "age" хранится значение 30
};

let Player2 = {     // объект
  name: "noname",  // под ключом "name" хранится значение "John"
  key: 2        // под ключом "age" хранится значение 30
};

function alertKomm() {
  alert("Willkommen bei meinem 4Gewinnt-Spiel");
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
}

function ChangeNames(NM1, NM2) // ändert Playersnamen
{
	document.getElementById("nm1").innerHTML = "Player 1 name: " + NM1;
	document.getElementById("nm2").innerHTML = "Player 1 name: " + NM2;
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
}

// document.getElementById("demo").innerHTML = "Hello JavaScript"; // geht

// childNods

