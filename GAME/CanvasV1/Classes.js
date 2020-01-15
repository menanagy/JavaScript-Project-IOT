var array_character= ["Img_Character/beka.gif","Img_Character/lamis.gif", "Img_Character/sonic.gif","Img_Character/Circle.gif"];
function character_(height,jumping,width,x,x_velocity,y,y_velocity){
    this.height=height;
    this.jumping=jumping;
    this.width=width;
    this.x=x; // 3ayzo yenzl fen 
    this.x_velocity=x_velocity;
    this.y=y;
    this.y_velocity=y_velocity;
  };
  /*character_.prototype.setHeight=function(h){
    return this.height=h;
    }
  character_.prototype.setJumping=function(h){
    return this.jumping=h;
  }
  character_.prototype.setWidth=function(h){
    return this.width=h;
  }
  character_.prototype.setX=function(h){
    return this.x=h;
  }
  character_.prototype.setHeight=function(h){
    return this.x_velocity=h;
  }
  character_.prototype.setY=function(h){
    return this.y=h;
  }
  character_.prototype.setY_Velocity=function(h){
    return this.y_velocity=h;
  }
  character_.prototype.setHeight=function(h){
    return this.height=h;
  }
character_.prototype.getJumping=function(h){
  return this.jumping;
}
character_.prototype.getWidth=function(h){
  return this.width;
}
character_.prototype.getX=function(h){
  return this.x;
}
character_.prototype.getHeight=function(h){
  return this.x_velocity;
}
character_.prototype.getY=function(h){
  return this.y;
}
character_.prototype.getY_Velocity=function(h){
  return this.y_velocity;
}*/
character_.prototype.setCharacterImage=function(i){
  document.getElementById("myImg").src =array_character[i];
}
  
