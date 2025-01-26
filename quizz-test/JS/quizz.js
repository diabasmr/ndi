const mediaQuery = window.matchMedia('(max-width: 900px)');
var niveau_eau = 0
haut = 183
haut2 = 163
const questions = [
    { question: "Les océans produisent environ 70% de l'oxygène que nous respirons.", answer: "true" },
    { question: "Les récifs coralliens absorbent plus de CO2 que les forêts.", answer: "false" },
    { question: "Le phytoplancton est responsable de la majorité de l'oxygène produit par les océans.", answer: "true" },
    { question: "La circulation océanique est essentielle pour maintenir un climat stable sur Terre.", answer: "true" },
    { question: "Les mangroves agissent comme une barrière protectrice contre les tempêtes.", answer: "true" },
    { question: "Les océans se réchauffent plus vite que notre corps en cas de fièvre.", answer: "false" },
    { question: "Les courants océaniques influencent uniquement les régions proches des côtes.", answer: "false" },
    { question: "La température des océans est uniforme partout.", answer: "false" },
    { question: "L'acidification des océans endommage leur 'peau' en affectant la vie marine comme les coraux.", answer: "true" },
    { question: "Les dauphins communiquent entre eux par des signaux sonores semblables aux nerfs dans le corps humain.", answer: "true" },
    { question: "Les récifs coralliens n'ont aucun impact sur la communication entre les espèces marines.", answer: "false" },
    { question: "Le bruit généré par un récif corallien en bonne santé peut être entendu à plusieurs kilomètres sous l’eau.", answer: "true" },
    { question: "Les océans contiennent assez d'eau pour remplir environ 1 000 cœurs humains.", answer: "false" },
    { question: "Les océans sont responsables de la plupart des perturbations climatiques.", answer: "false" },
    { question: "La pollution plastique n'affecte que les océans de surface.", answer: "false" }
];


function shuffleQuestions(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}


shuffleQuestions(questions);
const selectedQuestions = questions.slice(0, 5);

let currentQuestionIndex = 0;

function showQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    document.getElementById("questionText").textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
}


function checkAnswer(answer) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (mediaQuery.matches) {
        if (answer === currentQuestion.answer) {
            niveau_eau -= 1
            console.log(haut2 - niveau_eau)
            document.querySelector('.mer').style.top = Math.min(163, haut2 - niveau_eau * 5) + 'px'
            document.body.classList.add("green");
            document.body.classList.remove("red");
        } else {
            niveau_eau += 1
            console.log(haut2 - niveau_eau)
            document.querySelector('.mer').style.top = Math.min(163, haut2 - niveau_eau * 5) + 'px'
            document.body.classList.add("red");
            document.body.classList.remove("green");
        }
      } else {
        if (answer === currentQuestion.answer) {
            niveau_eau -= 1
            console.log(haut - niveau_eau)
            document.querySelector('.mer').style.top = Math.min(183, haut - niveau_eau * 5) + 'px'
            document.body.classList.add("green");
            document.body.classList.remove("red");
        } else {
            niveau_eau += 1
            console.log(haut - niveau_eau)
            document.querySelector('.mer').style.top = Math.min(183, haut - niveau_eau * 5) + 'px'
            document.body.classList.add("red");
            document.body.classList.remove("green");
        }
      }

    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
        document.body.classList.remove("green", "red");
    } else {
        document.getElementById("quizzPage").innerHTML = "<h2>Félicitations, vous avez terminé le quiz !</h2>";
    }
}


document.getElementById("trueButton").addEventListener("click", function() {
    checkAnswer("true");
});

document.getElementById("falseButton").addEventListener("click", function() {
    checkAnswer("false");
});


showQuestion();

/*var niveau_eau = 0
haut = 202
//cas de la réponse fausse
document.querySelectorAll('.f').forEach(function (element) {
    element.addEventListener('click', function (e) {
        niveau_eau += 1
        console.log(haut - niveau_eau)
        document.querySelector('.mer').style.top = Math.min(202, haut - niveau_eau * 5) + 'px'
        e.target.parentElement.querySelectorAll('button').forEach(function (element) {
            element.style.display = 'none'
        })
    })
})
//cas de la réponse vraie
document.querySelectorAll('.v').forEach(function (element) {
    element.addEventListener('click', function (e) {
        niveau_eau -= 1
        console.log(haut - niveau_eau)
        document.querySelector('.mer').style.top = Math.min(202, haut - niveau_eau * 5) + 'px'
        e.target.parentElement.querySelectorAll('button').forEach(function (element) {
            element.style.display = 'none'
        })
    })
})
document.querySelectorAll('.q6-3 .v, .q6-3 .f').forEach(function (element) {
    element.addEventListener('click', function (e) {
        alert('Vous avez évité que la ville soit submergée')
        document.querySelector('.message').style.display = 'block'
    })
})*/