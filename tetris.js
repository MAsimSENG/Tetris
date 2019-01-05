cvs = document.getElementById("tetris");
ctx = cvs.getContext("2d");
const row = 20;
const col = 10;
const vacant = "white";
const SQ = 20;
const I = [
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
	],
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
	]
];

const J = [
	[
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[0, 1, 0],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	]
];

const L = [
	[
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[1, 0, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 0]
	]
];

const O = [
	[
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0],
	]
];

const S = [
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0]
	],
	[
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const T = [
	[
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const Z = [
	[
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 0, 1],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[1, 0, 0]
	]
];



const PIECES = [
  [Z,"red"],
  [ S, "green"],
  [ T, "yellow"],
  [ O, "blue"],
  [ L, "purple"],
  [ I, "cyan"],
  [ J, "orange"]

];

function randomPiece() {
 let r = Math.floor(Math.random() * PIECES.length);
	return new piece (PIECES[r][0], PIECES[r][1]);
}

function piece (tetromino, color) {
 this.tetromino = tetromino;
 this.color= color;
 this.tetrominoN=0;
 this.activeTetromino = this.tetromino[this.tetrominoN];
 this.x=0;
 this.y=0;
}

let p = randomPiece();
//draw or undraw a piece to the board
 piece.prototype.fill = function (color ) {
	 for(r=0; r<this.activeTetromino.length; r++) {
		 for(c=0; c<this.activeTetromino.length; c++){
			 if(this.activeTetromino[r][c]){
				 drawSquare(this.x+c, this.y+r, color);
			 }
		 }
	 }
 }

piece.prototype.draw = function () {
 this.fill(this.color);
}
piece.prototype.undraw = function () {
 this.fill(vacant);
}

piece.prototype.collison = function (x,y,piece) {
 for( r=0; r<piece.length; r++) {
	 for(c=0; c< piece.length; c++) {
		 if(!piece[r][c]) {
			 continue;
		 }
		 let newX= this.x + c + x;
		 let newY = this.y +r +y;
		 if(newX <0 || newX >= col || newY>=row ){

			 return true;
		 }
		 if ( newY < 0){
			 continue;
		 }
		 if( board[newY][newX]!= vacant){
			 return true;
		 }
	 }
 }
}
piece.prototype.lock = function () {
	for ( r =0 ; r< this.activeTetromino.length; r++) {
		for ( c =0 ; c< this.activeTetromino.length; c++) {
			if(!this.activeTetromino[c][r]) {
				continue;
			}
			if(this.y + r < 0 ){
				alert("game over");
				gameover = true;
				break;
			}
			board[this.y+r][this.x+c] = this.color;
		}
	}

}


// drop piece every second
let dropStart = Date.now();
let gameover = false;
function drop () {
 let now = Date.now();
 let delta = now - dropStart;
 if(delta > 1000) {
 p.moveDown();
 dropStart = Date.now();
 }
 if (!gameover) {
 requestAnimationFrame(drop);
}
}

drop();
