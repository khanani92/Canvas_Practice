$(function(){
    $("#img1").bind("mouseover",function(){
        $(this).animate({
          opacity:.5,
          marginLeft:'10px'

        },
           1500
        );

    });//.bind
});