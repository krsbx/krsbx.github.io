$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 10)
            $("navbar").addClass("sticky");
        else
            $("navbar").removeClass("sticky");
    });
});