var initX = 0;
var initY = 0;
var health = 5;
var Avatar = $("body");
$("p").html(`${health}`)
$(document).keydown(function(e){
  //console.log(e.keyCode);
  switch(e.keyCode){
    case 37:
        initX += 10;
        document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px"; 
    break;
    case 39:
        initX -= 10;
        document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";
    break;
    case 32:
        $('.mario').animate({top:["-=100", "swing"],},100);
        $('.mario').animate({left:["+=45", "swing"],},100);
        $('.mario').animate({top:["+=100", "swing"],},100);
        /*
            initX -= 10;
            document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";
        */
    break;
  }
});
Avatar.on("click",function(){
  if(health!=0){
        health--; 
        $("p").html(health);
  }
}
);
var enemyPositionX, enemyPositionY;

function enemyMovement(){
  
    enemyPositionX --;
    $(".enemy-img").css({top:enemyPositionY  , left: enemyPositionX, position:'relative'})
    
    
    var rect2=document.getElementsByClassName("mario")[0].getBoundingClientRect() ;
 
    var rect1= document.getElementsByClassName("enemy-img")[0].getBoundingClientRect();
    console.log(rect1.x ,"  ,  " ,rect2.x);
    if(rect1.x - rect1.width == rect2.x){
      health--;
      $("p").html(health);
      clearInterval(MovingEnemyInterval);
    }
  
}

function enemyIncoming(playerLocationX,playerLocationY){
  //console.log("INCOMIIIIIIIIIIIIIIIIIIIIIIIING!!!!! ")
  $(".enemy-img").attr("src","enemy.gif")
  $(".enemy-img").width(50).height(50);
  enemyPositionX = 1200 + playerLocationX , enemyPositionY= 400 + playerLocationY ;
  $(".enemy-img").css({ top: enemyPositionY  , left: enemyPositionX, position:'relative'})
}


enemyIncoming(initX,initY);
var MovingEnemyInterval=setInterval(enemyMovement,10);
