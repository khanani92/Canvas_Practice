$(function(){
    $("#img1").bind("mouseover",function(){
        //var marginLeft=  $(this).css("marginLeft");
        //alert(rate);
        $(this).animate({
          opacity:.5,
          marginLeft:'+=300px'

        },
           1500,
            'easeInOutElastic'
        );

    });//.bind
});