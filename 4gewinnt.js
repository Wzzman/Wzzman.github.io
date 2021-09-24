// wssp, hier sind alle meine Funktionen gesammelt.

function alertKomm() {
  alert("Willkommen bei meinem 4Gewinnt-Spiel");
}

function SaveNames() // save the names
{
	let Player1 = document.getElementById("name1").value;
	let Player2 = document.getElementById("name2").value;
	ChangeNames(Player1, Player2);
	MenuOffner();
}

function ChangeNames(NM1, NM2) // ändert Playersnamen
{
	document.getElementById("nm1").innerHTML = NM1;
	document.getElementById("nm2").innerHTML = NM2;
}

function MenuOffner() // schaltet Namesbereich aus
{
	document.getElementsByClassName('PlayersMenu')[0].style.display = "none";
}

function RefreshAll() // schaltet Namesbereich aus
{
	document.getElementsByClassName('PlayersMenu')[0].style.display = "initial";
	document.getElementById("name1").value = "";
	document.getElementById("name2").value = "";
}

// document.getElementById("demo").innerHTML = "Hello JavaScript"; // geht
// paam yopte amigos

