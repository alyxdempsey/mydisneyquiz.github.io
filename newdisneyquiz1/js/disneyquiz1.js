var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ " In which Disney film will you hear the song 'Everybody Wants To Be A Cat'?", "The Jungle Book", "The Lion King", "The Arstocats", "c" ],
    [ "Who teaches Mowgli the bare necessities of life?", "Baloo", "King Louis", "Bafheera", "A" ],
    [ "What animals portray surfer dudes in Finding Nemo?", "Sharks", "Turtles", "Seagul", "B" ],
    [ " What does Woody from Toy Story have in his boot?", "Snake", "Andy", "Jessie", "A" ],
    [ "What are Scully and Mike collecting to power Monstropolis in Monsters, Inc.?", "Laughs", "Screams", "Oil", "B" ],
    [ "Which film does Eddie Murphy do the voice-over for a red Chinese dragon?", "Mulan", "Moana", "Lilo and Stitch", "A" ],
    [ "What Disney film released in 2010 retells the classic fairytale Rapunzel?", "Frozen", "Tangled", "Rapunzel", "B" ],
    [ "What is the name of Woody's owner in Toy Story?", "Andy", "Jessie", "Buzz", "A" ]
	["What "];
   
    
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);