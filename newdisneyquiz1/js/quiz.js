var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct=0, name = 0; 

		
var questions=[
    [ "In which Disney film will you hear the song 'Everybody Wants To Be A Cat'?", "The Jungle Book", "The Lion King", "The Arstocats", "c" ],
    [ "Who teaches Mowgli the bare necessities of life?", "Baloo", "King Louis", "Bafheera", "A" ],
    [ "What animals portray surfer dudes in Finding Nemo?", "Sharks", "Turtles", "Seagul", "B" ],
    [ " What does Woody from Toy Story have in his boot?", "Snake", "Andy", "Jessie", "A" ],
    [ "What are Scully and Mike collecting to power Monstropolis in Monsters, Inc.?", "Laughs", "Screams", "Oil", "B" ],
    [ "Which film does Eddie Murphy do the voice-over for a red Chinese dragon?", "Mulan", "Moana", "Lilo and Stitch", "A" ],
    [ "What Disney film released in 2010 retells the classic fairytale Rapunzel?", "Frozen", "Tangled", "Rapunzel", "B" ],
    [ "What is the name of Woody's owner in Toy Story?", "Andy", "Jessie", "Buzz", "A"],
	[ "In which city is the 2007 Disney film Ratatouille based?", "Paris", "London", "Rome", "A"],
	[ "What is the name of Simba's Disney partner?", "ciara", "Nala", "Scar", "B"],
	[ "What Disney film contains the classic song 'Be our Guest'?", "Lilo and Stitch", "Beauty and the Beast", "Snow White", "B"],
	[ "What is the name of Mickey Mouse's Disney partner?", "Daisy Duck", "Pluto", "Minnie Mouse", "c"],
	[ "The villain, Gaston, appears in which 1991 Disney film?", "Beauty and the Beast", "Tangled", "Finding Nemo", "A"],
	[ "Which Disney film is about a Mum and Daughter who swap places and are forced to live each others lives?", "Tanlged", "Frozen", "Freaky Friday", "c"],
	[ "'Can You Feel The Love Tonight' is a song from which Disney film?", "The Jungle Book", "The Arstocats", "The Lion King", "c"],
	[ "What Disney film has an Elastigirl and an Frozone?", "The Incredibles", "The Rescurers Down Under", "Zootropolis", "A"],
	[ "Which Disney cub can not wait to be King?", "Scar", "Mufasa", "Simba", "c"],
	[ "Who played Mary Poppins in the Disney film?", "Juila Roberts", "Julie Andrews", "Emily Blunt", "B"],
	[ "Who performs the voice-over of Dory the fish in Disney's Finding Nemo?", "Ellen Page", "Ellen deGeneres", "Ellen Jones"],
	[ "Whose tea party does Alice attend?", "The Mad Hatter", "The White Rabbit", "The Mad Rabbit", "A"],
];
   
function _(x)
{ 
    return document.getElementById(x);
} 

		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;
}

function renderQuestion()
{ 
    test = _("test"); 
    if(pos >= questions.length)
    { 
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() + "%)</h2><button onclick='myFunction()'>Print My Results</button><button onclick='emailCurrentPage()'>Email My Results!";
		
        _("test_status").innerHTML += "  Thank you for completing the quiz";
        pos = 0;
        correct = 0; 
        return false; 
    } 

    var bar=document.getElementById("progressBar");

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    

    bar.value = (pos+1)

  

    question = questions[pos][0];
    choiceA = questions[pos][1]; 
    choiceB = questions[pos][2]; 
    choiceC = questions[pos][3]; 
    test.innerHTML = "<h3>"+question+"</h3>"; 
    test.innerHTML += "<input type='radio' name='choices' value='A' checked> "+choiceA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>"; 
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br><br>"; 
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
} 

		
function checkAnswer()
{ 
    choices = document.getElementsByName("choices"); 
    for(var i=0; i<choices.length; i++)
    { 
        if(choices[i].checked)
        { 
            choice = choices[i].value; 
        }
    } 
    if(choice == questions[pos][4])
    {
        alert('Correct!');
        correct++;
    }
    else
    {
        alert('Sorry wrong answer. The correct answer is ' + questions[pos][4]);
    } 
    pos++; 
    
    renderQuestion();
}


window.addEventListener("load", renderQuestion, false);
function myFunction() {
    window.print();
}
 function emailCurrentPage(){
            window.location.href="mailto:?subject="+document.title+"&body="+escape(window.location.href);
        }