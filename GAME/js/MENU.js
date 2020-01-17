/*$(".button1").on("click", function () {
    window.location.href = "PageAboutUs.html"
})*/
var Next = 0;
var Previous = 0;
var Current = 0;
var ArrayButtons = document.getElementsByClassName("button");
var Pages = ["htmlpage/Start.html","htmlpage/HowTo.html","htmlpage/PageAboutUs.html"];
$(window).on('keydown', scrolling)
function scrolling(e) {
    if (e.which == 40) {
        if (Next >= 3) {
            Next = 0
        }
        $(ArrayButtons).css('background-color', "white")
        $(ArrayButtons[Next]).css('background-color', "pink")
        Current=Next
        console.log(Current)
        console.log(Next)
        Previous = Next - 1
        Next++
    }
    else if (e.which == 38) {
        if (Previous <= -1) {
            Previous = 2
        }
        $(ArrayButtons).css('background-color', "white")
        $(ArrayButtons[Previous]).css('background-color', "pink")
        Current=Previous
        console.log(Current)
        console.log(Previous)
        Next = Previous + 1
        Previous--
    }
    else if (e.which == 13)
    {
        window.location.href = Pages[Current]
    }
}
document.querySelectorAll("button")[0].addEventListener('click',function(){
    $(ArrayButtons[0]).css('background-color', "pink");
    window.location.href = Pages[0];
});
document.querySelectorAll("button")[1].addEventListener('click',function(){
    $(ArrayButtons[1]).css('background-color', "pink");
    window.location.href = Pages[1];
});
document.querySelectorAll("button")[2].addEventListener('click',function(){
    $(ArrayButtons[2]).css('background-color', "pink");
    window.location.href = Pages[2];
});