$(document).ready(function () {
    $(".lang_wrap i,.lang").click(function () {
        $(".lang_toggle").slideToggle("slow");
    });
    $(".lang_toggle a").on("click", function () {
        $(".lang_toggle").slideToggle("slow");
    });
    $(".toggle_btn").on("click", function(){
        $("aside").toggleClass("toggle_aside")
    });
    $(".close_side").on("click", function(){
        $("aside").removeClass("toggle_aside")
    });
});
