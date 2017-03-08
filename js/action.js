$(document).ready(function(){
    var calc = new Calculondo();
    var cont = new Controller(calc);
});

var Controller = function(calc){
    $(".keyboard").click(function(data){
	switch (data.target.id){
	case "plus":
	    calc.screen.push("+");
	    break;
	case "eight":
	    calc.screen.push("8");
	    break;
	case "nine":
	    calc.screen.push("9");
	    break;
	case "seven":
	    calc.screen.push("7");
	    break;
	case "six":
	    calc.screen.push("6");
	    break;
	case "five":
	    calc.screen.push("5");
	    break;
	case "four":
	    calc.screen.push("4");
	    break;
	case "three":
	    calc.screen.push("3");
	    break;
	case "two":
	    calc.screen.push("2");
	    break;
	case "one":
	    calc.screen.push("1");
	    break;
	case "zero":
	    calc.screen.push("0");
	    break;
	case "minus":
	    calc.screen.push("-");
	    break;
	case "times":
	    calc.screen.push("*");
	    break;
	case "equals":
	    calc.evaluate();
	    break;
	case "clear":
	    calc.clear();
	    break;
	case "decimal":
	    calc.screen.push(".");
	    break;

	default :
	    console.log("Argwahl");
	}


	calc.display();
    });
};

var Calculondo = function(){
    this.screen = [];
    this.add = function(){
	var sum = 0;
	for (var i = 0; i < screen.length; i++){
	    sum += screen[i];
	}
	return sum;
    }

    this.display = function(){
	$(".screen").html(this.screen);
	console.log(this.screen);

    }

    this.clear = function(){
	this.screen = [];
    }
    this.evaluate = function() {
    }
}
