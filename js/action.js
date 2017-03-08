$(document).ready(function(){
    var calc = new Calculondo();
    var cont = new Controller(calc);
});

var Controller = function(calc){
    $(".keyboard").click(function(data){
	switch (data.target.id){
	case "+":
	    calc.screen.push("+");
	    break;
	case "eight":
	    calc.screen.push("8");
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
}
