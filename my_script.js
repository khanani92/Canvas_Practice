$(function(){
    $("#text1").hide();
    $("#img1").bind("mouseover",function(){
        //var marginLeft=  $(this).css("marginLeft");
        //alert(rate);
        $(this).animate({
          opacity:.5,
          marginLeft:'+=30px',
                left:'+=100px'

        },
           1500,
            'easeInOutElastic',
            function(){$("#text1").show();}
        );

    });//.bind
});