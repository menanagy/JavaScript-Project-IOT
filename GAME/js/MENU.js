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
        $(ArrayButtons).css('background-color', "rgba(6, 105, 67, 0.792)")
        $(ArrayButtons[Next]).css('background-color', "rgb(30, 223, 159)")
        Current=Next
        console.log(Current)
        console.log(Next)
        Previous = Next - 1
        Next++
      

    }


    else if (e.which == 38) {
        if (Previous <= -2) {
            Previous = 1
        }

        $(ArrayButtons).css('background-color', "rgba(6, 105, 67, 0.792)")
        $(ArrayButtons[Next]).css('background-color', "rgb(30, 223, 159)")
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