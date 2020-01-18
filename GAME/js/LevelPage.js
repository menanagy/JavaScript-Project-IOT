var level_Num=0;
var Next = 0;
var Previous = 0;
var Current = 0;
var ArrayButtons = document.getElementsByClassName("button");
$(window).on('keydown', scrolling)
function scrolling(e) {
    if (e.which == 40) {
        if (Next >= 3) {
            Next = 0
        }
        $(ArrayButtons).css('background-color', "rgba(6, 105, 67, 0.982)")
        $(ArrayButtons[Next]).css('background-color', "rgb(30, 223, 159)")
        Current=Next
        console.log(Current)
        console.log(Next);
        Previous = Next - 1;
        Next++;
    }
    else if (e.which == 38) {
        if (Previous <= -1) {
            Previous = 2
        }
        $(ArrayButtons).css('background-color', "rgba(6, 105, 67, 0.982)")
        $(ArrayButtons[Previous]).css('background-color', "rgb(30, 223, 159)")
        Current=Previous
        console.log(Current)
        console.log(Previous)
        Next = Previous + 1
        Previous--
    }
    else if (e.which == 13)
    {
        level_Num=(Current+2)*3;
        localStorage.setItem("localLevelNum",level_Num);
        window.location.href ="GameBackGround.html";
    }
}
document.querySelectorAll("button")[0].addEventListener('click',function(){
    level_Num=6;
    localStorage.setItem("localLevelNum",level_Num);
    window.location.href ="GameBackGround.html";
});
document.querySelectorAll("button")[1].addEventListener('click',function(){
    level_Num=9;
    localStorage.setItem("localLevelNum",level_Num);
    window.location.href ="GameBackGround.html";
});
document.querySelectorAll("button")[2].addEventListener('click',function(){
    level_Num=12;
    localStorage.setItem("localLevelNum",level_Num);
    window.location.href ="GameBackGround.html";
});
