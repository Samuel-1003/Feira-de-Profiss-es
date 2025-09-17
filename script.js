const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const missionScreen = document.getElementById('mission-screen');
const missionTitle = document.getElementById('mission-title');
const optionsDiv = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const endScreen = document.getElementById('end-screen');
const emailInput = document.getElementById('email-input');
const sendEmailBtn = document.getElementById('send-email-btn');
const emailFeedback = document.getElementById('email-feedback');

let currentMission = 0;

// Mini-missões de múltipla escolha
const missions = [
    {
        title: "Missão 1: Escolha a opção correta",
        options: ["print('Olá')", "console.log('Olá')", "echo('Olá')"],
        answer: 1
    },
    {
        title: "Missão 2: Qual comando imprime no Python?",
        options: ["print()", "echo()", "console.log()"],
        answer: 0
    },
    {
        title: "Missão 3: O que é um loop?",
        options: ["Repetição de código", "Variável", "Função"],
        answer: 0
    }
];

// Função para mostrar missão
function showMission() {
    missionTitle.textContent = missions[currentMission].title;
    optionsDiv.innerHTML = '';
    missions[currentMission].options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.addEventListener('click', () => checkAnswer(index));
        optionsDiv.appendChild(btn);
    });
}

// Checar resposta
function checkAnswer(index) {
    if(index === missions[currentMission].answer){
        alert("✅ Correto!");
        nextBtn.classList.remove('hidden');
    } else {
        alert("❌ Tente novamente!");
    }
}

// Avançar para próxima missão ou final
nextBtn.addEventListener('click', () => {
    currentMission++;
    if(currentMission < missions.length){
        showMission();
        nextBtn.classList.add('hidden');
    } else {
        missionScreen.classList.add('hidden');
        endScreen.classList.remove('hidden');
    }
});

// Tela inicial -> iniciar
startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    missionScreen.classList.remove('hidden');
    showMission();
});

// Envio de e-mail (simulado)
sendEmailBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if(email.includes('@')){
        emailFeedback.textContent = "🎉 E-mail enviado! Confira seu mini certificado!";
        sendEmailBtn.disabled = true;
        emailInput.disabled = true;
    } else {
        emailFeedback.textContent = "⚠️ Digite um e-mail válido!";
    }
});
