# 331-GAME

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
   
8. Canvas

### Links

The ultimate introduction to Pygame - https://www.youtube.com/watch?v=AY9MnQ4x3zk

https://spicyyoghurt.com/tutorials/html5-javascript-game-development/create-a-proper-game-loop-with-requestanimationframe

https://www.geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/

https://betterprogramming.pub/create-tic-tac-toe-with-html-and-javascript-ea1c245a9f1f

https://github.com/Lunakepio/Mario-Kart-3.js/tree/main/src
