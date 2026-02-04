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
      { text: "EU", correct: false },
      { text: "keine ", correct: false },
      { text: "Board of Peace & Coalition of the Willing", correct: true }
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
  },
    {
    text: " Was bedeutet Inflation?",
    options: [
      { text: "Dass Geld mehr wert wird", correct: false },
      { text: "Dass Waren billiger werden", correct: false },
      { text: "Dass die gleiche Geldmenge weniger wert ist", correct: true },
      { text: "Dass man mehr Geld bekommt", correct: false }
    ]
  },
      {
    text: "Welche Organisation ist für  militärische Sicherheit?",
    options: [
      { text: "EU", correct: false },
      { text: "UNO", correct: false },
      { text: "NATO", correct: true },
      { text: "WHO", correct: false }
    ]
  },
        {
    text: "Was ist ein wichtiger Grund für Inflation?",
    options: [
      { text: "Zu viele Arbeitslose", correct: false },
      { text: "Sinkende Nachfrage", correct: false },
      { text: "Steigende Produktionskosten", correct: true },
      { text: "Weniger Geld im Umlauf", correct: false }
    ]
  },
        {
    text: "Was ist eine wichtige Aufgabe der UNO?",
    options: [
      { text: "Handel zwischen Ländern regeln", correct: false },
      { text: "Globale Plattform für Friedenssicherung bieten", correct: true },
      { text: "Europa schützen", correct: false },
      { text: "Banken kontrollieren", correct: false }
    ]
  },
         {
    text: "Warum schließen Länder Bündnisse?",
    options: [
 
      { text: "Für militärische und wirtschaftliche Vorteile.", correct: true },
     { text: "Um gemeinsame Feste zu feiern", correct: false },
      { text: "Damit Politiker berühmter werden", correct: false },
      { text: "Um mehr Touristen anzulocken", correct: false }
    ]
  },
           {
    text: "Warum haben die Vereinigten Staaten Venezuelas Präsident in Haft genommen?",
    options: [
      
      { text: "Er wird beschuldigt, im Drogenhandel involviert zu sein.", correct: true },
           { text: "Wegen eines Wahlkampfs", correct: false },
      { text: "Wegen eines Streits mit Journalisten", correct: false },
      { text: "Wegen Steuerproblemen", correct: false }
    ]
  },
             {
    text: "Was ist die meist ersehnte Ressource in der ganzen Welt?",
    options: [
   
      { text: "Süßwasser.", correct: true },
         { text: "Gold", correct: false },
      { text: "Erdöl", correct: false },
      { text: "Diamanten", correct: false }
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

  const imgPaths = [
    './frage-1.jpg',
    './frage-2.jpg',
    './frage-3.jpg',
    './frage-4.jpg',
    './frage-5.jpg',
    './frage-6.jpg',
    './frage-7.jpg',
'./frage-8.jpg',
'./frage-9.jpg',
'./frage-10.jpg',
'./frage-11.webp'

  ];

  const imgSources = [
    'Darstellung der Globalisierung<br>Abrufdatum: 22.01.2026<br>URL : https://www.geeksforgeeks.org/macroeconomics/what-is-globalisation-explain-advantages-disadvantages-and-types-of-globalisation/',
    'Darstellung der Beziehungen zwischen China und den USA<br>Abrufdatum: 22.01.2026<br>URL: https://share.google/images/VZHMxS7ochP5BLTEy',
    'Neue Allianzen<br>Abrufdatum: 22.01.2026<br>URL : https://share.google/images/BbwmS9HlndELyTNLA',
    'Russland und Westen<br>Abrufdatum: 22.01.2026<br>URL :https://share.google/images/3gnQEAxg7zG0aTmMk',
    'Inflation – Erklärung und Grafik <br>Abrufdatum: 01.02.2026<br> URL: https://share.google/images/5ZfKMxQKkIHJ5uLyz',
    'NATO und EU – Zusammenarbeit und Sicherheit<br>Abrufdatum: 01.02.2026<br>URL: https://share.google/images/j0ARliFRDFWWJeFly',
    'Inflation – Preisentwicklung und Wirtschaft<br>Abrufdatum: 01.02.2026<br>URL: https://share.google/images/TqTG2iB6WQdZ9GaCc',
    'Vereinte Nationen (UNO) – Logo<br>Abrufdatum: 01.02.2026<br>URL: https://de.wikipedia.org/wiki/Vereinte_Nationen',
    'Darstellung einer Zusammenarbeit (Handshake-Symbol)<br>Abrufdatum: 04.02.2026<br>URL: https://share.google/images/dXPs3AI2H73yEF0I4',
    'Darstellung der Beziehungen zwischen den USA und Venezuela (Donald Trump und Nicolás Maduro) <br>Abrufdatum: 04.02.2026 <br>URL: https://share.google/images/bSXweAC1PMavGBVji',
    'Erhaltung der Weltressourcen (Pflanze in der Hand)<br>Abrufdatum: 04.02.2026<br>URL: https://share.google/images/wNMPNIYHoSIrsBcpV'
  ];

  questions.forEach((q, qi) => {
    const qWrap = document.createElement('div');
    qWrap.className = 'question';

    const qText = document.createElement('div');
    qText.className = 'question-text';
    qText.textContent = `${qi + 1}. ${q.text}`;
    qWrap.appendChild(qText);

    const imgBlock = document.createElement('div');
    imgBlock.className = 'image-block';

    const img = document.createElement('img');
    img.src = imgPaths[qi];

    const source = document.createElement('div');
    source.className = 'image-source';
    source.innerHTML = imgSources[qi];

    imgBlock.appendChild(img);
    imgBlock.appendChild(source);
    qWrap.appendChild(imgBlock);

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

  document.querySelectorAll('.question').forEach((el, i) => {
    el.style.animationDelay = `${i * 0.08}s`;
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
  resultEl.style.opacity = 0;
}

function launchConfetti() {
  const colors = ["#ff3838","#ff9f1a","#fffa65","#32ff7e","#18dcff","#7d5fff","#4b4b4b"];

  for (let i = 0; i < 45; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";

    conf.style.left = Math.random() * 100 + "vw";
    conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    conf.style.transform = `rotate(${Math.random() * 360}deg)`;
    conf.style.animationDuration = 1.5 + Math.random() * 1 + "s";

    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 2200);
  }
}

function launchFailParticles() {
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.className = "fail-particle";

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = 1.1 + Math.random() * 0.7 + "s";

    document.body.appendChild(p);

    setTimeout(() => p.remove(), 2000);
  }
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

  setTimeout(() => {
    resultEl.style.opacity = 1;
  }, 10);

  checkBtn.disabled = true;

  if (score === questions.length) {
    launchConfetti();
  } else if (score === 0) {
    launchFailParticles();
  }
}

function resetQuiz() {
  renderQuiz();
  resultEl.style.opacity = 0;
  progressFill.style.width = '0%';
}

renderQuiz();
checkBtn.addEventListener('click', checkAnswers);
resetBtn.addEventListener('click', resetQuiz);