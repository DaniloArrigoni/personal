const questions = [
  {
    type: "multiple",
    question: "Qual è la nota che segue il Fa?",
    options: ["Sol", "Mi", "Re", "La"],
    correct: "Sol"
  },
  {
    type: "boolean",
    question: "Il Do è una nota musicale.",
    correct: true
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("start-btn").style.display = "none";
  const repeatBtnContainer = document.getElementById("repeat-btn");
  repeatBtnContainer.innerHTML = ""; 
  currentQuestion = 0;
  score = 0;
  showQuestion();
  document.getElementById("replay-btn").style.display = "none";
}

function showQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById("quiz-container");
  container.innerHTML = `<p>${q.question}</p>`;

  if (q.type === "multiple") {
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("quiz-button");
      btn.onclick = () => checkAnswer(option);
      container.appendChild(btn);
    });
  } else if (q.type === "boolean") {
    ["Vero", "Falso"].forEach(val => {
      const btn = document.createElement("button");
      btn.textContent = val;
      btn.classList.add("quiz-button");
      btn.onclick = () => checkAnswer(val === "Vero");
      container.appendChild(btn);
    });
  }
}

function checkAnswer(answer) {
  const q = questions[currentQuestion];
  if (answer === q.correct) score++;

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("result").innerText = `Risposte esatte: ${score} su ${questions.length}`;

    const repeatBtn = document.createElement("button");
    repeatBtn.textContent = "Ripeti il quiz";
    repeatBtn.onclick = startQuiz;  // Ripristina il quiz
    repeatBtn.classList.add("quiz-button");  // Aggiungi la classe per lo stile del bottone
    document.getElementById("repeat-btn").appendChild(repeatBtn);
  } 
}

//Form

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Impedisce il comportamento predefinito (invio del form)

  // Mostra il messaggio di conferma
  const messageDiv = document.getElementById("messaggio-invio");
  messageDiv.innerHTML = "Form inviato correttamente!";

  // Puoi anche nascondere il messaggio dopo alcuni secondi, se lo desideri:
  setTimeout(() => {
    messageDiv.innerHTML = "";
  }, 3000);  // Nasconde il messaggio dopo 3 secondi
});




