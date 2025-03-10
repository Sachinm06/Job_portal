$(document).ready(function () {
    $(".hamburger-menu").click(function () {
        $("nav").toggleClass("active");
        $("body").toggleClass("no-scroll");

        // Toggle between hamburger and close icon
        if ($("nav").hasClass("active")) {
            $(".hamburger-menu").html("&times;"); // Close icon (×)
        } else {
            $(".hamburger-menu").html("&#9776;"); // Hamburger icon (☰)
        }
    });
});
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
        $(".blurred-top").fadeIn();
    } else {
        $(".blurred-top").fadeOut();
    }
});
