class Game {

    constructor(size) {
      this.grid = this.initGrid(size)
    }

    initGrid(size) {
      let grid = new Array(size)
      for(let row = 0; row < size; row++){
        let newCol = new Array(size)
        grid[row] = newCol
      }
      return grid
    }

    getLiveNumberOfCells() {
        return 0;
    }
    nextRond() {
        return new Game();
    }
}

module.exports = Game
