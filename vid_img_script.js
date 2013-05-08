/**
 * Created with JetBrains WebStorm.
 * User: aaaa
 * Date: 5/8/13
 * Time: 3:08 PM
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    var canvas1 = document.getElementById("canvas");
    var context1 = canvas1.getContext("2d");
    var imageElement = document.getElementById("vid");

    $("#btn1").bind("click",function(){
        context1.drawImage(imageElement,0,0,360,240)
    });

    var canvas2 = document.getElementById("canvas2");
        var context2 = canvas2.getContext("2d");
        var imageElement2 = document.getElementById("vid2");

        var width = 100;
        var hight = 10;
        context2.lineWidth = 5;
        context2.strokeStyle="red";

        setInterval(function(){
        context2.drawImage(imageElement2,0,0,360,240);
        context2.strokeRect(180-(width/2),120-(hight/2),width,hight);

    },1000);//setInterval

        setInterval(function(){
            width=(width+1)%200;
            hight = (hight+3)%200;

        },100)


});