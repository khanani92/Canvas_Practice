/**
 * Created with JetBrains WebStorm.
 * User: aaaa
 * Date: 5/2/13
 * Time: 7:47 AM
 * To change this template use File | Settings | File Templates.
 */
$(function(){


    //var canvas = document.getElementById("canvas").getContext("2d");
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var image = new Image();
    image.src = "img/banana.png";

    function drawPattern() {

        context.fillStyle = canvas.createPattern(image, "repeat");
        context.fillRect(0, 0, 300, 300);
    }


   // image.onload = drawPattern;

    function drawImage(){
    context.drawImage(image,10,10)
    context.drawImage(image,120,10,100,120)
    //(dir,offest into source imgae X, Y,Width of the offest region of source X, Y,Position of the image drawn X,Y,Size of the image drawn W,H)
    context.drawImage(image,125,115,80,50,350,200,200,120);
      //  context.drawImage(image,20,20,100,50,250,10,100,120);
    }

    image.onload = drawImage;



});
