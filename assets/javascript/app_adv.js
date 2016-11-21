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
	    },
	    count: function(){
	        var countdown = stopwatch.time--;
	        $('#timer').text(countdown);
	        if(countdown == 0){
	        	alert("time is up!");
	        	//stopwatch.stop;
	        	clearInterval(counter);
	        }
	    
	    }
	};


	 