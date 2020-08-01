var world = [
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
	[2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2],
	[2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
	[2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

function displayWorld() {
	var output = "";
	for (let i = 0; i < world.length; i++) {
		output += "<div class='row'>";
		for (let j = 0; j < world[i].length; j++) {
			if (world[i][j] == 2) output += "<div class='brick'></div>";
			else if (world[i][j] == 1) output += "<div class='coin'></div>";
			if (world[i][j] == 0) output += "<div class='empty'></div>";
		}
		output += "\n</div >";
	}
	document.getElementById("world").innerHTML = output;
}

var score = 0;

var pacman = {
	x: 0,
	y: 0,
};

function displayPacman() {
	document.getElementById("pacman").style.left = pacman.x * 20 + "px";
	document.getElementById("pacman").style.top = pacman.y * 20 + "px";
}
function displayScore() {
	document.getElementById("score").innerHTML = score;
}

document.onkeydown = function moveUp(e) {
	if (e.keyCode == 38 && world[pacman.y][pacman.x] != 2) {
		pacman.y--;
	} else if (e.keyCode == 40 && world[pacman.y][pacman.x] != 2) {
		pacman.y++;
	}
	if (e.keyCode == 37 && world[pacman.y][pacman.x] != 2) {
		pacman.x--;
	} else if (e.keyCode == 39 && world[pacman.y][pacman.x] != 2) {
		pacman.x++;
	}

	if (world[pacman.y][pacman.x] == 1) {
		world[pacman.y][pacman.x] = 0;
		score += 10;
		displayWorld();
		displayScore();
	}

	displayPacman();
};

displayPacman();
displayWorld();
displayScore();
