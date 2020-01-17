$(".button").on("click", function () {
    window.location.href = "../Menu.html"
})
$(window).on('keydown', scrolling)
function scrolling(e) {
    if (e.which == 8){
        console.log("pika pika");
        window.location.href = "../Menu.html"
    }
}