var array_character= ["../images/beka.gif","../images/Lam.gif", "../images/sonic.gif","../images/Circle.gif"];

function playerCharacters(height,jumping,width,x,x_velocity,y,y_velocity){
    this.height=height;
    this.jumping=jumping;
    this.width=width;
    this.x=x; // 3ayzo yenzl fen 
    this.x_velocity=x_velocity;
    this.y=y;
    this.y_velocity=y_velocity;
  };
playerCharacters.prototype.setCharacterImage=function(i){
  document.getElementById("myImg").src =array_character[i];
}
var controller = {
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
  
