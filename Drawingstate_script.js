/**
 * Created with JetBrains WebStorm.
 * User: aaaa
 * Date: 5/2/13
 * Time: 7:47 AM
 * To change this template use File | Settings | File Templates.
 */
$(function(){


    var canvas = document.getElementById("canvas").getContext("2d");
    var image = new Image();
    image.src = "img/pattern.png";

    function drawPattern() {

        canvas.fillStyle = canvas.createPattern(image, "repeat");
        canvas.fillRect(0, 0, 300, 300);
    }


   // image.onload = drawPattern;

    function drawImage(){
    canvas.drawImage(image,10,10)
    canvas.drawImage(image,120,10,150,120)
       // canvas.drawImage(image, 20, 20, 100, 50, 250, 10, 100, 120);
       // canvas.drawImage(image,300,20,100,250,150,30,100,120);
    }

    image.onload = drawImage;



});
