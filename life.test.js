const { Grid } = require('./life')

test('returns a square two dimensional array', () => {
    const grid = new Grid()
    const myGrid = grid.generateBaseGrid(5, [])

    expect(myGrid.length).toBe(5)
    expect(myGrid[0].length).toBe(5)
})

test('correctly sets starting live cells', () => {
    const grid = new Grid()
    const myGrid = grid.generateBaseGrid(5, [
        {x: 1, y: 1},
        {x: 2, y: 2},
        {x: 3, y: 3}
    ])

    expect(myGrid[0][0]).toBe(false)
    expect(myGrid[1][1]).toBe(true)
    expect(myGrid[2][2]).toBe(true)
    expect(myGrid[3][3]).toBe(true)
})

test('should count a cells live neighbours', () => {
    const grid = new Grid()
    const myGrid = grid.generateBaseGrid(5, [
        {x: 1, y: 1},
        {x: 2, y: 2},
        {x: 3, y: 3}
    ])
})


