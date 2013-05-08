/**
 * Created with JetBrains WebStorm.
 * User: aaaa
 * Date: 5/8/13
 * Time: 3:08 PM
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var imageElement = document.getElementById("vid");

    $("#btn1").bind("click",function(){
        context.drawImage(imageElement,0,0,360,240)
    });

});