const Game = require('./game');

test('when a game is initialised it has no live cells', () => {
  const game = new Game();
  expect(game.getLiveNumberOfCells()).toBe(0)
});

test('when a game has no live cells the next round also has no live cells', () => {
  var game = new Game();
  expect(game.getLiveNumberOfCells()).toBe(0)
  game = game.nextRond();
  expect(game.getLiveNumberOfCells()).toBe(0)
})