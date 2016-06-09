$(document).ready(function() {

    $(".shape1").click(function() {
        $("#sound1").get(0).play();

        var $el = $(".shape1"),
            x = 100,
            originalColor = $el.css("background");

        $el.css("background", "#32CD32");
        setTimeout(function(){
            $el.css("background", originalColor);
        }, x);
    });

    $(".shape2").click(function() {
        $("#sound2").get(0).play();

        var $el = $(".shape2"),
            x = 100,
            originalColor = $el.css("background");

        $el.css("background", "#ff0080");
        setTimeout(function(){
            $el.css("background", originalColor);
        }, x);
    });

    $(".shape3").click(function() {
        $("#sound3").get(0).play();

        var $el = $(".shape3"),
            x = 100,
            originalColor = $el.css("background");

        $el.css("background", "#ccff00");
        setTimeout(function(){
            $el.css("background", originalColor);
        }, x);
    });

    $(".shape4").click(function() {
        $("#sound4").get(0).play();

        var $el = $(".shape4"),
            x = 100,
            originalColor = $el.css("background");

        $el.css("background", "#00BFFF");
        setTimeout(function(){
            $el.css("background", originalColor);
        }, x);
    });

});
