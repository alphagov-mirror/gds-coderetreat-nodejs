const Game = require('./game');

test('new game to have zero live cells', () => {
  var game = new Game()
  expect(game.numberOfLiveCells()).toBe(0)
});

