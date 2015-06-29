$(document).ready(function () {
    $(".arrow-btn").click(function () {
        var topContainer = $(this).parents(".img-container");
        var bottomContainer = $(this).parents(".bottom-img-container");
        topContainer.children(".list-backround-container").slideToggle();
        bottomContainer.children(".list-backround-container").slideToggle();

    })
});