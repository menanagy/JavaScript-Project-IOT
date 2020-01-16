var context, controller, character, loop ,img , ob ;
var initX = 0;
var initY = 0;
var obx =500;
var oby =700 ;
var obstacleWidth = 150;
var obstacleHeight = 55;
var newpositiony;




context = document.querySelector("canvas").getContext("2d");


context.canvas.height = 950; // 7dod el shasha el soda el marsoma fo2 el asl
context.canvas.width = 1800;

img = document.getElementById("beka");
img.style.visibility = "hidden";
var health = document.getElementById("health");
health.style.visibility= "hidden";

ob=document.getElementById("OB");
ob.style.visibility="hidden"

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
function checkObstacleCollision(){
  var obLen = 150;
  for(var x=0;x<obLen;x++){
    var obX = obx;
    var obY = oby;
    //console.log("hellooo");
    console.log(character.x);
    if((character.x + 60 > obX && character.x + 50 < obX + obstacleWidth || character.x > obX && character.x < obX + obstacleWidth) && character.y + 27 > obY - 30 && character.y + 27 < obY){
      console.log("pika pika!!");
     newpositiony = oby - obstacleHeight;
     return true;
    }/*else if((character.x + character.width > obX && character.x + character.width < obX + obstacleWidth || character.x > obX && character.x < obX + obstacleWidth) && character.y > obY + obstacleHeight && character.y < obY + obstacleHeight + 10){
      dyn = 0;
    }else if(character.x + character.width > obX - 10 && character.x + character.width < obX && ((character.y + character.height > obY && character.y + character.height < obY + obstacleHeight) || (character.y > obY && character.y < obY + obstacleHeight))){
      dxp = 0;
    }else if(character.x  > obX + obstacleWidth && character.x < obX + obstacleWidth + 10 && ((character.y + character.height > obY && character.y + character.height < obY + obstacleHeight) || (character.y > obY && character.y < obY +  obstacleHeight))){
      dxn = 0;
    }*/

  }
  console.log("mana mab2olsh pika pika aho");
  return false;
}

loop = function() {
  context.clearRect(character.x, character.y ,character.width,character.height);
  var checking = checkObstacleCollision();
  context.clearRect(obx,oby,150,30);
  

  if (controller.up && character.jumping == false) {
    
    character.y_velocity -= 50;
    character.jumping = true;

  }

  if (controller.left) {
    
        initX += 10;
        obx +=10;
        document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";
        character.x_velocity -= 0.5;

  }

  if (controller.right) {
   
    character.x_velocity += 0.5;
    initX -= 10;
    obx -=10;
    document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";  

  }
  if(checking == true)
  {
    console.log("ana batzene2 hena wenty wala hena");
    console.log(newpositiony);
    character.y = newpositiony;
  }
  else{
    character.y += character.y_velocity;}
  character.y_velocity +=0.5 ;// gravity
  console.log("ana henaa w banot");
  character.x += character.x_velocity; // noooooooooooooooooooooooooooooooooooooour
  //console.log(character.x)
   // nouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuur
  //console.log(character.y)
  character.x_velocity *= 0.9;// friction
  character.y_velocity *= 0.9;// friction
  
  // if character is falling below floor line
  if (character.y > 800) {

    character.jumping = false;
    character.y = 800;
    character.y_velocity = 10;

  }

  // if character is going off the left of the screen // hytshal 3alshan a7na 3andna msh 3ayzeno yalf l a5r el shasha
  if (character.x < 0) {

    character.x = 0;

  } else if (character.x > 300) {// if character goes past right boundary

    character.x = 300;

  }
  
 
  //context.fillRect(0, 0, 1800, 1600);// x, y, width, height
  
  
  
  context.drawImage(img, character.x, character.y ,character.width,character.height);
  context.drawImage(health, 90, 0 ,30,30);
  context.beginPath();
  context.drawImage(ob,obx,oby,150,30);
  context.beginPath();
  
  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);