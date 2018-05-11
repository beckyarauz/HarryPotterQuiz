var questions = [
  {
    question: "What is the spell to open doors?",
    answers: [
      {text: "Avada Kedabra"},
      {text: "Alohomora", isCorrect: true},
      {text: "Expecto Patronus"},
    ]
  },
  {
    question: "What is the name of Harry Potter's owl?",
    answers: [
      {text: "Dobby"},
      {text: "Hedwig", isCorrect: true},
      {text: "Errol"},
    ]
  },
  {
    question: "What is the street address of the Dursley home? ",
    answers: [
      {text: "12 Grimmauld Place"},
      {text: "4 Privet Drive", isCorrect: true},
      {text: "3 Little Hangleton"},
    ]
  },
  {
    question: "What color were the flames that came out of the Goblet of Fire?",
    answers: [
      {text: "Blue", isCorrect: true},
      {text: "Red"},
      {text: "Green"},
    ]
  },
  {
    question: "Which of the Hogwarts founders created the Chamber of Secrets?",
    answers: [
      {text: "Salazar Slytherin", isCorrect: true},
      {text: "Rowena Ravenclaw"},
      {text: "Zacharias Smith"},
    ]
  },
  {
    question: "What Animagus form is taken by Sirius Black?",
    answers: [
      {text: "Dog", isCorrect: true},
      {text: "Werewolf"},
      {text: "Stag"},
    ]
  },
  {
    question: "How many years has Scabbers been in the Weasley family?",
    answers: [
      {text: "12", isCorrect: true},
      {text: "10"},
      {text: "7"},
    ]
  },
  {
    question: "Which of these objects is not a component of the Deathly Hallows?",
    answers: [
      {text: "Cloak of Invisibility"},
      {text: "Elder Wand"},
      {text: "Sorcerer's Stone", isCorrect: true},
    ]
  },
  {
    question: "What is the form of Hermione's patronus? ",
    answers: [
      {text: "Otter", isCorrect: true},
      {text: "Rabbit"},
      {text: "Dove"},
    ]
  },
  {
    question: "When is Harry's birthday?",
    answers: [
      {text: "July 31", isCorrect: true},
      {text: "September 30"},
      {text: "October 31"},
    ]
  },
];

var score = 0;
var iQuestion = 0;

//my code
var quote = [
  "You failed :( did you even try bro?",
  "You failed :( go watch a Harry Potter Marathon and come back",
  "So... you know stuff, but still it doesn't make you a wizard yet",
  "YOU ARE THE CHOSEN ONE! It's time to celebrate with a butterbeer ;)",
];

var audio = $("#hp");
function pauseAudio() {
  audio.pause();
};


var gifs = $(".gif");

  var right = {
    arr: $(".right"),
    myVar: 0,
  };
  var wrong = {
    arr: $(".wrong"),
    myVar: 0,
  };

  var fScoreGif = $(".fscore");


function updateGif(answerType) {
  if(answerType.myVar >= answerType.arr.length){
    answerType.myVar = 0;
  }
   answerType.arr[answerType.myVar].classList.remove("hide");
        setTimeout(function(){
          answerType.arr[answerType.myVar].classList.add("hide");
          return answerType.myVar++;
        },2000); 
}
//

function updateQuestionAndScore() {
  if (iQuestion >= questions.length) {
    $('.question')[0].outerHTML = '';
    var myAns = $(".answer");
    for(let a = 0; a < myAns.length; a++){
      myAns[a].outerHTML = "";
    }

    if(score === 0){
      for(let s = 0; s < fScoreGif.length; s++){
        if(fScoreGif[s].id === "mudblood"){
          fScoreGif[s].classList.remove("hide");
          $(".finish")[0].innerHTML = quote[0];
        }
    }
  } else if (score > 0 && score <= 5){
    for(let s = 0; s < fScoreGif.length; s++){
      if(fScoreGif[s].id === "srslywhat"){
        fScoreGif[s].classList.remove("hide");
        $(".finish")[0].innerHTML = quote[1];
      }
  }
 } else if(score > 5 && score <= 8){
    for(let s = 0; s < fScoreGif.length; s++){
      if(fScoreGif[s].id === "snape"){
        fScoreGif[s].classList.remove("hide");
        $(".finish")[0].innerHTML = quote[2];
      }
  }
} else if(score > 8 && score <= 10){
  for(let s = 0; s < fScoreGif.length; s++){
    if(fScoreGif[s].id === "wizard"){
      fScoreGif[s].classList.remove("hide");
      $(".finish")[0].innerHTML = quote[3];
    }
  }
};
    return;
}
  $('.score')[0].innerHTML = score;  
  $('.question')[0].innerHTML = questions[iQuestion].question;
  var answers = $('.answer');
  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = questions[iQuestion].answers[i].text;
  }
}


document.addEventListener("DOMContentLoaded", function(event) { 
  var answers = $(".answer");
  for (let i = 0; i < answers.length; i++) {
    answers[i].onclick = function() {
      if (questions[iQuestion].answers[i].isCorrect) {
        score++;
        updateGif(right);
      } else {
        updateGif(wrong);
      }
      iQuestion++;
      updateQuestionAndScore();
    } 
  }
  updateQuestionAndScore(); 
});
