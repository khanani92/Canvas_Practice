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

    //Playing with Canvas

    var canvas= document.getElementById("canvas").getContext("2d");

    canvas.fillRect(10,10,50,50);

    var offset = 10;
    var size = 50;
    var count= 5;

    for(var i= 0;i<count;i++){
        canvas.fillRect(i*(offset+size)+offset,offset,size,size);
        canvas.strokeRect(i*(offset+size)+offset,(2*offset)+size,size,size);
    }


});