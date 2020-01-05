var initX = 0;
var initY = 0;
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
        $('img').animate({top:["-=100", "swing"],},100);
        //$('img').animate({left:["+=45", "swing"],},100);
        $('img').animate({top:["+=100", "swing"],},100);
        /*
            initX -= 10;
            document.getElementsByTagName('body')[0].style.backgroundPositionX = initX + "px";
        */
    break;
  }
});