

// move right function
piece.prototype.moveRight = function () {
  if( !this.collison(1,0,this.activeTetromino)){
    this.undraw()
    this.x++;
    this.draw();
  }
    else {
      p = randomPiece();
      this.lock();
    }
}
// move left function
piece.prototype.moveLeft = function () {
  if( !this.collison(-1,0,this.activeTetromino)){
    this.undraw()
    this.x--;
    this.draw();
  }
  else {
    p = randomPiece();
    this.lock();
  }
}
// rotate
piece.prototype.rotate = function () {
	let nextPattern = this.tetromino[(this.tetrominoN +1) % this.tetromino.length];
  if( !this.collison(0,0,nextPattern)){
    this.undraw()
    this.tetrominoN = (this.tetrominoN +1) % this.tetromino.length;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.draw();
}
else {
  p = randomPiece();
  this.lock();

  }
}

p.draw();

// movedown function
piece.prototype.moveDown = function () {
  if( !this.collison(0,1,this.activeTetromino)){
    this.undraw()
    this.y++;
    this.draw();
  }
  else {
		p = randomPiece();
		this.lock();



  }

}
