//jquery things.

var categoryFall = {
	"q1": ["What is the drink of choice for american women in fall?", "Pumpkin spiced latte"],
	"q2": "How many f**** are given?",
	"q3": "3?",
	"q4": "4?",
	"q5": "5?",
	"q6": "6?",
	"q8": "7?",
	"q9": "8?",
	"q10": "9?",
};

var options = {
	"a1": ["Bottled water", "Green tea", "Coffee", "Pumpkin spiced latte"],
	"a2": ["2", "0", "100", "69"],
	"a3": ["3a", "3b", "3c", "3d"],
	"a4": ["4a", "4b", "4c", "4d"],
	"a5": ["5a", "5b", "5c", "5d"],
	"a6": ["6a", "6b", "6c", "6d"],
	"a7": ["7a", "7b", "7c", "7d"],
	"a8": ["8a", "8b", "8c", "8d"],
	"a9": ["9a", "9b", "9c", "9d"],
	"a10": ["10a", "10b", "10c", "10d"],
};

$(document).ready(function(){
	$(".q").append(categoryFall.q1[0]);
	$("#v1").val(options.a1[0]);
	$("#a1").append(options.a1[0]);
	$("#v2").val(options.a1[1]);
	$("#a2").append(options.a1[1]);
	$("#v3").val(options.a1[2]);
	$("#a3").append(options.a1[2]);
	$("#v4").val(options.a1[3]);
	$("#a4").append(options.a1[3]);
});

$(document).ready(function(){
	$("#btn").click(function(){
		var yay = $('#quiz input:radio:checked').val();
		if (yay === categoryFall.q1[1]) {
			$("#chosen").append("Correct");
		}
	});
});

var right = 0;
var wrong = 0;

var yay = $('#quiz input:radio:checked').val();