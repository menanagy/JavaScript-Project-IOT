var array_character= ["Images/beka.gif","Images/lamis.gif", "Images/sonic.gif","Images/Circle.gif"];

function playerCharacters(height,jumping,width,x,x_velocity,y,y_velocity){
    this.height=height;
    this.jumping=jumping;
    this.width=width;
    this.x=x; // 3ayzo yenzl fen 
    this.x_velocity=x_velocity;
    this.y=y;
    this.y_velocity=y_velocity;
  };
  /*playerCharacters.prototype.setHeight=function(h){
    return this.height=h;
    }
  playerCharacters.prototype.setJumping=function(h){
    return this.jumping=h;
  }
  playerCharacters.prototype.setWidth=function(h){
    return this.width=h;
  }
  playerCharacters.prototype.setX=function(h){
    return this.x=h;
  }
  playerCharacters.prototype.setHeight=function(h){
    return this.x_velocity=h;
  }
  playerCharacters.prototype.setY=function(h){
    return this.y=h;
  }
  playerCharacters.prototype.setY_Velocity=function(h){
    return this.y_velocity=h;
  }
  playerCharacters.prototype.setHeight=function(h){
    return this.height=h;
  }
playerCharacters.prototype.getJumping=function(h){
  return this.jumping;
}
playerCharacters.prototype.getWidth=function(h){
  return this.width;
}
playerCharacters.prototype.getX=function(h){
  return this.x;
}
playerCharacters.prototype.getHeight=function(h){
  return this.x_velocity;
}
playerCharacters.prototype.getY=function(h){
  return this.y;
}
playerCharacters.prototype.getY_Velocity=function(h){
  return this.y_velocity;
}*/
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
  
