console.log("hello");

window.onload = function(){
    show(0);
}

let questions = [
    {
      id: 1,
      question: "Which book is written by Jhumpa Lahiri?",
      answer: "Interpreter of Maladies",
      options: [
        "Interpreter of Maladies",
        "Far East Front",
        "The Second",
        "The Conscious Lovers"
      ],
      attempted: 0,
    },
    {
      id: 2,
      question: "'Natyashastra' is written by?",
      answer: "Bharat Muni",
      options: [
        "Bharat Muni",
        "Narad Muni",
        "Tandu Muni",
        "Abhinav Gupta"
      ],
      attempted: 0,
    },
    {
      id: 3,
      question: "Who is the writer of 'The Alchemist'",
      answer: "Paulo Cohelo",
      options: [
        "Enyid Bylton",
        "Roald Dahl",
        "Paulo Cohelo",
        "None of these"
      ],
      attempted: 0,
    },
    {
        id: 4,
        question: "Business @ The Speed of Thought is written by?",
        answer: "Bill gates",
        options: [
          "Bill clinton",
          "Bill gates",
          "Barack Obama",
          "Elon musk"
        ],
        attempted: 0,
      },
      {
        id: 5,
        question: "Unhappy India is written by?",
        answer: "Lala Lajpat Rai",
        options: [
          "Lala Lajpat Rai",
          "M.K Gandhi",
          "B.G Tilak",
          "None of these"
        ],
        attempted: 0,
      },
      {
        id: 6,
        question: "Outsider is written by?",
        answer: "Alber Camus",
        options: [
          "Alber Speer",
          "Moraes Dom",
          "Alber Camus",
          "John Dryden"
        ],
        attempted: 0,
      },
      {
        id: 7,
        question: "Justice in Wartime is written by?",
        answer: "Bertrand Russell",
        options: [
          "Alber Speer",
          "Bertrand Russell",
          "H.B stove",
          "Irving Stone"
        ],
        attempted: 0,
      },
      {
        id: 8,
        question: "Panchatarta is written by?",
        answer: "Vishnu Sharma",
        options: [
          "Vishnu Sharma",
          "V.S Naipaul",
          "L.K Advani",
          "None of these"
        ],
        attempted: 0,
      },
      {
        id: 9,
        question: "'Rag Miyan ki Malhar' is written by?",
        answer: "Tansen",
        options: [
          "Amir Khusro",
          "Tansen",
          "Baiju Bawra",
          "Swami Haridas"
        ],
        attempted: 0,
      },
      {
        id: 10,
        question: "Prisoner's Scrapbook is written by?",
        answer: "L.k Advani",
        options: [
          "Madan Mohan Malviya",
          "Charles Shobraj",
          "L.k Advani",
          "M.K Gandhi"
        ],
        attempted: 0,
      },
  ];

  function submitForm(e){
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    //store player name
    sessionStorage.setItem("name", name);

    //location chaged here
    location.href = "quiz.html";
    console.log(name);
}

let question_count = 0;
let point = 0;
let point_initial = 0;

function next(){
    let user_answer = document.querySelector("li.option.active").innerHTML;
    
    point_initial = point;
    
    //checking if the answer is right
    if(user_answer == questions[question_count].answer){
        //increasing the point
        point = point + 10;
        sessionStorage.setItem("points", point);
    }
    
    if(question_count<9)
    {
        questions[question_count].attempted = 1;
        question_count++;
        show(question_count);
    }
    else if(question_count == 9)
    {
        question_count++;
        endpage();
    }
    console.log(point);
}

function previous(){

    if((question_count>0) && (questions[question_count].attempted == 0))
    {
        point = point_initial;
        question_count--;
    }
    show(question_count);
}

function show(count){
    let question = document.getElementById("questions");

    //question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = `<h2> Q.${count+1}  ${questions[count].question} </h2>
    <ul class="option_group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul>`;
    
    toggleActive()
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");

    for(let i = 0; i < option.length; i++){
        option[i].onclick = function(){
            for(let j = 0; j < option.length ; j++){
                if(option[j].classList.contains("active"))
                {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function endpage(){
    location.href = "end.html";
}

