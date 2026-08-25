// =================================================================
// 1. BANK SOALAN (60 SOALAN - 30 TANGGA & 30 ULAR)
// =================================================================

const easyQuestions = [
  {
    question:
      "Bentuk 3D yang mempunyai 6 permukaan rata berbentuk segiempat sama dipanggil?",
    answers: ["Kuboid", "Kubus", "Silinder"],
    correct: 1,
  },
  {
    question:
      "Bentuk 3D apakah yang mempunyai 1 permukaan rata and 1 permukaan melengkung?",
    answers: ["Sfera", "Silinder", "Kon"],
    correct: 2,
  },
  {
    question:
      "Bentuk 3D yang mempunyai semua permukaan melengkung dan tiada sisi atau bucu?",
    answers: ["Sfera", "Silinder", "Kon"],
    correct: 0,
  },
  {
    question: "Bentangan mana yang boleh menjadi kubus?",
    answers: [
      "Segiempat sama 6 keping disusun silang",
      "Bulatan 2 keping",
      "Segitiga 4 keping",
    ],
    correct: 0,
  },
  {
    question: "Prisma segiempat mempunyai berapa permukaan rata?",
    answers: ["4", "5", "6"],
    correct: 2,
  },
  {
    question: "Piramid segiempat mempunyai berapa bucu?",
    answers: ["4", "5", "6"],
    correct: 1,
  },
  {
    question: "Isipadu silinder dikira dengan rumus?",
    answers: ["πj²t", "¹⁄₃ × πj²t", "4/3 πj³"],
    correct: 0,
  },
  {
    question: "Luas permukaan sfera dikira dengan rumus?",
    answers: ["4πj²", "2πj²", "πj²"],
    correct: 0,
  },
  {
    question:
      "Bentuk 3D yang mempunyai 2 permukaan rata berbentuk bulatan dan 1 permukaan melengkung ialah?",
    answers: ["Kon", "Silinder", "Sfera"],
    correct: 1,
  },
  {
    question: "Berapakah bilangan permukaan rata bagi sebuah kuboid?",
    answers: ["4", "6", "8"],
    correct: 1,
  },
  {
    question:
      "Piramid bertapak segi empat tepat mempunyai berapa bilangan permukaan rata semuanya?",
    answers: ["4", "5", "6"],
    correct: 1,
  },
  {
    question:
      "Apakah bentuk bentangan bagi permukaan melengkung sebuah silinder apabila dibuka?",
    answers: ["Segi empat tepat", "Bulatan", "Segi tiga"],
    correct: 0,
  },
  {
    question:
      "Sebuah prisma segi tiga mempunyai berapa buah permukaan rata berbentuk segi tiga?",
    answers: ["2", "3", "5"],
    correct: 0,
  },
  {
    question:
      "Berapakah bilangan satah berbentuk segi tiga yang terdapat pada bentangan piramid segi empat sama?",
    answers: ["3", "4", "5"],
    correct: 1,
  },
  {
    question: "Rumus bagi luas permukaan melengkung sebuah kon ialah?",
    answers: ["πj²", "πjs", "2πjt"],
    correct: 1,
  },
  {
    question:
      "Rumus luas bulatan yang digunakan untuk mengira luas tapak silinder ialah?",
    answers: ["2πj", "πj²", "πj²t"],
    correct: 1,
  },
  {
    question:
      "Antara berikut, bentuk geometri yang manakah mempunyai satah condong?",
    answers: ["Silinder", "Prisma", "Sfera"],
    correct: 1,
  },
  {
    question: "Berapakah bilangan bucu bagi sebuah kubus?",
    answers: ["6", "8", "12"],
    correct: 1,
  },
  {
    question: "Berapakah bilangan tepi (sisi) bagi sebuah kuboid?",
    answers: ["8", "10", "12"],
    correct: 2,
  },
  {
    question:
      "Sebuah prisma segi tiga mempunyai berapa bilangan tepi kesemuanya?",
    answers: ["6", "9", "12"],
    correct: 1,
  },
  {
    question:
      "Apakah bentuk 3D yang terhasil daripada bentangan satu bulatan besar and satu sektor bulatan?",
    answers: ["Kon", "Silinder", "Sfera"],
    correct: 0,
  },
  {
    question: "Formula bagi mengira isi padu prisma ialah?",
    answers: [
      "Luas keratan rentas × tinggi",
      "¹⁄₃ × Luas tapak × tinggi",
      "Luas tapak × tinggi × lebar",
    ],
    correct: 0,
  },
  {
    question: "Formula bagi mengira isi padu piramid ialah?",
    answers: ["Luas tapak × tinggi", "¹⁄₃ × Luas tapak × tinggi", "¹⁄₃ × πj²t"],
    correct: 1,
  },
  {
    question: "Formula isi padu sfera ialah?",
    answers: ["4/3 πj³", "4/3 πj²", "4πj²"],
    correct: 0,
  },
  {
    question: "Bentuk geometri 3D manakah yang TIADA bucu langsung?",
    answers: ["Silinder dan Sfera", "Prisma dan Kon", "Piramid dan Sfera"],
    correct: 0,
  },
  {
    question:
      "Berapakah bilangan permukaan berbentuk segi empat tepat pada prisma segi tiga?",
    answers: ["2", "3", "4"],
    correct: 1,
  },
  {
    question: "Apakah maksud tinggi sendeng (s) pada sebuah kon?",
    answers: [
      "Jarak dari pusat bulatan ke tepi",
      "Jarak tegak dari bucu ke pusat tapak",
      "Jarak dari bucu ke perimeter tapak melengkung",
    ],
    correct: 2,
  },
  {
    question:
      "Jika jejari bulatan ialah j, rumus bagi luas dua buah tapak silinder ialah?",
    answers: ["πj²", "2πj²", "2πj"],
    correct: 1,
  },
  {
    question:
      "Bentuk 3D manakah yang mempunyai keratan rentas yang seragam di sepanjang paksinya?",
    answers: ["Piramid", "Kon", "Prisma"],
    correct: 2,
  },
  {
    question: "Berapakah bilangan bucu bagi sebuah kon?",
    answers: ["0", "1", "2"],
    correct: 1,
  },
];

const hardQuestions = [
  {
    question:
      "Antara berikut, yang manakah BUKAN sifat bagi bentuk geometri tiga dimensi?",
    answers: [
      "Mempunyai panjang dan lebar sahaja",
      "Mempunyai isi padu",
      "Mempunyai luas permukaan",
    ],
    correct: 0,
  },
  {
    question:
      "Sebuah kon mempunyai tinggi tegak (t) dan tinggi sendeng (s). Pemboleh ubah manakah digunakan untuk mengira LUAS PERMUKAAN melengkungnya?",
    answers: ["Tinggi Tegak (t)", "Tinggi Sendeng (s)", "Kedua-duanya"],
    correct: 1,
  },
  {
    question:
      "Jika sebuah piramid diletakkan di atas sebuah kubus, bentuk ini dinamakan sebagai?",
    answers: ["Bentuk tunggal", "Bentuk gabungan", "Bentangan"],
    correct: 1,
  },
  {
    question:
      "Sebuah silinder kehilangan salah satu tapak bulatannya (menjadi bekas terbuka). Bagaimanakah rumus luas permukaannya berubah?",
    answers: ["πj² + 2πjt", "2πj² + 2πjt", "2πjt"],
    correct: 0,
  },
  {
    question:
      "Mengapakah murid perlu memahami konsep bentangan sebelum mengira luas permukaan?",
    answers: [
      "Supaya tahu jumlah satah permukaan objek yang perlu dikira",
      "Supaya boleh menghafal formula dengan cepat",
      "Supaya tahu isi padu objek",
    ],
    correct: 0,
  },
  {
    question:
      "Sebuah kubus mempunyai panjang sisi 3 cm. Berapakah jumlah luas permukaan kubus tersebut?",
    answers: ["27 cm²", "54 cm²", "36 cm²"],
    correct: 1,
  },
  {
    question:
      "Jika isi padu sebuah kubus ialah 64 cm³, berapakah panjang setiap sisinya?",
    answers: ["4 cm", "6 cm", "8 cm"],
    correct: 0,
  },
  {
    question:
      "Satu pepejal gabungan terdiri daripada dua buah kubus yang serupa dilekatkan bersama secara membujur. Berapakah jumlah permukaan luar yang terdedah?",
    answers: ["12 permukaan", "10 permukaan", "11 permukaan"],
    correct: 1,
  },
  {
    question:
      "Sebuah silinder dan sebuah kon mempunyai luas tapak (πj²) dan tinggi (t) yang sama. Apakah hubungan antara isi padu kon dengan isi padu silinder tersebut?",
    answers: [
      "Isi padu kon adalah 3 kali silinder",
      "Isi padu kon adalah 1/3 daripada silinder",
      "Isi padu mereka adalah sama",
    ],
    correct: 1,
  },
  {
    question:
      "Satu hemisfera (separuh sfera) mempunyai jejari j. Bagaimanakah rumus untuk mengira jumlah luas permukaan luarnya yang melengkung sahaja?",
    answers: ["4πj²", "2πj²", "3πj²"],
    correct: 1,
  },
  {
    question:
      "Sebuah bekas berbentuk kuboid diisi penuh dengan air. Air itu kemudiannya dituang ke dalam bekas silinder. Apakah kuantiti geometri yang kekal sama?",
    answers: ["Luas permukaan", "Isi padu air", "Tinggi paras air"],
    correct: 1,
  },
  {
    question:
      "Jika jejari sebuah sfera digandakan sebanyak dua kali (2j), isi padunya akan meningkat sebanyak berapa kali ganda?",
    answers: ["2 kali ganda", "4 kali ganda", "8 kali ganda"],
    correct: 2,
  },
  {
    question:
      "Sebuah piramid mempunyai tapak segi empat sama bersisi 4 cm and tinggi tegak 6 cm. Berapakah isi padu piramid tersebut?",
    answers: ["32 cm³", "96 cm³", "16 cm³"],
    correct: 0,
  },
  {
    question:
      "Bagaimanakah anda mengira isi padu sebuah batang paip besi yang berongga (mempunyai ketebalan)?",
    answers: [
      "Isi padu silinder luar + isi padu silinder dalam",
      "Isi padu silinder luar - isi padu silinder dalam",
      "Hanya kira isi padu silinder dalam sahaja",
    ],
    correct: 1,
  },
  {
    question:
      "Sebuah kon mempunyai jejari 3 cm and tinggi sendeng 5 cm. Berapakah jumlah luas permukaannya? (Guna rumus: πj² + πjs, anggap π = 3.142)",
    answers: ["75.41 cm²", "47.13 cm²", "28.28 cm²"],
    correct: 0,
  },
  {
    question:
      "Jika sebuah kuboid dipotong secara pepenjuru menegak kepada dua bahagian yang sama, apakah dua bentuk 3D baharu yang terhasil?",
    answers: [
      "Dua buah piramid",
      "Dua buah prisma segi tiga",
      "Dua buah kubus kecil",
    ],
    correct: 1,
  },
  {
    question:
      "Sebuah khemah berbentuk prisma segi tiga mempunyai luas tapak 10 m² and tinggi khemah 3 m. Berapakah isi padu ruang udara di dalam khemah itu?",
    answers: ["15 m³", "30 m³", "45 m³"],
    correct: 0,
  },
  {
    question:
      "Satu botol susu berbentuk silinder mempunyai jejari 7 cm dan tinggi 10 cm. Berapakah isi padu susu yang boleh diisi penuh di dalamnya? (Guna π = 22/7)",
    answers: ["1540 cm³", "440 cm³", "770 cm³"],
    correct: 0,
  },
  {
    question:
      "Sebuah kon dipotong secara melintang di bahagian tengah (selari dengan tapak). Bahagian bawah kon yang tertinggal dinamakan sebagai?",
    answers: ["Frustum", "Prisma", "Piramid"],
    correct: 0,
  },
  {
    question:
      "Satu bentuk gabungan terhasil apabila sebuah hemisfera dilekatkan di atas sebuah kon. Apakah rumus jumlah isi padu bentuk gabungan ini?",
    answers: ["¹⁄₃πj²t + 4/3πj³", "¹⁄₃πj²t + 2/3πj³", "πj²t + 2/3πj³"],
    correct: 1,
  },
  {
    question:
      "Jika tinggi sebuah silinder digandakan sebanyak dua kali (2t) tetapi jejari tapaknya kekal sama, isi padunya akan berubah menjadi?",
    answers: [
      "2 kali ganda isi padu asal",
      "4 kali ganda isi padu asal",
      "Kekal sama",
    ],
    correct: 0,
  },
  {
    question:
      "Mengapakah sebiji bola sepak (sfera) tidak mempunyai bentangan satah rata yang sempurna seperti kubus?",
    answers: [
      "Kerana sfera tiada sebarang permukaan rata untuk dibuka",
      "Kerana sfera mempunyai satah condong",
      "Kerana sfera mempunyai terlalu banyak bucu",
    ],
    correct: 0,
  },
  {
    question:
      "Sebuah bilik berbentuk kuboid bersaiz 5m × 4m × 3m. Berapakah jumlah luas dinding (4 permukaan menegak) bilik tersebut?",
    answers: ["60 m²", "54 m²", "94 m²"],
    correct: 1,
  },
  {
    question:
      "Sebuah prisma mempunyai isi padu 120 cm³ dan tinggi 10 cm. Berapakah luas keratan rentas seragam bagi prisma tersebut?",
    answers: ["12 cm²", "24 cm²", "1200 cm²"],
    correct: 0,
  },
  {
    question:
      "Jika diameter tapak sebuah kon ialah 14 cm, berapakah jejari (j) yang perlu dimasukkan ke dalam formula pengiraan luas permukaan melengkung kon?",
    answers: ["14 cm", "7 cm", "28 cm"],
    correct: 1,
  },
  {
    question:
      "Apakah bentuk 3D pepejal yang terhasil apabila satu kertas berbentuk segi tiga bersudut tegak diputarkan 360 darjah pada salah satu paksi tegaknya?",
    answers: ["Piramid", "Kon", "Prisma"],
    correct: 1,
  },
  {
    question:
      "Apakah yang akan berlaku kepada luas permukaan sebuah kubus jika panjang setiap sisinya dikurangkan separuh (1/2)?",
    answers: [
      "Keluasan menjadi 1/2 daripada asal",
      "Keluasan menjadi 1/4 daripada asal",
      "Keluasan menjadi 1/8 daripada asal",
    ],
    correct: 1,
  },
  {
    question:
      "Sebuah kotak kasut berbentuk kuboid mempunyai ukuran 30cm × 15cm × 10cm. Berapakah isi padunya?",
    answers: ["4500 cm³", "450 cm³", "45000 cm³"],
    correct: 0,
  },
  {
    question:
      "Sebuah piramid dan prisma mempunyai luas tapak dan tinggi yang sama. Berapakah nisbah isi padu piramid kepada isi padu prisma?",
    answers: ["1 : 3", "3 : 1", "1 : 1"],
    correct: 0,
  },
  {
    question:
      "Apakah pepejal gabungan yang paling sesuai digunakan untuk menggambarkan reka bentuk sebuah pensel harian yang belum diasah?",
    answers: ["Kuboid dan Piramid", "Silinder dan Kon", "Silinder dan Piramid"],
    correct: 1,
  },
];

// =================================================================
// 2. CONFIG GAME
// =================================================================
const ladders = {
  3: 13,
  5: 15,
  7: 18,
  9: 29,
  12: 24,
  16: 35,
  19: 38,
  22: 43,
  26: 47,
  31: 52,
  34: 45,
  39: 59,
  42: 63,
  48: 69,
  53: 65,
  56: 77,
  61: 82,
  64: 75,
  68: 89,
  71: 83,
  74: 93,
  79: 97,
  81: 92,
  85: 96,
  88: 99,
};

const snakes = {
  14: 4,
  17: 6,
  23: 11,
  25: 10,
  28: 15,
  33: 20,
  36: 18,
  44: 24,
  46: 35,
  49: 30,
  54: 41,
  57: 38,
  62: 50,
  66: 45,
  70: 52,
  73: 61,
  76: 58,
  80: 67,
  84: 72,
  87: 69,
  90: 78,
  91: 82,
  94: 75,
  95: 83,
  98: 86,
};

let playerPositions = [];
let playerNames = [];
let totalPlayers = 2;
let currentPlayerTurn = 0;
let isGameOver = false;
let isRolling = false;

window.onload = function () {
  generateNameInputs();
};

function generateNameInputs() {
  const count = parseInt(document.getElementById("player-count").value);
  const container = document.getElementById("name-inputs-container");
  container.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    const group = document.createElement("div");
    group.classList.add("player-input-group");

    const label = document.createElement("label");
    label.innerText = `Nama Pemain ${i}:`;

    const input = document.createElement("input");
    input.type = "text";
    input.id = `pname-${i}`;
    input.placeholder = `Contoh: Ali / Kumpulan ${i}`;
    input.value = `Pemain ${i}`;

    group.appendChild(label);
    group.appendChild(input);
    container.appendChild(group);
  }
}

function startGame() {
  totalPlayers = parseInt(document.getElementById("player-count").value);
  playerPositions = [];
  playerNames = [];

  for (let i = 1; i <= totalPlayers; i++) {
    let nameVal = document.getElementById(`pname-${i}`).value.trim();
    if (nameVal === "") nameVal = `Pemain ${i}`;
    playerNames.push(nameVal);
    playerPositions.push(0);
  }

  currentPlayerTurn = 0;
  isGameOver = false;

  const mainLayout = document.querySelector(".main-layout");
  if (mainLayout) {
    mainLayout.style.display = "flex";
  }

  document.getElementById("board").style.display = "grid";
  document.getElementById("controls").style.display = "flex";
  document.getElementById("player-setup").style.display = "none";

  createBoard();
  updatePlayerStatusText();
}

// =================================================================
// 3. JANA PAPAN PERMAINAN
// =================================================================
const board = document.getElementById("board");
function createBoard() {
  board.innerHTML = "";

  for (let r = 10; r >= 1; r--) {
    let rowCells = [];
    for (let c = 1; c <= 10; c++) {
      let cellId = r % 2 === 0 ? (r - 1) * 10 + (11 - c) : (r - 1) * 10 + c;
      rowCells.push(cellId);
    }

    rowCells.forEach((i) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `cell-${i}`;
      cell.innerHTML = `<span class="cell-number">${i}</span>`;

      // Cari bahagian ini dalam script.js dan ganti:
      if (ladders[i]) {
        cell.classList.add("ladder-cell");
        cell.innerHTML += `<div class="visual-icon">🪜⬆  <br>${ladders[i]}</div>`;
      } else if (snakes[i]) {
        cell.classList.add("snake-cell");
        cell.innerHTML += `<div class="visual-icon">🐍⬇ <br>${snakes[i]}</div>`;
      } else {
        const colorIndex = (i % 4) + 1;
        cell.classList.add(`tile-color-${colorIndex}`);
      }

      const tokenContainer = document.createElement("div");
      tokenContainer.classList.add("token-container");
      tokenContainer.id = `tokens-cell-${i}`;
      cell.appendChild(tokenContainer);

      board.appendChild(cell);

      updateAllPlayerTokens();
      drawVisuals();
    });
  }

  const startCell = document.createElement("div");
  startCell.classList.add("cell", "start-cell");
  startCell.id = `cell-0`;
  startCell.innerHTML = `<span class="start-text">▶ MULA</span>`;

  const startTokenContainer = document.createElement("div");
  startTokenContainer.classList.add("token-container");
  startTokenContainer.id = `tokens-cell-0`;
  startCell.appendChild(startTokenContainer);

  board.appendChild(startCell);
  updateAllPlayerTokens();
}

function updateAllPlayerTokens() {
  document.querySelectorAll(".player-token").forEach((t) => t.remove());
  playerPositions.forEach((pos, index) => {
    const container = document.getElementById(`tokens-cell-${pos}`);
    if (container) {
      const token = document.createElement("div");
      token.classList.add("player-token", `p${index + 1}`);
      token.title = playerNames[index];
      container.appendChild(token);
    }
  });
}

function updatePlayerStatusText() {
  if (!isGameOver) {
    document.getElementById("game-status").innerText =
      `${playerNames[currentPlayerTurn]}, giliran anda!`;
  }
}

// =================================================================
// 4. LOGIK BALING DADU 3D
// =================================================================
function rollDice() {
  if (isGameOver || isRolling) return;

  isRolling = true;
  const cube = document.getElementById("cube");
  const diceResultText = document.getElementById("dice-result");

  cube.classList.add("spinning");
  diceResultText.innerText = "Dadu sedang berpusing...";

  const diceValue = Math.floor(Math.random() * 6) + 1;

  const rotations = {
    1: "rotateX(0deg) rotateY(0deg)",
    2: "rotateY(90deg)",
    3: "rotateX(-90deg)",
    4: "rotateX(90deg)",
    5: "rotateY(-90deg)",
    6: "rotateX(180deg)",
  };

  setTimeout(() => {
    cube.classList.remove("spinning");
    cube.style.transform = rotations[diceValue];
    diceResultText.innerText = `${playerNames[currentPlayerTurn]} dapat Dadu: ${diceValue}`;
    movePlayer(diceValue);
  }, 1000);
}

function movePlayer(diceValue) {
  let currentPos = playerPositions[currentPlayerTurn];
  let targetPosition = currentPos + diceValue;

  if (targetPosition > 100) {
    alert(
      `${playerNames[currentPlayerTurn]} memerlukan nombor yang tepat untuk ke petak 100.`,
    );
    isRolling = false;
    nextTurn();
    return;
  }

  playerPositions[currentPlayerTurn] = targetPosition;
  updateAllPlayerTokens();

  setTimeout(() => {
    if (ladders[targetPosition]) {
      document.getElementById("game-status").innerText =
        `${playerNames[currentPlayerTurn]} jumpa Tangga! Jawab soalan ASAS untuk PANJAT.`;
      showQuestion("ladder");
    } else if (snakes[targetPosition]) {
      document.getElementById("game-status").innerText =
        `${playerNames[currentPlayerTurn]} terkena Kepala Ular! Jawab soalan KBAT untuk SELAMAT.`;
      showQuestion("snake");
    } else if (targetPosition === 100) {
      isGameOver = true;
      document.getElementById("game-status").innerText =
        `Tahniah ${playerNames[currentPlayerTurn]} Menang! 🎉`;
      alert(
        `Syabas ${playerNames[currentPlayerTurn]}! Anda menamatkan permainan.`,
      );
    } else {
      nextTurn();
    }
    isRolling = false;
  }, 400);
}

// =================================================================
// 5. PAPAR MODAL SOALAN
// =================================================================
let currentType = "";
function showQuestion(type) {
  currentType = type;
  let qData;

  const modalContent = document.getElementById("modal-content-box");
  modalContent.classList.remove("modal-easy", "modal-hard");

  if (type === "ladder") {
    document.getElementById("modal-topic").innerText =
      "🟢 SOALAN ASAS GEOMETRI (TANGGA)";
    modalContent.classList.add("modal-easy");
    const randomIdx = Math.floor(Math.random() * easyQuestions.length);
    qData = easyQuestions[randomIdx];
  } else {
    document.getElementById("modal-topic").innerText =
      "🔴 SOALAN KBAT / GABUNGAN (ULAR)";
    modalContent.classList.add("modal-hard");
    const randomIdx = Math.floor(Math.random() * hardQuestions.length);
    qData = hardQuestions[randomIdx];
  }

  document.getElementById("question-text").innerText = qData.question;
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  qData.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.innerText = ans;
    btn.onclick = () => checkAnswer(index, qData.correct);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("question-modal").style.display = "flex";
}

// =================================================================
// 6. SEMAK JAWAPAN
// =================================================================
function checkAnswer(selectedIndex, correctIndex) {
  document.getElementById("question-modal").style.display = "none";

  let currentPos = playerPositions[currentPlayerTurn];
  const feedbackContent = document.getElementById("feedback-content");
  const feedbackTitle = document.getElementById("feedback-title");
  const feedbackEmoji = document.getElementById("feedback-emoji");
  const feedbackText = document.getElementById("feedback-text");

  feedbackContent.classList.remove("feedback-correct", "feedback-wrong");

  if (selectedIndex === correctIndex) {
    feedbackContent.classList.add("feedback-correct");
    feedbackTitle.innerText = "TAHNIAH, BETUL! 🎉";
    feedbackEmoji.innerText = "🤩🔥";

    if (currentType === "ladder") {
      playerPositions[currentPlayerTurn] = ladders[currentPos];
      feedbackText.innerText = `Jawapan tepat! ${playerNames[currentPlayerTurn]} BERJAYA memanjat tangga naik ke petak ${ladders[currentPos]}!`;
    } else if (currentType === "snake") {
      feedbackText.innerText = `Jawapan tepat! ${playerNames[currentPlayerTurn]} TERSELAMAT daripada ditelan ular dan kekal di petak ${currentPos}.`;
    }
  } else {
    feedbackContent.classList.add("feedback-wrong");
    feedbackTitle.innerText = "ADUH, SALAH... 😢";
    feedbackEmoji.innerText = "💥🐍";

    if (currentType === "snake") {
      playerPositions[currentPlayerTurn] = snakes[currentPos];
      feedbackText.innerText = `Jawapan kurang tepat. ${playerNames[currentPlayerTurn]} GAGAL menyelamatkan diri lalu JATUH ditelan ular ke petak ${snakes[currentPos]}!`;
    } else if (currentType === "ladder") {
      feedbackText.innerText = `Jawapan kurang tepat. ${playerNames[currentPlayerTurn]} GAGAL memanjat tangga dan kekal di petak asal (${currentPos}).`;
    }
  }

  updateAllPlayerTokens();
  document.getElementById("feedback-modal").style.display = "flex";
}

function closeFeedbackModal() {
  document.getElementById("feedback-modal").style.display = "none";

  if (playerPositions[currentPlayerTurn] === 100) {
    isGameOver = true;
    document.getElementById("game-status").innerText =
      `Tahniah ${playerNames[currentPlayerTurn]} Menang! 🎉`;

    const feedbackContent = document.getElementById("feedback-content");
    feedbackContent.classList.remove("feedback-correct", "feedback-wrong");
    feedbackContent.classList.add("feedback-correct");
    document.getElementById("feedback-title").innerText = "PERMAINAN TAMAT! 🏆";
    document.getElementById("feedback-emoji").innerText = "👑🥇🎉";
    document.getElementById("feedback-text").innerText =
      `Syabas dan tahniah kepada ${playerNames[currentPlayerTurn]} kerana telah berjaya sampai ke petak 100 dan MENANG permainan G3DD!`;
    document.getElementById("feedback-btn").innerText = "MULA SEMULA GAME";
    document.getElementById("feedback-btn").onclick = () => {
      document.getElementById("feedback-modal").style.display = "none";
      document.getElementById("feedback-btn").onclick = closeFeedbackModal;
      document.getElementById("feedback-btn").innerText =
        "TERUSKAN PERMAINAN ➔";
      restartGame();
    };
    document.getElementById("feedback-modal").style.display = "flex";
  } else {
    nextTurn();
  }
}

function nextTurn() {
  currentPlayerTurn = (currentPlayerTurn + 1) % totalPlayers;
  updatePlayerStatusText();
}

// =================================================================
// 7. FUNGSI MULA SEMULA GAME (RESTART)
// =================================================================
function restartGame() {
  const confirmRestart = confirm(
    "Adakah anda pasti mahu memulakan semula permainan?",
  );
  if (!confirmRestart) return;

  playerPositions = [];
  playerNames = [];
  currentPlayerTurn = 0;
  isGameOver = false;
  isRolling = false;

  document.getElementById("dice-result").innerText =
    "Klik pada dadu untuk baling!";
  const cube = document.getElementById("cube");
  if (cube) cube.style.transform = "rotateX(20deg) rotateY(20deg)";

  const mainLayout = document.querySelector(".main-layout");
  if (mainLayout) {
    mainLayout.style.display = "none";
  }

  document.getElementById("board").style.display = "none";
  document.getElementById("controls").style.display = "none";

  document.getElementById("player-setup").style.display = "block";
  generateNameInputs();
}

// =================================================================
// 8. drawvisual
// =================================================================

function getCellCenter(id, cellSize, cellHeight) {
  const row = Math.floor((id - 1) / 10); // baris ke berapa (0–9)
  let col;

  if (row % 2 === 0) {
    // baris ganjil (nombor naik kiri → kanan)
    col = (id - 1) % 10;
  } else {
    // baris genap (nombor naik kanan → kiri)
    col = 9 - ((id - 1) % 10);
  }

  const x = col * cellSize + cellSize / 2;
  const y = (9 - row) * cellHeight + cellHeight / 2;
  return { x, y };
}

function drawVisuals() {
  const board = document.getElementById("board");
  const elements = document.querySelectorAll(".visual-element");
  elements.forEach((el) => el.remove());

  const cellSize = board.offsetWidth / 10;
  const cellHeight = board.offsetHeight / 10;

  function placeVisual(startId, endId, imgSrc, type) {
    const start = getCellCenter(startId, cellSize, cellHeight);
    const end = getCellCenter(endId, cellSize, cellHeight);

    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("visual-element");
    img.style.position = "absolute";
    img.style.zIndex = "11";
    img.style.pointerEvents = "none";

    const length = Math.sqrt(
      Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2),
    );
    const angle =
      (Math.atan2(end.y - start.y, end.x - start.x) * 180) / Math.PI;

    if (type === "ladder") {
      img.style.width = `${cellSize * 2}px`;
    } else {
      img.style.width = `${cellSize * 3}px`;
      img.style.maxWidth = "120px";
    }

    img.style.transform = `rotate(${angle}deg)`;
    img.style.transformOrigin = "top left";
    img.style.left = `${start.x}px`;
    img.style.top = `${start.y}px`;

    board.appendChild(img);
  }


}
