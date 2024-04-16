      const wins = [
        "111000000",
        "000111000",
        "000000111",
        "100100100",
        "010010010",
        "001001001",
        "100010001",
        "001010100",
      ];
      const state = ["O", "X", "O", null, "O", null, "O", null, "O"];

      checkWins();

      function checkWins() {
        let winX = 0;
        let winO = 0;
        for (let j = 0; j < wins.length; j++) {
          for (let i = 0; i < state.length; i++) {
            console.log(wins[j][i]);
            if (wins[j][i] === "1") {
              if (state[i] === "X") {
                winX++;
              }
              if (state[i] == "O") {
                winO++;
              }
              if (winX > 2) {
                gameOver("X");
                break;
              }
              if (winO > 2) {
                gameOver("O");
                break;
              }
              if (i === 0) {
                gameOver(null);
                break;
              }
            }
            console.log("--------------", winO, winX);
          }
        }
      }

      function gameOver(winner) {
        console.log("checking who wins");
        if (winner == null) {
          console.log("Tie");
        }
        console.log("Congrats ", winner, " wins");
      }
