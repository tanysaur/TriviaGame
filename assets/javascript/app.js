// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.
$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var q = 0;
	var userChoice = null;

	var trivia = [
		{
			question: "Question text here 00",
			answer : "a0",
			options : ["a0","a1","a2"],
		},

		{
			question : "Question text here 11",
			answer : "b1",
			options : ["b0","b1","b2"],
		},

		{
			question : "Question text here 22",
			answer : "c2",
			options : ["c0","c1","c2"],
		}
	];

	var stopwatch = {
	    time: 5,
	    start: function(){
	        counter = setInterval(stopwatch.count, 1000);
	    },
	    stop: function(){
	        clearInterval(counter);
	        $("#timer").text("00:00");
	    },
	    count: function(){
	        stopwatch.time--;
	        var converted = stopwatch.timeConverter(stopwatch.time);
	        $('#timer').text(converted);
	    },
	    timeConverter: function(t){
	        var minutes = Math.floor(t/60);
	        var seconds = t - (minutes * 60);
	        if (seconds != 00){
	        	if (seconds < 10){
	            	seconds = "0" + seconds;
	        	}
	        	if (minutes === 0){
		        	minutes = "00";
		        } else if (minutes < 10){
		            minutes = "0" + minutes;
		        }
		        return minutes + ":" + seconds;

	        }else{
	        	losses++;
	        	var next = confirm("Next question?");
	        	if (next){
	        		//display next Q
	        		game.nextQ;	
	        	}
	        }  
	        
	    }
	};

	console.log("this is the answer: " + trivia[q].answer);
	console.log("length: "+ trivia[q].options.length);


	// window.onload = function(){
	//     $("#startButton").on("click", stopwatch.start);
	//     //game.nextQ;
	    
	// };
	

	nextQ();

	function nextQ() {
		//increment question in the trivia object

 		stopwatch.start;
 		$('#timer').text('00:05');

 		//dynamically change the question
 		$("#question").html("<h1>"+trivia[q].question+ "</h1>");

 		//add buttons from trivia object
		for(i = 0; i < trivia[q].options.length; i++){
			$("#answers").append("<button class='btn-primary buttonOptions'>" + trivia[q].options[i] + "</button>" + "<br>");
		}
		
	}
	

	//check if user choice is correct
	function checkAnswer(){

		if(userChoice === trivia[q].answer){
			console.log("correct");
			wins++;
			$("#wins").html("Correct: "+wins);
			nextQ();
			q++;
		}else{
			console.log("incorrect");
			losses++;
			$("#losses").html("Inorrect: "+losses);
			q++;
		}
		$("#answers").empty();
		nextQ();
	}


	//when user clicks on a button, 
	$(".buttonOptions").on("click", function(){
		var myClick = $(this).text();
		console.log(myClick);
		userChoice = myClick;
		checkAnswer();
	});

});





