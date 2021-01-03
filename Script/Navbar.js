$(document).ready(function(){
    $('.menu-btn').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
});