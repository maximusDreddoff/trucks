$(document).ready(function () {
    $(".arrow-btn").click(function () {
        var zoneItem = $(this).parents(".img-container");
        var zoneItem2 = $(this).parents(".bottom-img-container");
        zoneItem.children(".list-backround-container").slideToggle();
        zoneItem2.children(".list-backround-container").slideToggle();

    })
});