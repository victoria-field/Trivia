var game = {
	correct: 0,
	incorrect: 0,
	questions: [
		{
			question: "What is not a house at Hogwarts?", 
			options: ['Stallion', 'Slitherin', 'Ravenclaw'],
			answer: 1
		},{
			question: 'What platform does the Hogwarts Express depart from?',
			options:  ['5', '7 1/2','9 3/4'],
			answer: 3
		},{	
			question: 'Where is the opening to the Chamber of Secrets?', 
			options:  ['Hagrids Hut','Girls Bathroom','Hogsmead'], 
			answer: 2
		},{
			question: 'Which name below is one of the ghosts at Hogwarts?', 
			options: ['Casper','Nearly Headless Nick','Brandon'],
			answer:  2
		},{
			question: 'Who gave Harry his 1st broom?', 
			options:  ['Professor McGonagall', 'Professor Snape', 'Ginny'], 
			answer:  1
		},{
			question: 'What kind of pet does Hermione have?', 
			options: ['Owl','Cat','Rat'], 
			answer:2
		},{	
			
			question: 'What is the last Horcrux?',
			options: ['Harry', 'The Watch', 'Ginny'],
			answer: 1
		}
	],
	intervalId: 0,
	counter: 31,
	questionCounter: 7
};



function resetGame() {
	game.questionCounter = 7;
	game.correct = 0;
	game.incorrect = 0;
	unanswered = 0;
	game.counter = 31;
	// generateHTML();
	// timerWrapper();
	intervalId = 0;
	run();

}

// var unanswered = game.questionCounter - (game.incorrect + game.correct);

function decrement() {

  game.counter--;

  $("#counter").html("<h2>" + game.counter + "</h2>");


  //  Once number hits zero...
  if (game.counter === 0) {
    checkAnswers();
    // alert("Time Up!");
    

  }
}

function run() {
 	// game.intervalId = setInterval(decrement, 1000);
 	$('.start-wrap').hide();
 	game.intervalId = setInterval(decrement, 1000);
 	$.each(game.questions, function(index, obj) {
		var question = $('<div>');
		
		question.addClass('question col-xs-6 col-xs-offset-3 text-center');

		question.append('<p class="question-text">' + obj.question + '</p>');
		
		obj.options.forEach(function(answer) {
			question.append('<button>' + answer + '</button>');
		});

		$('.questions-wrap').append(question);
 	});
 	//decrement();
 	$('.jumbotron').show();
}

function getUserAnswer() {
	$(this).addClass('selected').siblings('button').removeClass('selected');
}
// End State
function checkAnswers() {
	clearInterval(game.intervalId);
	var hideQscreen = $(".jumbotron").hide();
	$(".end-wrap").show();

	$('.questions-wrap .question').each(function(index, question) {
		// var question = $(this);
		// var question_index = quest;
		var check = game.questions[index];
		var answer = $(question).find('.selected').index();
			
		if ( check.answer === answer ) {
			game.correct ++
			
			
			

		} else {

			game.incorrect ++
		}
			
			
	});


	// calculate unanswered and put as html of .unanswered
	$(".correct").text("# of correct answers: " + game.correct);

	$(".incorrect").html(" # of incorrect answers: " + game.incorrect);
			

};

// Start game
$("#start").on("click", run); 

// Add event listeners for questions
$('.questions-wrap').on('click', 'button', getUserAnswer);

// Add event for check button
$('#check').on('click', checkAnswers);


$("#end").on("click", resetGame);




