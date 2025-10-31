// 🧩 Memory Game Script (Upgraded Version)
document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const restartBtn = document.getElementById("restartBtn");
  const movesCount = document.getElementById("movesCount");
  const matchCount = document.getElementById("matchCount");

  const icons = [
    "🔥", "⚡", "💎", "👾", "🚀", "🎮",
    "🔥", "⚡", "💎", "👾", "🚀", "🎮"
  ];

  let flippedCards = [];
  let matched = 0;
  let moves = 0;

  // Shuffle function
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Create game board
  function createBoard() {
    gameBoard.innerHTML = "";
    shuffle(icons).forEach(icon => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="front"></div>
        <div class="back">${icon}</div>
      `;

      // 💡 Give each icon a random neon color
      card.querySelector(".back").style.color = `hsl(${Math.random() * 360}, 100%, 60%)`;

      // Add click event
      card.addEventListener("click", () => flipCard(card, icon));
      gameBoard.appendChild(card);
    });
  }

  // Flip card logic
  function flipCard(card, icon) {
    if (flippedCards.length < 2 && !card.classList.contains("flip")) {
      card.classList.add("flip");
      flippedCards.push({ card, icon });

      if (flippedCards.length === 2) {
        moves++;
        movesCount.textContent = `Moves: ${moves}`;
        checkMatch();
      }
    }
  }

  // Check for match
  function checkMatch() {
    const [first, second] = flippedCards;
    if (first.icon === second.icon) {
      matched++;
      matchCount.textContent = `Matches: ${matched} / 6`;
      flippedCards = [];

      if (matched === 6) {
        setTimeout(() => alert(`🎉 You won in ${moves} moves!`), 400);
      }
    } else {
      setTimeout(() => {
        first.card.classList.remove("flip");
        second.card.classList.remove("flip");
        flippedCards = [];
      }, 900);
    }
  }

  // Restart game
  restartBtn.addEventListener("click", () => {
    matched = 0;
    moves = 0;
    flippedCards = [];
    movesCount.textContent = "Moves: 0";
    matchCount.textContent = "Matches: 0 / 6";
    createBoard();
  });

  // Initialize
  createBoard();
});

// 💌 Contact Form Submission Handler
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = "⚠️ Please fill out all fields!";
        formStatus.style.color = "orange";
        return;
      }

      // Simulate success
      formStatus.textContent = "✅ Message sent successfully!";
      formStatus.style.color = "#00e5ff";
      contactForm.reset();

      setTimeout(() => {
        formStatus.textContent = "";
      }, 3000);
    });
  }
});

// 🎮 GameVerseHub Game Dictionary
const games = [
  {
    name: "Minecraft",
    description: "Build your own blocky world and embark on creative adventures.",
    image: "images/minecraft.jpg",
    link: "minecraft.html"
  },
  {
    name: "Among Us",
    description: "Find the impostor or deceive your crew in this social deduction game.",
    image: "images/amongus.jpg",
    link: "amongus.html"
  },
  {
    name: "Dead by Daylight",
    description: "Survive or hunt in this thrilling asymmetric horror experience.",
    image: "images/deadbydaylight.jpg",
    link: "deadbydaylight.html"
  },
  {
    name: "Fall Guys",
    description: "Bounce, race, and tumble your way through chaotic obstacle courses!",
    image: "images/fallguys.jpg",
    link: "fallguys.html"
  },
  {
    name: "Mini Game",
    description: "Try your memory and reflexes with our fun in-browser challenge.",
    image: "images/minigame.jpg",
    link: "mini-game.html"
  },
  {
    name: "Mini Militia",
    description: "Engage in 2D multiplayer combat with jetpacks, grenades, and crazy fun battles.",
    image: "images/minimilitia.jpg",
    link: "minimilitia.html"
  }
];

// Example: Log all game names to check dictionary works
games.forEach(game => console.log(game.name));