const levels = [
  {
    words: ["bat", "hit", "fix", "six"],
    hint: "Basic cricket actions",
    bg: "https://i.imgur.com/2pZ5a7Z.jpg",
    description: "These are fundamental terms you hear in every cricket game."
  },
  {
    words: ["run", "out", "umpire", "bail"],
    hint: "Umpiring and rules",
    bg: "https://i.imgur.com/Bt5wZKm.jpg",
    description: "Umpires play a crucial role in deciding outcomes."
  },
  {
    words: ["over", "dot", "wide", "no"],
    hint: "Bowling extras",
    bg: "https://i.imgur.com/TnFxvN5.jpg",
    description: "These are all ways bowlers can deliver legal or extra balls."
  },
  {
    words: ["pad", "cap", "glove", "kit"],
    hint: "Cricket gear",
    bg: "https://i.imgur.com/vYGOg7G.jpg",
    description: "Protective gear is essential in high-speed cricket."
  },
  {
    words: ["spin", "pace", "edge", "nick"],
    hint: "Bowling types and results",
    bg: "https://i.imgur.com/VaUwKqj.jpg",
    description: "Bowling variations keep batters on their toes."
  }
  // Add more levels similarly up to 20
];

let currentLevel = 0;
let selectedLetters = [];
const hintText = document.getElementById("hint");
const letterCircle = document.getElementById("letter-circle");
const wordGrid = document.getElementById("word-grid");
const bgImage = document.getElementById("bg-image");
const description = document.getElementById("description");
const resultSection = document.getElementById("result-section");
const nextBtn = document.getElementById("next-btn");

function shuffle(array) {
  let a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateLetters(words) {
  const letters = new Set();
  words.forEach(word => word.split("").forEach(l => letters.add(l)));
  return shuffle([...letters]);
}

function renderLevel() {
  const level = levels[currentLevel];
  hintText.textContent = `Hint: ${level.hint}`;
  resultSection.classList.add("hidden");
  wordGrid.innerHTML = "";
  letterCircle.innerHTML = "";
  selectedLetters = [];

  level.words.forEach(word => {
    const wordBox = document.createElement("div");
    wordBox.className = "word-box";
    for (let i = 0; i < word.length; i++) {
      const letter = document.createElement("div");
      letter.className = "letter-box";
      letter.textContent = "";
      wordBox.appendChild(letter);
    }
    wordGrid.appendChild(wordBox);
  });

  const letters = generateLetters(level.words);
  letters.forEach(letter => {
    const el = document.createElement("div");
    el.className = "circle-letter";
    el.textContent = letter.toUpperCase();
    el.addEventListener("click", () => selectLetter(el, letter));
    letterCircle.appendChild(el);
  });
}

function selectLetter(el, letter) {
  el.classList.add("active");
  selectedLetters.push({ el, letter });

  const formedWord = selectedLetters.map(l => l.letter).join("").toLowerCase();
  const matchIndex = levels[currentLevel].words.findIndex(w => w === formedWord);

  if (matchIndex !== -1) {
    const wordBoxes = wordGrid.children[matchIndex].children;
    for (let i = 0; i < formedWord.length; i++) {
      wordBoxes[i].textContent = formedWord[i].toUpperCase();
    }

    levels[currentLevel].words[matchIndex] = null;
    selectedLetters.forEach(l => l.el.classList.remove("active"));
    selectedLetters = [];

    if (levels[currentLevel].words.every(w => w === null)) {
      showResult();
    }
  }

  if (selectedLetters.length > 6) {
    selectedLetters.forEach(l => l.el.classList.remove("active"));
    selectedLetters = [];
  }
}

function showResult() {
  const level = levels[currentLevel];
  bgImage.src = level.bg;
  description.textContent = level.description;
  resultSection.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentLevel++;
  if (currentLevel < levels.length) {
    renderLevel();
  } else {
    alert("You completed all levels!");
  }
});
document.getElementById("game").style.backgroundImage = `url('${imageUrls[currentLevel]}')`;

document.getElementById("hint-btn").addEventListener("click", () => {
  alert(levels[currentLevel].hint);
});

renderLevel();
