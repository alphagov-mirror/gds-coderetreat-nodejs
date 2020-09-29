// return 2D array
// each cell can be alive or dead (true or false)
// true is alive, false is dead
function generateBaseGrid(size) {
    let grid = []
    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        let column = []
        // sfount JavaScript hacks
        // grid.push(new Array(size).map(() => false))
        for (let columnIndex = 0; columnIndex < size; columnIndex++) {
            column.push(false)
        }
        grid.push(column)
    }
    return grid
}

module.exports.generateBaseGrid = generateBaseGrid