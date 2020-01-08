var initX = 0;
var initY = 0;
var Counter = 5;
var Avatar = $("body");
$("p").html(`${Counter}`)
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
  if(Counter!=0){
        Counter= Counter -1 ; 
        $("p").html(Counter);
        console.log(Counter);
  }
}
);