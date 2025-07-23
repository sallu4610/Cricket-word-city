<script>
const imageUrls = [
  "https://i.postimg.cc/BLVMxPHM/image.jpg", "https://i.postimg.cc/HJ3SkhxG/image.jpg",
  "https://i.postimg.cc/qhR1hxhN/image.jpg", "https://i.postimg.cc/JHHKK7Qm/image.jpg",
  "https://i.postimg.cc/WdvS6vqL/image.jpg", "https://i.postimg.cc/8s7yTwg3/image.jpg",
  "https://i.postimg.cc/PN0SJZtq/image.jpg", "https://i.postimg.cc/JGJPknn5/image.jpg",
  "https://i.postimg.cc/TKJ0t4ny/image.jpg", "https://i.postimg.cc/Ty29FJct/image.jpg",
  "https://i.postimg.cc/KK9N23qx/image.jpg", "https://i.postimg.cc/XGmkZS6P/image.jpg",
  "https://i.postimg.cc/tn6tWSX4/image.jpg", "https://i.postimg.cc/9RrBFXKT/image.jpg",
  "https://i.postimg.cc/t7nzKThG/image.jpg", "https://i.postimg.cc/cvh7R8Nw/image.jpg",
  "https://i.postimg.cc/fJ4vDNKt/image.jpg", "https://i.postimg.cc/hJGLpPSw/image.jpg",
  "https://i.postimg.cc/bsQ9vBC6/image.jpg", "https://i.postimg.cc/FYNgkVwh/image.jpg"
];

// script.js

const levels = [
  { words: ["SIX", "SPIN", "SWING", "STRIKE"], hint: "Powerful shots & tricky deliveries", bgImage: "https://i.postimg.cc/BLVMxPHM/image.jpg", paragraph: "Powerful shots and tricky deliveries define the game at this level." },
  { words: ["SWEEP", "WICKET", "STUMP", "SWING"], hint: "Dismissals & sweep shots", bgImage: "https://i.postimg.cc/HJ3SkhxG/image.jpg", paragraph: "Dismissals and sweep shots shape the thrilling moments here." },
  { words: ["PACE", "SPIN", "SLIP", "SEAM"], hint: "Bowler’s magic tools", bgImage: "https://i.postimg.cc/qhR1hxhN/image.jpg", paragraph: "Bowler’s magic tools like pace, spin, and seam challenge the batsmen." },
  { words: ["BATSMAN", "BOWLER", "ALLROUNDER", "CAPTAIN"], hint: "Who’s who on field", bgImage: "https://i.postimg.cc/JHHKK7Qm/image.jpg", paragraph: "The key players on the field: batsman, bowler, allrounder, and captain." },
  { words: ["CENTURY", "SCORE", "RECORD", "STRIKE"], hint: "Record-breaking runs", bgImage: "https://i.postimg.cc/WdvS6vqL/image.jpg", paragraph: "Record-breaking runs and centuries highlight this level’s excitement." },
  { words: ["RUNOUT", "THROW", "CATCH", "EDGE"], hint: "Fielding brilliance", bgImage: "https://i.postimg.cc/8s7yTwg3/image.jpg", paragraph: "Fielding brilliance with runouts, throws, and catches on display." },
  { words: ["MATCH", "SERIES", "TOURNAMENT", "FINAL"], hint: "Cricket structures", bgImage: "https://i.postimg.cc/PN0SJZtq/image.jpg", paragraph: "Understanding cricket structures: matches, series, tournaments, and finals." },
  { words: ["REVIEW", "UMPIRE", "DRS", "APPEAL"], hint: "Controversial calls", bgImage: "https://i.postimg.cc/JGJPknn5/image.jpg", paragraph: "Controversial calls are resolved through reviews, DRS, and umpire appeals." },
  { words: ["TOSS", "TEST", "T20", "ODI"], hint: "Formats & starts", bgImage: "https://i.postimg.cc/TKJ0t4ny/image.jpg", paragraph: "Different formats and starts including toss, test, T20, and ODI." },
  { words: ["CHAMPION", "ICON", "LEGEND", "HERO"], hint: "Greatest names", bgImage: "https://i.postimg.cc/Ty29FJct/image.jpg", paragraph: "Celebrating the greatest names and legends of cricket." },
  { words: ["LORDS", "MCG", "WANKHEDE", "EDEN"], hint: "Famous stadiums", bgImage: "https://i.postimg.cc/KK9N23qx/image.jpg", paragraph: "Famous stadiums where unforgettable matches take place." },
  { words: ["BOUNCER", "YORKER", "FLIPPER", "DOOSRA"], hint: "Deadliest deliveries", bgImage: "https://i.postimg.cc/XGmkZS6P/image.jpg", paragraph: "Deadliest deliveries that test the batsman’s skills." },
  { words: ["INNINGS", "SESSION", "PITCH", "CREASE"], hint: "Game setup", bgImage: "https://i.postimg.cc/tn6tWSX4/image.jpg", paragraph: "Game setup elements including innings, sessions, pitch, and crease." },
  { words: ["POWERPLAY", "DEBUT", "PRESSURE", "COMEBACK"], hint: "Match situations", bgImage: "https://i.postimg.cc/9RrBFXKT/image.jpg", paragraph: "Critical match situations like powerplays, debuts, pressure, and comebacks." },
  { words: ["CELEBRATE", "GLORY", "HISTORY", "TROPHY"], hint: "Winning moments", bgImage: "https://i.postimg.cc/t7nzKThG/image.jpg", paragraph: "Winning moments filled with celebration and glory." },
  { words: ["KEEPER", "FIELDER", "THROW", "STUMP"], hint: "Defenders on field", bgImage: "https://i.postimg.cc/cvh7R8Nw/image.jpg", paragraph: "Defenders on the field ensuring no easy runs." },
  { words: ["APPEAL", "LBW", "EDGE", "UMPIRE"], hint: "Deciding moments", bgImage: "https://i.postimg.cc/fJ4vDNKt/image.jpg", paragraph: "Deciding moments with appeals, LBW, edges, and umpire decisions." },
  { words: ["MANOFMATCH", "TROPHY", "WORLD", "IPL"], hint: "Rewards & fame", bgImage: "https://i.postimg.cc/hJGLpPSw/image.jpg", paragraph: "Rewards and fame for outstanding performances." },
  { words: ["OPENER", "TAILENDER", "BOWLER", "STRUGGLE"], hint: "Start to end", bgImage: "https://i.postimg.cc/bsQ9vBC6/image.jpg", paragraph: "From the opener to tailender, the full cricket journey." },
  { words: ["ASHES", "ODI", "T20", "WORLD"], hint: "Biggest rivalries", bgImage: "https://i.postimg.cc/FYNgkVwh/image.jpg", paragraph: "The biggest rivalries in world cricket." },
];

let currentLevelIndex = 0;
let selectedLetters = [];
let foundWords = new Set();

const levelNumberEl = document.getElementById("level-number");
const hintEl = document.getElementById("hint");
const lettersContainer = document.getElementById("letters-container");
const foundWordsList = document.getElementById("found-words-list");
const resultScreen = document.getElementById("result-screen");
const levelImage = document.getElementById("level-image");
const levelParagraph = document.getElementById("level-paragraph");
const nextLevelBtn = document.getElementById("next-level-btn");

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Create a pool of letters from all words in the current level
function getLettersForLevel(level) {
  let allLetters = level.words.join('').toUpperCase().split('');
  // Add some random letters to increase complexity
  const extraLettersCount = 5;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < extraLettersCount; i++) {
    allLetters.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }
  shuffleArray(allLetters);
  return allLetters;
}

function renderLevel() {
  selectedLetters = [];
  foundWords.clear();
  foundWordsList.innerHTML = '';
  resultScreen.classList.add("hidden");
  lettersContainer.innerHTML = '';

  const level = levels[currentLevelIndex];
  levelNumberEl.textContent = `Level ${currentLevelIndex + 1} / ${levels.length}`;
  hintEl.textContent = level.hint;

  // Prepare letters for the level
  const letters = getLettersForLevel(level);

  // Render letters as clickable divs
  letters.forEach((letter, idx) => {
    const letterEl = document.createElement('div');
    letterEl.classList.add('letter');
    letterEl.textContent = letter;
    letterEl.dataset.index = idx;
    letterEl.addEventListener('click', () => {
      if (letterEl.classList.contains('selected')) {
        // If clicked again, deselect and remove from selectedLetters
        letterEl.classList.remove('selected');
        selectedLetters = selectedLetters.filter(i => i !== idx);
      } else {
        letterEl.classList.add('selected');
        selectedLetters.push(idx);
      }
    });
    lettersContainer.appendChild(letterEl);
  });
}

function checkSelectedWord() {
  const level = levels[currentLevelIndex];
  // Form the word from selected letters
  const letters = Array.from(lettersContainer.children);
  const word = selectedLetters.map(i => letters[i].textContent).join('');
  if (level.words.includes(word)) {
    if (!foundWords.has(word)) {
      foundWords.add(word);
      updateFoundWords();
      markFoundWordInLetters(word);
      clearSelection();
      checkLevelComplete();
      return true;
    }
  }
  return false;
}

function updateFoundWords() {
  foundWordsList.innerHTML = '';
  foundWords.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word.toUpperCase();
    foundWordsList.appendChild(li);
  });
}

function clearSelection() {
  selectedLetters = [];
  const letters = Array.from(lettersContainer.children);
  letters.forEach(letterEl => letterEl.classList.remove('selected'));
}

// Optional: visually mark letters of found words (simple approach: disable those letters)
function markFoundWordInLetters(word) {
  const letters = Array.from(lettersContainer.children);
  const lettersText = letters.map(l => l.textContent);
  let tempLetters = [...lettersText];
  for (let char of word) {
    let idx = tempLetters.indexOf(char);
    if (idx !== -1) {
      letters[idx].style.backgroundColor = "#0984e3"; // Mark found letter
      letters[idx].style.color = "#fff";
      letters[idx].style.pointerEvents = "none";
      tempLetters[idx] = null;
    }
  }
}

function checkLevelComplete() {
  const level = levels[currentLevelIndex];
  if (foundWords.size === level.words.length) {
    // Show result screen
    showResultScreen();
  }
}

function showResultScreen() {
  const level = levels[currentLevelIndex];
  levelImage.src = level.bgImage;
  levelParagraph.textContent = level.paragraph || level.hint || '';
  resultScreen.classList.remove("hidden");
  lettersContainer.innerHTML = '';
  foundWordsList.innerHTML = '';
  hintEl.textContent = '';
  levelNumberEl.textContent = '';
}

nextLevelBtn.addEventListener('click', () => {
  currentLevelIndex++;
  if (currentLevelIndex >= levels.length) {
    alert("Congratulations! You completed all levels.");
    currentLevelIndex = 0;
  }
  renderLevel();
});

// Check word when user clicks outside or presses Enter key
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (checkSelectedWord() === false && selectedLetters.length > 0) {
      alert("Wrong word, try again!");
      clearSelection();
    }
  }
});

// Also allow clicking outside to check word
document.addEventListener('click', e => {
  // Only check if clicked outside letter blocks and not result screen or next button
  if (!e.target.classList.contains('letter') && !resultScreen.contains(e.target)) {
    if (selectedLetters.length > 0) {
      if (checkSelectedWord() === false) {
        clearSelection();
      }
    }
  }
});

renderLevel();

