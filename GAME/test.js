var context, controller, character, loop ,img ,fire ;

var initX = 0;
var initY = 0;

var FX=90;
var FY=50;

//var obx =500;
//var oby =600 ;




context = document.querySelector("canvas").getContext("2d");


context.canvas.height = 950; // 7dod el shasha el soda el marsoma fo2 el asl
context.canvas.width = 1800;

img = document.getElementById("beka");
img.style.visibility = "hidden";

//ob=document.getElementById("OB");
//ob.style.visibility="hidden"

fire=document.getElementById("fire");
fire.style.visibility="hidden"

character = {

  
  height:100,
  jumping:true,
  width:100,
  x:0, // 3ayzo yenzl fen 
  x_velocity:0,
  y:0,
  y_velocity:0



};


attack = {

}


controller = {

  left:false,
  right:false,
  up:false,
  nar :false,

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

      case 13:
        controller.nar=key_state;
      break;

    }

  }

};

loop = function() {
  context.clearRect(character.x, character.y ,character.width,character.height);
  
  


 // context.clearRect(obx+300,oby+20,150,30);
 // context.clearRect(obx+700,oby+10,150,30);
  

  if (controller.up && character.jumping == false) {
    
    character.y_velocity -= 50;
    character.jumping = true;
    

  }

  if (controller.left) {
    

       character.x_velocity -= 0.5;

  }

  if (controller.right) {
   
    character.x_velocity += 0.5;
    initX -= 10;
    //obx -=10;
    document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";  

  }

  if(controller.nar)
  {
   
    /*for(FX=90 ; character.x+FX <1500 ; FX=FX+50)
    {
      context.drawImage(fire ,character.x+FX, character.y+FY,30,30)
      context.beginPath();
      //context.clearRect(character.x -FX, character.y-FY,30,30)
     
    }*/

    context.drawImage(fire ,character.x+FX, character.y+FY,30,30)
    FX+=31;
    console.log(FX)
    if(FX>900)
    {
      

      for(FX=90 ; character.x+FX <950 ; FX=FX+31)
      {
       // context.drawImage(fire ,character.x+FX, character.y+FY,30,30)
        context.beginPath();
        context.clearRect(character.x +FX, character.y+FY,30,30)
       
      }

      FX=90
    }
    



  }
  


 
  character.y_velocity +=0.5 ;// gravity
  character.x += character.x_velocity; // noooooooooooooooooooooooooooooooooooooour
  character.y += character.y_velocity; // nouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuur
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
  
  context.drawImage(img, character.x, character.y ,character.width,character.height);
  context.beginPath();



  

  //context.drawImage(ob,obx,oby,150,30);
  //context.drawImage(ob,obx+300,oby+20,150,30);
  //context.drawImage(ob,obx+700,oby+10,150,30);
  //context.beginPath();
  
  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);