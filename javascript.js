const questions = [
  {
    text: "Hat die Globalisierung Nachteile?",
    options: [
      { text: "Nein, gar keine", correct: false },
      { text: "Ja, nur einen", correct: false },
      { text: "Globalisierung ist negativ", correct: false },
      { text: "Ja, aber die Anzahl von Nachteilen und Vorteilen ist ungefähr gleich", correct: true }
    ]
  },
  {
    text: "Welche Beziehungen bestehen aktuell zwischen China und den USA?",
    options: [
      { text: "Kooperationspartner", correct: false },
      { text: "Rivalisierende Beziehungen", correct: true },
      { text: "Wirtschaftliche Partnerschaft", correct: false },
      { text: "Keine Beziehungen", correct: false }
    ]
  },
  {
    text: "Welche neuen Allianzen entstehen heute?",
    options: [
      { text: "Keine", correct: false },
      { text: "Länder arbeiten allein", correct: false },
      { text: "Neue Bündnisse zwischen Ländern, die früher kaum zusammengearbeitet haben", correct: true }
    ]
  },
  {
    text: "Wie sind die Beziehungen zwischen Russland und dem Westen heute?",
    options: [
      { text: "Freundschaftlich", correct: false },
      { text: "Neutral", correct: false },
      { text: "Konfliktreich und angespannt", correct: true },
      { text: "Ohne Kontakt", correct: false }
    ]
  }
];

const quizEl = document.getElementById('quiz');
const progressText = document.getElementById('progress-text');
const remainingText = document.getElementById('remaining-text');
const progressFill = document.getElementById('progress-fill');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');
const resultEl = document.getElementById('result');

function renderQuiz() {
  quizEl.innerHTML = '';
  questions.forEach((q, qi) => {
    const qWrap = document.createElement('div');
    qWrap.className = 'question';

    const qText = document.createElement('div');
    qText.className = 'question-text';
    qText.textContent = `${qi + 1}. ${q.text}`;
    qWrap.appendChild(qText);

    
    if (qi === 0) {
      const imgBlock = document.createElement('div');
      imgBlock.className = 'image-block';

      const img = document.createElement('img');
      img.src = './frage-1.jpg'; 
      img.alt = 'Darstellung der Globalisierung';

      const source = document.createElement('div');
      source.className = 'image-source';
      source.innerHTML =
        'Darstellung der Globalisierung<br>' +
        'Abrufdatum: 22.01.2026<br>' +
        'URL : https://www.geeksforgeeks.org/macroeconomics/what-is-globalisation-explain-advantages-disadvantages-and-types-of-globalisation/';

      imgBlock.appendChild(img);
      imgBlock.appendChild(source);
      qWrap.appendChild(imgBlock);
    }

   
    if (qi === 1) {
      const imgBlock = document.createElement('div');
      imgBlock.className = 'image-block';

      const img = document.createElement('img');
      img.src = './frage-2.jpg'; 
      img.alt = 'Beziehungen zwischen China und den USA';

      const source = document.createElement('div');
      source.className = 'image-source';
      source.innerHTML =
        'Darstellung der Beziehungen zwischen China und den USA<br>' +
        'Abrufdatum: 22.01.2026<br>' +
        'URL: https://share.google/images/VZHMxS7ochP5BLTEy';

      imgBlock.appendChild(img);
      imgBlock.appendChild(source);
      qWrap.appendChild(imgBlock);
    }


    const options = document.createElement('div');
    options.className = 'options';

    q.options.forEach((opt, oi) => {
      const id = `q${qi}_o${oi}`;
      const label = document.createElement('label');
      label.className = 'option-label';
      label.setAttribute('for', id);

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${qi}`;
      input.id = id;
      input.value = oi;
      input.addEventListener('change', onAnswerChange);

      const span = document.createElement('span');
      span.className = 'option-text';
      span.textContent = opt.text;

      label.appendChild(input);
      label.appendChild(span);
      options.appendChild(label);
    });

    qWrap.appendChild(options);
    quizEl.appendChild(qWrap);
  });

  updateProgress();
}


function onAnswerChange() {
  const name = this.name;
  const inputs = document.querySelectorAll(`input[name="${name}"]`);
  inputs.forEach(inp => {
    const lbl = inp.closest('.option-label');
    lbl.classList.toggle('selected', inp.checked);
  });
  updateProgress();
}

function updateProgress() {
  const total = questions.length;
  let answered = 0;

  questions.forEach((_, i) => {
    if (document.querySelector(`input[name="q${i}"]:checked`)) answered++;
  });

  const remaining = total - answered;
  const percent = Math.round((answered / total) * 100);

  progressText.textContent = `${answered} / ${total} beantwortet`;
  remainingText.textContent = `Verbleibend: ${remaining}`;
  progressFill.style.width = `${percent}%`;

  checkBtn.disabled = answered !== total;
  resultEl.textContent = '';
}

function checkAnswers() {
  let score = 0;

  questions.forEach((q, qi) => {
    const selected = document.querySelector(`input[name="q${qi}"]:checked`);
    const inputs = document.querySelectorAll(`input[name="q${qi}"]`);

    inputs.forEach(inp => {
      const lbl = inp.closest('.option-label');
      lbl.classList.remove('option-correct', 'option-wrong');
      inp.disabled = true;
    });

    if (!selected) return;

    const chosenIndex = Number(selected.value);
    if (q.options[chosenIndex].correct) score++;

    q.options.forEach((opt, oi) => {
      const inp = document.getElementById(`q${qi}_o${oi}`);
      const lbl = inp.closest('.option-label');

      if (opt.correct) lbl.classList.add('option-correct');
      if (inp.checked && !opt.correct) lbl.classList.add('option-wrong');
    });
  });

  resultEl.textContent = `Ergebnis: ${score} von ${questions.length} richtig.`;
  checkBtn.disabled = true;
}

function resetQuiz() {
  renderQuiz();
  resultEl.textContent = '';
  progressFill.style.width = '0%';
}

renderQuiz();
checkBtn.addEventListener('click', checkAnswers);
resetBtn.addEventListener('click', resetQuiz);
