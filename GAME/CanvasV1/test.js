var context, controller, character, loop ,img ;

context = document.querySelector("canvas").getContext("2d");


context.canvas.height = 950; // 7dod el shasha el soda el marsoma fo2 el asl
context.canvas.width = 1800;

img = document.getElementById("beka");
img.style.visibility = "hidden";

character = {

  
  height:100,
  jumping:true,
  width:100,
  x:0, // 3ayzo yenzl fen 
  x_velocity:0,
  y:0,
  y_velocity:0

};

controller = {

  left:false,
  right:false,
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 37:// left key
        controller.left = key_state;
      break;
      case 32:// up key
        controller.up = key_state;
      break;
      case 39:// right key
        controller.right = key_state;
      break;

    }

  }

};

loop = function() {
  context.clearRect(character.x, character.y ,character.width,character.height);

  if (controller.up && character.jumping == false) {
    
    character.y_velocity -= 50;
    character.jumping = true;

  }

  if (controller.left) {

    character.x_velocity -= 0.5;

  }

  if (controller.right) {

    character.x_velocity += 0.5;

  }

  character.y_velocity +=0.5 ;// gravity
  character.x += character.x_velocity;
  character.y += character.y_velocity;
  character.x_velocity *= 0.9;// friction
  character.y_velocity *= 0.9;// friction

  // if character is falling below floor line
  if (character.y > 800) {

    character.jumping = false;
    character.y = 800;
    character.y_velocity = 0;

  }

  // if character is going off the left of the screen // hytshal 3alshan a7na 3andna msh 3ayzeno yalf l a5r el shasha
  if (character.x < 0) {

    character.x = 1800;

  } else if (character.x > 1800) {// if character goes past right boundary

    character.x = 0;

  }
  
 
  //context.fillRect(0, 0, 1800, 1600);// x, y, width, height
  
  
  
  context.drawImage(img, character.x, character.y ,character.width,character.height);
  context.beginPath();
  
  
  
 
 context.beginPath();

 

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);