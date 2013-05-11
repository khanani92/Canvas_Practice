/**
 * Created with JetBrains WebStorm.
 * User: aaaa
 * Date: 5/11/13
 * Time: 3:04 PM
 * To change this template use File | Settings | File Templates.
 */
 $(function(){
     var canvas = document.getElementById("canvas");
     var context = canvas.getContext("2d");

     context.fillStyle = "yellow";
     context.strokeStyle = "black";
     context.lineWidth = 4;

     context.beginPath();
     context.moveTo(10,10);
     context.lineTo(110,10);
     context.lineTo(110,120);
     context.closePath();
     context.fill();

     context.beginPath();
     context.moveTo(150,10);
     context.lineTo(200,10);
     context.lineTo(200,120);
     context.lineTo(190,120);
     context.fill();
     context.stroke();



 });