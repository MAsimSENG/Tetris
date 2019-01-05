// control the pieces

document.addEventListener("keydown",CONTROL);
function CONTROL (event) {
  if(event.keyCode == 37) {
    p.moveLeft();
    dropStart = Date.now();
  }
  else if(event.keyCode == 38) {
    p.rotate();
    dropStart = Date.now();

  }
  else if(event.keyCode == 39) {
    p.moveRight();
    dropStart = Date.now();

  }
  else if(event.keyCode == 40) {
    p.moveDown();
    dropStart = Date.now();
  }
}
