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

    canvas.lineWidth = 2;
    canvas.strokeRect(10,320,50,50);
    canvas.lineWidth = 4;
    canvas.strokeRect(70,320,50,50);
    canvas.lineWidth = 6;
    canvas.strokeRect(130,320,50,50);
    canvas.strokeRect(190,320,50,50);

    canvas.lineWidth=20;
    canvas.lineJoin= "round";
    canvas.strokeRect(20,400,100,100);
    canvas.lineJoin= "bevel";
    canvas.strokeRect(160,400,100,100);
    canvas.lineJoin= "miter";
    canvas.strokeRect(300,400,100,100);

    var fillColor=["black","grey","lightgrey","red","blue"];
    var strokeColors = ["rgb(0,0,0)", "rgb(100,100,100)", "rgb(200,200,200)", "rgb(250,0,0)", "rgb(0,0,255)"];
    canvas.lineWidth=3;

    for (var k=0;k<count;k++){

        canvas.fillStyle = fillColor[k];
        canvas.strokeStyle = strokeColors[k];
        //alert(canvas.fillStyle + fillColor[i]);
        canvas.fillRect(k*(offset+size)+offset,(13*offset)+(8*size),size,size);
        canvas.strokeRect(k*(offset+size)+offset,(10*offset)+(10*size),size,size);

    }


});