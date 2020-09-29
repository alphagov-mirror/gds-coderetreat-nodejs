class Game {

    gameCoords = [];

    constructor(size, coords = []) {
      this.grid = this.initGrid(size, coords)
    }

    initGrid(size, coords) {
      let grid = new Array(size)
      for(let row = 0; row < size; row++){
        let newCol = new Array(size)
        grid[row] = newCol
      }
      coords.forEach(coord => {
        grid[coord.x][coord.y] = true
        this.gameCoords.push(coord)
      });
      return grid
    }

    getLiveNumberOfCells() {
        return this.gameCoords.length;
    }
    nextRond() {
        return new Game();
    }
}

module.exports = Game
