// You'll create a trivia form with multiple choice or true/false options (your choice).
// The player will have a limited amount of time to finish the quiz.
// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.


$(document).ready(function() {

	//Variable declaration
	var wins = 0;	//tallies the correct answers
	var q = 0;		//index for question property
	
	//library of question and answers for the trivia game
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
			answer : "Daleks & the Timelords",
			options : ["The Master & the Doctor","The Master & the Timelords","Daleks & the Timelords","Cybermen & the Timelords"],
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

	//functions that sets timer to 45 seconds, starts countdown and stops the timer
	//reference: stopwatch activity from class
	var stopwatch = {
	    time: 45,
	    start: function(){
	        counter = setInterval(stopwatch.count, 1000);
	    },
	    stop: function(){
	        clearInterval(counter);
	    },
	    count: function(){
	        var countdown = stopwatch.time--;
	        $('#timer').text("Time left: " + countdown);
	        if(countdown == 0){
	        	//$(alert("time is up!");
	        	//stopwatch.stop;
	        	//clearInterval(counter);
	        	showFinalScore();
	        }
	    }
	};

	//event that starts the timer when 'start' button is clicked	
	window.onload = function(){   
		
    	$("#startButton").on("click", stopwatch.start);  
	};

	//as soon as start button is clicked, the button hides, and QA-holder + submit button appears
	$('#startButton').click(function(){
		$(this).hide();
		$("#QA-holder").removeClass("displayHide");
		$("#submitButton").removeClass("displayHide");
	});

	//as soon as submit Button is clicked, timer stops and final tally is displayed by calling the showFinalScore function
	$("#submitButton").on("click", function(){
		showFinalScore();
	});
	
	//adds each question on the page
	$.each(trivia, function(i, val) {
		//create a form and append the question from triva object to the form
		var qForm = ("<form id='question" + i + "'>" + "<h2>"+ val.question +"</h2>"+ "<br>");
 		$("#question-holder").append(qForm);
 		q++; //increment to go to the next question

 		//for each question add the choices / options (x4) to each question 
 		$.each(trivia[i].options, function(j, choices){
 			//create radio buttons per option
 			//add id 'incorrect' of the radio input that has all the 'incorrect' answers
 			if(val.answer != choices ){
 				var inputOptions = ("<input type='radio' value='wrong'" + "name='q" + i +  "' id='c"+i+j+"'>"+ choices + "<br>");
 				$("#question"+i).append(inputOptions);
 			}
 			//add id 'correct' of the radio input that has the correct answer
 			else{
 				var inputCorrectAnswer = ("<input type='radio' value='correct'" + "name='q" + i +  "' id='c"+i+j+"'>"+ choices + "<br>");
 				$("#question"+i).append(inputCorrectAnswer);
 			}
 		});
 	 	
	});

//takes the value of each radio button
function getCheckedValue( radioName ){
	var radios = document.getElementsByName( radioName ); 
	for(var y=0; y<radios.length; y++)
		if(radios[y].checked) return radios[y].value; 
}

//compares the radio button value and compares it with the string 'correct' that stores the correct answer of the given question
function getScore(){
	var wins = 0;
		for (var i=0; i<trivia.length; i++)
			if(getCheckedValue("q"+i)==="correct") wins += 1; 
			return wins;
}

//shows the final score by stopping the countdown timer, displaying 'status-holder' container,
//and showing the final tally of correct vs incorrect answers
function showFinalScore(){
	//stopwatch.stop;
	clearInterval(counter);
	$("#QA-holder").addClass("displayHide");
	$("#submitButton").addClass("displayHide");
	$("#status-holder").removeClass("displayHide");

	//updates html for the final scores
	$("#wins").text("Correct: " + getScore());
	$("#losses").text("Incorrect: " + (trivia.length-getScore()));	  	
}

});

// References:
// stopwatch object: stopwatch_solution activity from class
// https://github.com/the-Coding-Boot-Camp-at-UT/10-16-Houston-Class-Content/tree/master/hou1010-MW-Class-Content/05-timers-trivia/1-Class-Content/5.2/Activities/7-Stopwatch
// 
// getCheckedValue, getScore, showFinalScore:
// http://stackoverflow.com/questions/28403558/multiple-choice-quiz-getting-score



