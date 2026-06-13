// Variables globales
let currentDifficulty = 0;
let currentOperation = '';
let num1 = 0;
let num2 = 0;
let correctAnswer = 0;
let userAnswered = false;
let problemCount = 0;
let stepsVisible = false;
let hintShown = false;

// Estadísticas
let stats = {
    totalAttempts: 0,
    correctAnswers: 0
};

// Cargar estadísticas del localStorage
function loadStats() {
    const savedStats = localStorage.getItem('arithmeticStats');
    if (savedStats) {
        stats = JSON.parse(savedStats);
        updateStatsDisplay();
    }
}

// Guardar estadísticas en localStorage
function saveStats() {
    localStorage.setItem('arithmeticStats', JSON.stringify(stats));
    updateStatsDisplay();
}

// Actualizar display de estadísticas
function updateStatsDisplay() {
    document.getElementById('totalAttempts').textContent = stats.totalAttempts;
    document.getElementById('correctCount').textContent = stats.correctAnswers;
    
    let percentage = 0;
    if (stats.totalAttempts > 0) {
        percentage = Math.round((stats.correctAnswers / stats.totalAttempts) * 100);
    }
    document.getElementById('percentage').textContent = percentage + '%';
}

// Reiniciar estadísticas
function resetStats() {
    if (confirm('¿Estás seguro de que deseas reiniciar las estadísticas?')) {
        stats = { totalAttempts: 0, correctAnswers: 0 };
        saveStats();
    }
}

// Obtener elementos del DOM
const screens = {
    main: document.getElementById('mainScreen'),
    operation: document.getElementById('operationScreen'),
    problem: document.getElementById('problemScreen')
};

// ========== NAVEGACIÓN ==========

function selectDifficulty(difficulty) {
    currentDifficulty = difficulty;
    updateDifficultyTitle();
    showScreen('operation');
    problemCount = 0;
    hintShown = false;
}

function backToMain() {
    userAnswered = false;
    stepsVisible = false;
    hintShown = false;
    document.getElementById('userAnswer').value = '';
    showScreen('main');
}

function backToOperation() {
    userAnswered = false;
    stepsVisible = false;
    hintShown = false;
    document.getElementById('userAnswer').value = '';
    showScreen('operation');
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function updateDifficultyTitle() {
    const titles = {
        1: '✏️ Problemas de 1 Cifra',
        2: '📓 Problemas de 2 Cifras',
        3: '🏫 Problemas de 3 Cifras'
    };
    document.getElementById('difficultyTitle').textContent = titles[currentDifficulty];
}

// ========== GENERACIÓN DE NÚMEROS ==========

function getRandomNumber(difficulty) {
    const ranges = {
        1: { min: 1, max: 9 },
        2: { min: 10, max: 99 },
        3: { min: 100, max: 999 }
    };
    const range = ranges[difficulty];
    return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
}

// ========== INICIO DE PROBLEMA ==========

function startProblem(operation) {
    if (operation === 'mixta') {
        currentOperation = Math.random() > 0.5 ? 'suma' : 'resta';
    } else {
        currentOperation = operation;
    }
    generateProblem();
    showScreen('problem');
    problemCount++;
    updateProgress();
}

function generateProblem() {
    num1 = getRandomNumber(currentDifficulty);
    num2 = getRandomNumber(currentDifficulty);

    // Para resta, asegurar que el resultado no sea negativo
    if (currentOperation === 'resta' && num2 > num1) {
        [num1, num2] = [num2, num1];
    }

    // Calcular respuesta correcta
    if (currentOperation === 'suma') {
        correctAnswer = num1 + num2;
    } else {
        correctAnswer = num1 - num2;
    }

    userAnswered = false;
    stepsVisible = false;
    hintShown = false;
    document.getElementById('userAnswer').value = '';
    document.getElementById('hintBox').style.display = 'none';
    document.getElementById('steps').style.display = 'none';
    displayProblem();
}

function displayProblem() {
    const operationTitle = {
        'suma': '➕ Problema de Suma',
        'resta': '➖ Problema de Resta'
    };

    document.getElementById('operationTitle').textContent = operationTitle[currentOperation];
    document.getElementById('num1').textContent = num1;
    document.getElementById('operator').textContent = currentOperation === 'suma' ? '+' : '−';
    document.getElementById('num2').textContent = num2;
    document.getElementById('answer').textContent = '?';
    document.getElementById('answer').style.color = '';
    document.getElementById('answer').style.fontWeight = '';

    displaySteps();
}

// ========== ACTUALIZAR PROGRESO ==========

function updateProgress() {
    const maxProblems = 10;
    const percentage = Math.min((problemCount / maxProblems) * 100, 100);
    document.getElementById('progressFill').style.width = percentage + '%';
}

// ========== MOSTRAR/OCULTAR PASOS ==========

function toggleSteps() {
    stepsVisible = !stepsVisible;
    const stepsContainer = document.getElementById('steps');
    const button = document.querySelector('.btn-toggle');
    
    if (stepsVisible) {
        stepsContainer.style.display = 'block';
        button.textContent = '📋 Ocultar Pasos';
    } else {
        stepsContainer.style.display = 'none';
        button.textContent = '📋 Mostrar Pasos';
    }
}

// ========== MOSTRAR PASOS ==========

function displaySteps() {
    const stepsContainer = document.getElementById('steps');
    stepsContainer.innerHTML = '';

    if (currentOperation === 'suma') {
        displaySumaSteps();
    } else {
        displayRestaSteps();
    }
}

function displaySumaSteps() {
    const stepsContainer = document.getElementById('steps');

    // Paso 1: Presentación
    addStep(`Sumamos: <strong>${num1}</strong> + <strong>${num2}</strong>`);

    // Paso 2: Desglose por dígitos
    if (currentDifficulty === 1) {
        addStep(`Como ambos son de 1 cifra: <strong>${num1} + ${num2} = ${correctAnswer}</strong>`);
    } else if (currentDifficulty === 2) {
        const decenas1 = Math.floor(num1 / 10) * 10;
        const unidades1 = num1 % 10;
        const decenas2 = Math.floor(num2 / 10) * 10;
        const unidades2 = num2 % 10;
        
        addStep(`Desglosamos: (<strong>${decenas1} + ${unidades1}</strong>) + (<strong>${decenas2} + ${unidades2}</strong>)`);
        addStep(`Sumamos decenas: <strong>${decenas1} + ${decenas2} = ${decenas1 + decenas2}</strong>`);
        addStep(`Sumamos unidades: <strong>${unidades1} + ${unidades2} = ${unidades1 + unidades2}</strong>`);
        addStep(`Resultado final: <strong>${decenas1 + decenas2 + unidades1 + unidades2} = ${correctAnswer}</strong>`);
    } else if (currentDifficulty === 3) {
        const centenas1 = Math.floor(num1 / 100) * 100;
        const decenas1 = Math.floor((num1 % 100) / 10) * 10;
        const unidades1 = num1 % 10;
        const centenas2 = Math.floor(num2 / 100) * 100;
        const decenas2 = Math.floor((num2 % 100) / 10) * 10;
        const unidades2 = num2 % 10;

        addStep(`Desglosamos: (<strong>${centenas1} + ${decenas1} + ${unidades1}</strong>) + (<strong>${centenas2} + ${decenas2} + ${unidades2}</strong>)`);
        addStep(`Sumamos centenas: <strong>${centenas1} + ${centenas2} = ${centenas1 + centenas2}</strong>`);
        addStep(`Sumamos decenas: <strong>${decenas1} + ${decenas2} = ${decenas1 + decenas2}</strong>`);
        addStep(`Sumamos unidades: <strong>${unidades1} + ${unidades2} = ${unidades1 + unidades2}</strong>`);
        addStep(`Resultado final: <strong>${centenas1 + centenas2 + decenas1 + decenas2 + unidades1 + unidades2} = ${correctAnswer}</strong>`);
    }
}

function displayRestaSteps() {
    const stepsContainer = document.getElementById('steps');

    // Paso 1: Presentación
    addStep(`Restamos: <strong>${num1}</strong> − <strong>${num2}</strong>`);

    // Paso 2: Desglose por dígitos
    if (currentDifficulty === 1) {
        addStep(`Como ambos son de 1 cifra: <strong>${num1} − ${num2} = ${correctAnswer}</strong>`);
    } else if (currentDifficulty === 2) {
        const decenas1 = Math.floor(num1 / 10) * 10;
        const unidades1 = num1 % 10;
        const decenas2 = Math.floor(num2 / 10) * 10;
        const unidades2 = num2 % 10;
        
        addStep(`Desglosamos: (<strong>${decenas1} + ${unidades1}</strong>) − (<strong>${decenas2} + ${unidades2}</strong>)`);
        addStep(`Restamos decenas: <strong>${decenas1} − ${decenas2} = ${decenas1 - decenas2}</strong>`);
        addStep(`Restamos unidades: <strong>${unidades1} − ${unidades2} = ${unidades1 - unidades2}</strong>`);
        addStep(`Resultado final: <strong>${decenas1 - decenas2 + unidades1 - unidades2} = ${correctAnswer}</strong>`);
    } else if (currentDifficulty === 3) {
        const centenas1 = Math.floor(num1 / 100) * 100;
        const decenas1 = Math.floor((num1 % 100) / 10) * 10;
        const unidades1 = num1 % 10;
        const centenas2 = Math.floor(num2 / 100) * 100;
        const decenas2 = Math.floor((num2 % 100) / 10) * 10;
        const unidades2 = num2 % 10;

        addStep(`Desglosamos: (<strong>${centenas1} + ${decenas1} + ${unidades1}</strong>) − (<strong>${centenas2} + ${decenas2} + ${unidades2}</strong>)`);
        addStep(`Restamos centenas: <strong>${centenas1} − ${centenas2} = ${centenas1 - centenas2}</strong>`);
        addStep(`Restamos decenas: <strong>${decenas1} − ${decenas2} = ${decenas1 - decenas2}</strong>`);
        addStep(`Restamos unidades: <strong>${unidades1} − ${unidades2} = ${unidades1 - unidades2}</strong>`);
        addStep(`Resultado final: <strong>${centenas1 - centenas2 + decenas1 - decenas2 + unidades1 - unidades2} = ${correctAnswer}</strong>`);
    }
}

function addStep(stepText) {
    const stepsContainer = document.getElementById('steps');
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step';
    stepDiv.innerHTML = stepText;
    stepsContainer.appendChild(stepDiv);
}

// ========== PISTA ==========

function showHint() {
    if (hintShown) return;
    
    hintShown = true;
    const hintBox = document.getElementById('hintBox');
    let hintText = '';
    
    if (currentOperation === 'suma') {
        if (currentDifficulty === 1) {
            hintText = `💡 Pista: Cuenta desde ${num1} hacia adelante ${num2} números.`;
        } else if (currentDifficulty === 2) {
            hintText = `💡 Pista: ${num1} + ${num2} está cerca de ${correctAnswer - 5} a ${correctAnswer + 5}.`;
        } else {
            hintText = `💡 Pista: El resultado tiene ${String(correctAnswer).length} dígitos.`;
        }
    } else {
        if (currentDifficulty === 1) {
            hintText = `💡 Pista: Cuenta hacia atrás desde ${num1} ${num2} números.`;
        } else if (currentDifficulty === 2) {
            hintText = `💡 Pista: ${num1} − ${num2} está cerca de ${correctAnswer - 5} a ${correctAnswer + 5}.`;
        } else {
            hintText = `💡 Pista: El resultado tiene ${String(correctAnswer).length} dígitos.`;
        }
    }
    
    hintBox.innerHTML = hintText;
    hintBox.style.display = 'block';
}

// ========== VALIDACIÓN DE RESPUESTA ==========

function checkAnswer() {
    if (userAnswered) {
        nextProblem();
        return;
    }

    const userAnswer = parseInt(document.getElementById('userAnswer').value);

    if (isNaN(userAnswer)) {
        alert('Por favor, ingresa un número válido');
        return;
    }

    userAnswered = true;
    stats.totalAttempts++;

    if (userAnswer === correctAnswer) {
        stats.correctAnswers++;
        showCorrectMessage();
    } else {
        showIncorrectMessage();
    }
    
    saveStats();
}

function showCorrectMessage() {
    playCorrectSound();
    const answerInput = document.getElementById('userAnswer');
    answerInput.style.borderColor = '#28a745';
    answerInput.style.borderWidth = '3px';
    document.getElementById('answer').textContent = correctAnswer;
    document.getElementById('answer').style.color = '#28a745';
    document.getElementById('answer').style.fontWeight = 'bold';

    // Mostrar mensaje
    const problemCard = document.querySelector('.problem-card');
    const existingMessage = problemCard.querySelector('.result-message');
    if (existingMessage) existingMessage.remove();

    const message = document.createElement('div');
    message.className = 'result-message correct';
    message.innerHTML = '✅ ¡Correcto! Excelente trabajo';
    problemCard.appendChild(message);
}

function showIncorrectMessage() {
    playIncorrectSound();
    const answerInput = document.getElementById('userAnswer');
    answerInput.style.borderColor = '#f5c6cb';
    answerInput.style.borderWidth = '3px';

    // Mostrar mensaje
    const problemCard = document.querySelector('.problem-card');
    const existingMessage = problemCard.querySelector('.result-message');
    if (existingMessage) existingMessage.remove();

    const message = document.createElement('div');
    message.className = 'result-message incorrect';
    message.innerHTML = `❌ Incorrecto. La respuesta correcta es <strong>${correctAnswer}</strong>`;
    problemCard.appendChild(message);
}

// ========== SONIDOS ==========

function playCorrectSound() {
    // Crear sonido de éxito de forma programática
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;

    // Notas: DO - MI - SOL (notas alegres)
    const notes = [262, 330, 392]; // Hz
    const duration = 0.3;

    notes.forEach((frequency, index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.frequency.value = frequency;
        osc.type = 'sine';

        gain.gain.setValueAtTime(0.3, now + index * duration);
        gain.gain.exponentialRampToValueAtTime(0.01, now + index * duration + duration);

        osc.start(now + index * duration);
        osc.stop(now + index * duration + duration);
    });
}

function playIncorrectSound() {
    // Crear sonido de error de forma programática
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;

    // Notas bajas: SOL - RE (notas tristes)
    const notes = [392, 147]; // Hz
    const duration = 0.2;

    notes.forEach((frequency, index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.frequency.value = frequency;
        osc.type = 'sine';

        gain.gain.setValueAtTime(0.3, now + index * duration);
        gain.gain.exponentialRampToValueAtTime(0.01, now + index * duration + duration);

        osc.start(now + index * duration);
        osc.stop(now + index * duration + duration);
    });
}

// ========== SIGUIENTE PROBLEMA ==========

function nextProblem() {
    userAnswered = false;
    stepsVisible = false;
    hintShown = false;
    const answerInput = document.getElementById('userAnswer');
    answerInput.style.borderColor = '#667eea';
    answerInput.style.borderWidth = '2px';
    answerInput.value = '';
    document.getElementById('hintBox').style.display = 'none';
    document.getElementById('steps').style.display = 'none';
    document.querySelector('.btn-toggle').textContent = '📋 Mostrar Pasos';
    generateProblem();
}

// ========== LIMPIAR RESPUESTA ==========

function clearAnswer() {
    document.getElementById('userAnswer').value = '';
    document.getElementById('userAnswer').focus();
}

// ========== MANEJO DE EVENTOS ==========

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
}

// ========== INICIALIZAR ==========

window.addEventListener('DOMContentLoaded', () => {
    loadStats();
});
