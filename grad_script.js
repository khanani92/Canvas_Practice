/**
 * Created with JetBrains WebStorm.
 * User: aaaa
 * Date: 5/2/13
 * Time: 2:27 AM
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    var canvas= document.getElementById("canvas").getContext("2d");

    var grad = canvas.createLinearGradient(0,0,500,200);
    grad.addColorStop(0,"red");
    grad.addColorStop(0.5,"white");
    grad.addColorStop(1,"black");

    canvas.fillStyle = grad;
    canvas.fillRect(0,0,500,200);
});
