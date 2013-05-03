/**
 * Created with JetBrains WebStorm.
 * User: aaaa
 * Date: 5/2/13
 * Time: 7:47 AM
 * To change this template use File | Settings | File Templates.
 */
$(function(){


    var context = document.getElementById("canvas").getContext("2d");
    var image = new Image();
    image.src = "img/pattern.png";

    function drawPattern() {

        context.fillStyle = context.createPattern(image, "repeat");
        context.fillRect(0, 0, 300, 300);
    }


    image.onload = drawPattern;

});
