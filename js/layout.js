$(document).ready(function () {
    var description = $(".red-description > span");
    $(".arrow-btn")&&description.click(function () {
        var topContainer = $(this).parents(".img-container");
        var bottomContainer = $(this).parents(".bottom-img-container");
        topContainer.children(".list-backround-container").slideToggle();
        bottomContainer.children(".list-backround-container").slideToggle();
    })
});