$(document).ready(function(){


    var calc = new Calculator();
    calc.screen();
});


var Calculator = function() {
    this.screen = function(){
	$(".screen").html("543");
    }
}
