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

test('should correct set initial live cells when populated', () => {
  const game = new Game(5, [{x:1, y:1}, {x:2,y:2}, {x:3,y:3}])
  expect(game.grid[0][0]).toBe(undefined)
  expect(game.grid[1][1]).toBe(true)
  expect(game.grid[2][2]).toBe(true)
  expect(game.grid[3][3]).toBe(true)
  expect(game.getLiveNumberOfCells()).toBe(3)
})

test('should correct count the live neighbour of a cell', () => {
  const game = new Game(5, [{x:1, y:1}, {x:2,y:2}, {x:3,y:3}])
  const liveNeighbours1x1 = game.countLiveNeighbours(1, 1)
  expect(liveNeighbours1x1).toBe(1)
  const liveNeighbours2x2 = game.countLiveNeighbours(2,2)
  expect(liveNeighbours2x2).toBe(2)
})
