
function drawSquare(x,y,color) {
  ctx.fillStyle = color;
  ctx.fillRect(x*SQ, y*SQ, SQ, SQ);
  ctx.strokeStyle = "BLACK";
  ctx.strokeRect (x*SQ, y*SQ, SQ, SQ);
}

// create the board
let board = [];
for(r=0; r< row ; r++){
  board[r]=[];
  for(c=0; c<col; c++) {
    board[r][c]= vacant;
  }
}

function drawBoard () {
  for( r=0; r<row; r++) {
  for(c =0; c<col; c++) {
    drawSquare(c,r,board[r][c]);
  }
}
}

drawBoard();
