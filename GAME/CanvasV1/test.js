var context, controller, character, loop ,img ;
var initX = 0;
var initY = 0;
var EnemyPositionX=1200, EnemyPositionY=810;
var lastEnemyPositionX=-1,lastEnemyPositionY=-1;
var EnemyFlag = 1 , EnemyIndex=0;
var EnemiesArray=["enemy.gif","Hammer_Bro_death.gif","Mega_Goomba.gif"];


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
var Enemy= function(  EnemyWidth , EnemyHeight ){

  this.EnemyWidth = EnemyWidth;
  this.EnemyHeight = EnemyHeight;
  this.img = new Image();
//this.EnemySound = EnemySound;

}

Enemy.prototype.SetEnemyOnScreen= function( EnemyPicturePath ){

  this.img.src = EnemyPicturePath;
  context.clearRect(lastEnemyPositionX,lastEnemyPositionY,CurrentEnemy.EnemyWidth,CurrentEnemy.EnemyHeight);
  context.drawImage( this.img , EnemyPositionX , EnemyPositionY ,this.EnemyWidth,this.EnemyHeight);

}


UpdateEnemyPosition=function(){

  if(EnemyPositionX-88  == character.x){
    context.clearRect(EnemyPositionX,EnemyPositionY,CurrentEnemy.EnemyWidth,CurrentEnemy.EnemyHeight);
    EnemyFlag=1;
    return;
  }
  lastEnemyPositionX=EnemyPositionX;
  lastEnemyPositionY=EnemyPositionY;
  EnemyPositionX --;
 // EnemyPositionY = character.y;

  //console.log( EnemyPositionX , " " , EnemyPositionY);

}
var CurrentEnemy =new Enemy(80,80);

loop = function() {
  context.clearRect(character.x, character.y ,character.width,character.height);
  
  if (controller.up && character.jumping == false) {
    
    character.y_velocity -= 50;
    character.jumping = true;

  }

  if (controller.left) {
        initX += 10;
        document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";
        character.x_velocity -= 0.5;

  }

  if (controller.right) {

    character.x_velocity += 0.5;
    initX -= 10;
    document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";  

  }

  character.y_velocity +=0.5 ;// gravity
  character.x += character.x_velocity; // noooooooooooooooooooooooooooooooooooooour
  //console.log(character.x)
  character.y += character.y_velocity; // nouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuur
  //console.log(character.y)
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

    character.x = 0;

  } else if (character.x > 300) {// if character goes past right boundary

    character.x = 300;

  }
  
 
  //context.fillRect(0, 0, 1800, 1600);// x, y, width, height
  
  
  context.drawImage(img, character.x, character.y ,character.width,character.height);
 
 
  UpdateEnemyPosition();
  if(EnemyFlag == 0){
    CurrentEnemy.SetEnemyOnScreen(EnemiesArray[EnemyIndex]);
  }
  else{
    EnemyFlag = 0;
    EnemyIndex=Math.floor((Math.random() * 2) + 1);
    EnemyPositionX= 1200 + character.x, EnemyPositionY=810;  //dii msh shaghala leh??
    CurrentEnemy.SetEnemyOnScreen(EnemiesArray[EnemyIndex]);
    console.log(EnemyIndex);
    

  }
  
  
  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);

