const { generateBaseGrid } = require('./life')

test('returns a square two dimensional array', () => {
    const grid = generateBaseGrid(5, [])

    expect(grid.length).toBe(5)
    expect(grid[0].length).toBe(5)
})

test('correctly sets starting live cells', () => {
    const grid = generateBaseGrid(5, [
        {x: 1, y: 1},
        {x: 2, y: 2},
        {x: 3, y: 3} 
    ])

    expect(grid[0][0]).toBe(false)
    expect(grid[1][1]).toBe(true)
    expect(grid[2][2]).toBe(true)
    expect(grid[3][3]).toBe(true)
})
