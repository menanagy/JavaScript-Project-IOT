$(".button").on("click", function () {
    window.location.href = "../index.html"
})
$(window).on('keydown', scrolling)
function scrolling(e) {
    if (e.which == 8){
        console.log("pika pika");
        window.location.href = "index.html"
    }}