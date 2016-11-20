// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz.

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.

// Don't forget to include a countdown timer.
//$(document).ready(function() {

//Variable declaration
	var wins = 0;
	var losses = 0;
	var q = 0;
	var correctAnswer;

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
	    time: 30,
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
	        	stopwatch.stop;
	        	alert("timesup");
	        	$("#timer").text("00:00");
	        	//show stats
	        }  
	        
	    }
	};


	window.onload = function(){
	    
    $("#startButton").on("click", stopwatch.start);
	    //game.nextQ;
	    // $("#QA-holder").addClass("displayHide");
	    // $("#status-holder").addClass("displayHide");
	    
	};

	$('#startButton').click(function(){
	  $(this).hide();
	});


	//nextQ();
	
	//add question on page
	$.each(trivia, function(i, val) {
		var qForm = ("<form id='question" + i + "'>" + val.question + "<br>");
 		$("#question-holder").append(qForm);


 		$.each(trivia[i].options, function(j, val2){
 			//add an radio input to each option
 			if(val.answer != val2 ){
 				var inputOptions = ("<input type='radio' value='incorrect' id='c"+i+j+"'>"+ val2 + "<br>");
 				$("#question"+i).append(inputOptions);
 			}
 			//add id correct of the radio input that has the correct answer
 			else{
 				var inputCorrectAnswer = ("<input type='radio' value='correct' id='correctOption'>"+ val2 + "<br>");
 				$("#question"+i).append(inputCorrectAnswer);
 				correctAnswer = $("#correctOption").val();
 			}
 		});
 	 	
	});
	
	console.log(correctAnswer);
	$("#submitBtn").on("click", checkButtons);

	function checkButtons(){
		//if option chosen is correct, increment counter: wins
		//console.log(correctAnswer);
		if(correctAnswer.checked){
			//userChoice == correctAnswer.val();
			console.log(correctAnswer.val());
			console.log("correct!");
			wins++;
			console.log(wins);
		}else{
			console.log("notworking");
		}
	}

	//this function calls the next question/slide
	// function nextQ() {
	// 	//start timer
 // 		// stopwatch.start;
 // 		// $('#timer').text('00:05');
 		

 // 		//add question on page
 // 		for(j = 0; j < trivia.length; j++){
 // 			var newQForm = ("<form id='q" + j+ "'>");
 // 			$("#question-holder").after(newQForm);
 // 			//dynamically change the question
	//  		$("#q"+j).prepend(trivia[q].question + "<br>");
	 		
	//  		console.log(trivia[q].question);

	//  		//add multiple span for each options
	// 		for(i = 0; i < trivia[q].options.length; i++){
	// 			var newCSpan = ("<span id='c" + j+i + "'>");
				
	// 			//create a new input/radio button for each option
	// 			$("#q"+j).append(newCSpan);

	// 			if(trivia[q].options[i] != trivia[q].answer){
	// 				$("#c"+j+i).append("<input type='radio' name='options'" + "value='"+ i + "'>" + trivia[q].options[i] + "<br>");	
	// 			} else{
	// 				$("#c"+j+i).append("<input type='radio' name='options' id='correctAnswer'" + " value='"+ i + "'>" + trivia[q].options[i] + "<br>");	
	// 				correctAnswer = $("correctC"+j+i);
	// 			}


	// 		$("#submitBtn").on("click", function(){
	// 		//if option chosen is correct, increment counter: wins
	// 		console.log(correctAnswer);
	// 		if(correctAnswer.checked){ //see prop method
	// 			wins++;
	// 			console.log("i won: " + wins);
	// 			q++;
	// 			return true;
	// 		//if option chosen is incorrect, increment counter: losses
	// 		}else{
	// 			losses++;
	// 			console.log("i lost: "+ losses);
	// 			q++;
	// 			return false;
	// 		}
	// 		});
	// 	}

	// 	// //some function to check user input click event
	// 	// $("#submitBtn").on("click", function(){
	// 	// 	//if option chosen is correct, increment counter: wins
	// 	// 	console.log(correctAnswer);
	// 	// 	if(correctAnswer.checked){ //see prop method
	// 	// 		wins++;
	// 	// 		console.log("i won: " + wins);
	// 	// 		q++;
	// 	// 		return true;
	// 	// 	//if option chosen is incorrect, increment counter: losses
	// 	// 	}else{
	// 	// 		losses++;
	// 	// 		console.log("i lost: "+ losses);
	// 	// 		q++;
	// 	// 		return false;
	// 	// 	}
	// 	// });	

	// 	//run checkAnswer method to check if option chosen is correct
	// 	//checkAnswer();
	// 	}
	// }

	// //check if user choice is correct
	// function checkAnswer(){	
	// 	console.log(correctAnswer);

	// 	//if option chosen is correct, increment counter: wins
	// 	if(correctAnswer.checked){ //see prop method
	// 		wins++;
	// 		console.log("i won: " + wins);
	// 		q++;

	// 	//if option chosen is incorrect, increment counter: losses
	// 	}else{
	// 		losses++;
	// 		console.log("i lost: "+ losses);
	// 		q++;
	// 	}
	//  }

//});





