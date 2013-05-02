/**
 * Created with JetBrains WebStorm.
 * User: aaaa
 * Date: 5/2/13
 * Time: 2:27 AM
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    var canvas= document.getElementById("canvas").getContext("2d");
    //simple linear gradient
    var grad = canvas.createLinearGradient(0,0,500,200);
    grad.addColorStop(0,"red");
    grad.addColorStop(0.5,"white");
    grad.addColorStop(1,"black");

    //simple linear gradient size changed
    canvas.fillStyle = grad;
    canvas.fillRect(0,0,500,200);
    canvas.fillRect(0,300,50,50);

    //simple linear gradient size changed
    var grad2 = canvas.createLinearGradient(10,10,60,60);
    grad2.addColorStop(0,"red");
    grad2.addColorStop(0.5,"white");
    grad2.addColorStop(1,"black");
    canvas.fillStyle = grad2;
    canvas.fillRect(10,10,50,50);

    //simple linear gradient size changed

});
