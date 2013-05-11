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

     context.beginPath();
     context.moveTo(250,10);
     context.lineTo(250,120);
     context.stroke();


     context.beginPath();
     context.moveTo(60,150);
     context.lineTo(90,180);
     context.lineTo(60,210);
     context.lineTo(30,180);
     context.lineTo(60,151);
     context.fill();
     context.stroke();

     context.beginPath();
     context.moveTo(170,140);
     context.lineTo(190,180);
     context.lineTo(220,180);
     context.lineTo(190,200);
     context.lineTo(200,235);
     context.lineTo(170,200);
     context.lineTo(148,235);
     context.lineTo(145,200);
     context.lineTo(115,180);
     context.lineTo(150,180);
     context.lineTo(170,140);
     context.fill();
     context.stroke();


     context.strokeStyle="red";
     context.lineWidth=2;
     context.beginPath();
     context.moveTo(0,280);
     context.lineTo(450,280);
     context.stroke();

     context.strokeStyle="black";
     context.lineWidth=40;

     var xpos = 60;
     var style = ["butt","round","square"];
     for(var i=0; i<style.length;i++){
         context.beginPath();
         context.lineCap = style[i];
         alert(style[i]);
         context.moveTo(xpos,280);
         context.lineTo(xpos,340);
         context.stroke();
         xpos+=70;


     }



 });