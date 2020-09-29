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

    countLiveNeighbours(x, y) {
      let alive = 0
      //top left
      if( x > 0 && y > 0 && this.grid[x - 1][y - 1] ) alive += 1
      //top middle
      if( y > 0 && this.grid[x][y - 1] ) alive += 1
      //top right
      if( x < this.grid.length && y > 0 && this.grid[x + 1][y - 1] ) alive += 1
      //middle left
      if( x > 0 && this.grid[x - 1][y] ) alive += 1
      //middle right
      if( x < this.grid.length && this.grid[x + 1][y] ) alive += 1
      //bottom left
      if( x > 0 && y < this.grid.length && this.grid[x - 1][y + 1] ) alive += 1
      //bottom middle
      if( y < this.grid.length && this.grid[x][y + 1] ) alive += 1
      //bottom right
      if( x < this.grid.length && y < this.grid.length && this.grid[x + 1][y + 1] ) alive += 1
      return alive
    }

    getLiveNumberOfCells() {
        return this.gameCoords.length;
    }

    nextRond() {
        return new Game();
    }
}

module.exports = Game
