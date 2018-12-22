// var toggle = "Place Image";
var timer = null;
var cellId = 9;
var width = 3;
var angle = 0;


function placeImageOrRotate(ident)
{
	var debounce = function() {
		placeImage(ident);
		timer = null;
	}
	if(timer) {
		rotateImage(ident);
		clearTimeout(timer);
		timer = null;
	} else {
		timer = setTimeout(debounce, 250);
	}
}

function placeImage(ident)
{
var cell = document.getElementById(ident); 
cell.className = 'noPadding';
	if (cell.innerHTML == ''){
		cell.innerHTML = "<img src='images/2path90.png'>";
	} else if(cell.innerHTML == "<img src=\"images/2path90.png\">") {
		cell.innerHTML = "<img src='images/2path180.png'>"
	} else if(cell.innerHTML == "<img src=\"images/2path180.png\">"){
		cell.innerHTML = "<img src='images/3path.png'>"
	} else if(cell.innerHTML == "<img src=\"images/3path.png\">"){
		cell.innerHTML = "<img src='images/4path.png'>"
	} else{
		cell.innerHTML = "<img src='images/2path90.png'>"
}
}

// function toggleFunction()
// {
// 	if (toggle == "Place Image"){
// 		toggle = "Rotate Image"
// 	} else{
// 		toggle = "Place Image"
// 	}
// }

function rotateImage(ident)
{
	var cell = document.getElementById(ident).childNodes[0]; 
// cell.childNodes[0].classList.remove("rotate90 rotate180 rotate0 rotate270")

	if (cell.className == '' || cell.className == 'rotate0') {
		cell.className = 'rotate90';
	} else if (cell.className == 'rotate90') {
		cell.className = 'rotate180'
	} else if (cell.className == 'rotate180') {
		cell.className = 'rotate270'
	} else if (cell.className == 'rotate270') {
		cell.className = 'rotate0'
	}

	// cell.childNodes[0].classList.add("rotate"+angle);
	
}

function generateOnClickFunction(ident) {
	return function() {
		placeImageOrRotate(ident);
	};
}

function addRow() {
	var table = document.getElementById("table");
	var newRow = document.createElement("tr");
	table.appendChild(newRow);

	for(i = 0; i < width; i++) {
		var newCell = document.createElement("td");
		newRow.appendChild(newCell);
		cellId++;
		var ident = 'td' + cellId;
		newCell.setAttribute('id', ident);
		newCell.onclick = generateOnClickFunction(ident); 
	} 
}

function addColumn() {
	var table = document.getElementById("table");
	var tableLength = table.rows.length;

	for(i = 0; i < tableLength; i++) {
		var row = table.rows[i];
		newCell = row.insertCell(-1);
		cellId++;
		var ident = 'td' + cellId;
		newCell.setAttribute('id', ident);
		newCell.onclick = generateOnClickFunction(ident);
	} 
	width++;
}