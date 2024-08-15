$(document).ready (function(){
    $('#test-btn').click (function(){
        //alert("clickAlert");
        //$('.box').hide();
        $('.box').toggle();
    });
    $('.box').mouseenter (function(){
        $(this).css ({"background-color":"Red"});
    });
    $('.box').mouseleave (function(){
        $(this).css ({"background-color":"Green"});
    });

})
