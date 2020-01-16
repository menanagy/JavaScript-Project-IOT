$(".button1").on("click", function () {
    window.location.href = "PageAboutUs.html"
})

var Next = 0
var Previous = 0
var Current = 0
var ArrayButtons = document.getElementsByClassName("button")
var Pages = ["Start.html", "HowTo.html", "PageAboutUs.html"]


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