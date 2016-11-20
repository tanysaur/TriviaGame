// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.
$(document).ready(function() {

//Variable declaration
	var wins = 0;
	var losses = 0;
	var q = 0;
	var userChoice = null;

	var trivia = [
		{
			question: "Which actor played the 11th doctor?",
			answer : "Matt Smith",
			options : ["Billie Piper","Matt Smith","David Tennant","Benedict Cumberbatch"],
		},

		{
			question : "Who said this line, 'Hello Sweetie.'",
			answer : "River Song",
			options : ["Amy Pond","Dalek","River Song","11th Doctor"],
		},

		{
			question : "Who is fighting in the time war?",
			answer : "Dalek & the Timelords",
			options : ["The Master & the Timelords","The Master & the Timelords","Dalek & the Timelords","Cybermen & the Timelords"],
		},

		{
			question : "Who is the Doctor's arch enemy?",
			answer : "Daleks",
			options : ["The Timelords","The Master","Daleks","Cybermen"],
		},

		{
			question : "What does TARDIS stand for?",
			answer : "Time And Relative Dimension In Space",
			options : ["Timely Annoying Divergent Interesting Sports","Totally Awesome Rhinos Digging In Spain","Time And Relative Dimension In Space","Time And Realm Dimension In Space"],
		},

		{
			question : "How old is the Doctor?",
			answer : "Over 2000",
			options : ["Over 2000","Under 100","5 billion","3.1415 million"],
		},

		{
			question : "What happens if a weeping angel touches you?",
			answer : "You get set back in time",
			options : ["You die","You turn into one","You get set back in time","You start weeping uncontrollably"],
		},

		{
			question : "What is the Dalek's catch phrase?",
			answer : "Exterminate!",
			options : ["Die!","Exfoliate!","Delete!","Exterminate!"],
		},

		{
			question : "Which Doctor has a scarf?",
			answer : "Fourth Doctor",
			options : ["Fourth Doctor","9th Doctor","First Doctor","12th Doctor"],
		},

		{
			question : "What was Clara Oswald's favorite dish to make?",
			answer : "Souffle",
			options : ["Pie","Souffle","Creme brulee","Custard"],
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

	$('#startButton').click(function(){
	  $('#quiz').slideUp();
	  $(this).hide();
	  $(".btn-primary").css("cssText", "display: block !important; margin:auto; width: 30%;");
	});


	nextQ();

	function nextQ() {
		//increment question in the trivia object

 		stopwatch.start;
 		$('#timer').text('00:05');

 		//dynamically change the question
 		$("#question").html("<h1>"+trivia[q].question+ "</h1>");

 		//add buttons from trivia object
 		var answerDiv = $('<div class="answers text-center">');
 		$("#question").after(answerDiv);
		for(i = 0; i < trivia[q].options.length; i++){
			$(".choices").append("<input type='radio' name='choice'" + "value='"+ i + "'>" + trivia[q].options[i] + "\n");
		}
		
	}

	
	//when user clicks on a button, 
	$(radio).on("click", function(){
		var myClick = $(this).text();
		console.log(myClick);
		userChoice = myClick;
		checkAnswer();
	});

	//check if user choice is correct
	function checkAnswer(){

		if(userChoice === trivia[q].answer){
			console.log("correct");
			wins++;
			$("#wins").html("Correct: "+wins);
			nextQ();
			q++;
			return true;
		}else{
			console.log("incorrect");
			losses++;
			$("#losses").html("Inorrect: "+losses);
			q++;
			return false;
			//add fun facts
		}
		$(".answers").remove();
		nextQ();
	}

});





