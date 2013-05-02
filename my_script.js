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

    for (var j=0;j<count;j++){
        canvas.fillRect(j*(offset+size)+offset,(4*offset)+(2*size),size,size);
        canvas.strokeRect(j*(offset+size)+offset,(5*offset)+(3*size),size,size);
        canvas.clearRect(j*(offset+size)+offset,(4*offset)+(2*size)+5,size,size-10);

        canvas.fillRect(j*(offset+size)+offset,(6*offset)+(4*size),size,size);
        canvas.clearRect(j*(offset+size)+offset+5,(6*offset)+(4*size)+5,size-20,size-10);
    }


});