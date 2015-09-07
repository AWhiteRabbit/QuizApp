//jquery things.

var categoryFall = {
	"q1": "What is the drink of choice for american women in fall?",
	"q2": " ",
	"q3": " ",
	"q4": " ",
	"q5": " ",
	"q6": " ",
	"q8": " ",
	"q9": " ",
	"q10": " ",
};

var options = {
	"a1": ["Bottled water", "Green tea", "Coffee", "Pumpkin spiced latte"],
	"a2": ["", "", "", ""],
	"a3": ["", "", "", ""],
	"a4": ["", "", "", ""],
	"a5": ["", "", "", ""],
	"a6": ["", "", "", ""],
	"a7": ["", "", "", ""],
	"a8": ["", "", "", ""],
	"a9": ["", "", "", ""],
	"a10": ["", "", "", ""],
};

$(document).ready(function(){
	$(".q").append(categoryFall.q1);
	$("#a1").append(options.a1[0]);
	$("#a2").append(options.a1[1]);
	$("#a3").append(options.a1[2]);
	$("#a4").append(options.a1[3]);
});