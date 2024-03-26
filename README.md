# 331-GAME

![GAME LOOP](GAME%20LOOP.png)

1. GDD - Game Design Document

## Hangman
1. Wstęp:

Gra logiczna polegająca na odgadywaniu pełnej treści frazy z puli fraz. Odgadywanie odbywa się w turach odejmujących punkty za niepoprawną odpowiedź. Niepoprawne podpowiedzi generują (rysują) "wisielca" aż do przegrania po uzyskaniu max. ilości punktów karnych.

2. Przebieg gry:

- Po uruchomieniu gry losowana jest fraza (losowość) ze tablicy tekstów.
- Wyświetlane są miejsca do wpisania znaków (input)
- Każde wpisanie sprawdza poprawność wpisanego znaku.
- Jeśli poprawnie to możeby wybierać następnyu znak, a jeśli nieopoprawnie to pole input jest czyszczone a odejmownie punktów jest ilustrowane usupoełnieniem obrazu "wisielca"
- przekroczenie limitu punktów karnych (7) powoduje porażkę, a odgadnięcie frazy zwycięstwo i możliwość zagania ponownego
- plansza końcowa (GAME OVER lub GRATULACJE)

3. Środki techniczne:
- grafiki (części ciała)
- inputs
- buttons

4. Layout (projekt graficzny)

   
6. Game loop
   - START
   - GAMEPLAY event - kepress
   - GEME OVER / CONGRATS

```html
...<style>
      .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: gray;
        border-radius: 10px;
        padding: 3em;
        text-align: center;
      }
      #board {
        display: none;
      }
      #endscreen {
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="center" id="startScreen">
      <h1>EKRAN STARTOWY</h1>
      <button id="btnStart">START</button>
    </div>
    <div class="center" id="board">
      <h1>PLANSZA GRY</h1>
      <button id="btn1">BTN 1</button>
      <button id="btn2">BTN 2</button>
    </div>
    <div class="center" id="endScreen">
      <h1>EKRAN KOŃCOWY</h1>
      <div id="score"></div>
      <button id="btnEnd">SPRÓBUJ JESZCZE RAZ</button>
    </div>
    <script>
      const startscreen = document.getElementById("startscreen");
      const board = document.getElementById("board");
      const endscrteen = document.getElementById("endscrteen");
      const score = document.getElementById("score");

      const btnStart = document.getElementById("btnStart");
      const btn1 = document.getElementById("btn1");
      const btn2 = document.getElementById("btn2");
      const btnEnd = document.getElementById("btnEnd");

      console.log();

      btnStart.addEventListener("click", startGame);
      btn1.addEventListener("click", checkGame);
      btn2.addEventListener("click", checkGame);
      btnEnd.addEventListener("click", prepareGame);

      let state = 0;
      let pkt = 0;
      let messages = ["Gratulacje, Wygrałeś!", "GAME OVER, try again"];

      prepareGame();

      function prepareGame() {
        console.log("PREPARE GAME");
        state = 0;
        pkt = 0;
        board.style.display = "none";
        endScreen.style.display = "none";
        startScreen.style.display = "block";
      }
      function startGame() {
        console.log("START GAME");
        startScreen.style.display = "none";
        board.style.display = "block";
      }
      function gameLoop() {
        console.log("GAME LOOP");
        endGame();
      }

      function checkGame(event) {
        if (event.target.id === "btn1") {
          pkt = 1;
        } else if (event.target.id === "btn2") {
          pkt = 2;
        }
        gameLoop();
      }

      function endGame() {
        if (pkt === 1) {
          console.log("WIN");
          score.innerText = messages[0];
        } else if (pkt === 2) {
          console.log("LOSE");
          score.innerText = messages[1];
        }
        board.style.display = "none";
        endScreen.style.display = "block";
      }
    </script>
...

```
   
8. Canvas



### Links

The ultimate introduction to Pygame - https://www.youtube.com/watch?v=AY9MnQ4x3zk

Vertical Platformer Game Tutorial with JavaScript and HTML Canvas - https://www.youtube.com/watch?v=rTVoyWu8r6g

https://spicyyoghurt.com/tutorials/html5-javascript-game-development/create-a-proper-game-loop-with-requestanimationframe

https://www.geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/

https://betterprogramming.pub/create-tic-tac-toe-with-html-and-javascript-ea1c245a9f1f

https://github.com/Lunakepio/Mario-Kart-3.js/tree/main/src

Remove from array - https://www.geeksforgeeks.org/remove-elements-from-a-javascript-array/

