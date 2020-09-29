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

test('should create an initial empty grid of the correct size', () => {
  const game = new Game(5);
  expect(game.grid.length).toBe(5)
  expect(game.grid[0].length).toBe(5)
})
