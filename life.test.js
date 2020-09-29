const { generateBaseGrid } = require('./life')

test('returns a square two dimensional array', () => {
    const grid = generateBaseGrid(5)

    expect(grid.length).toBe(5)
    expect(grid[0].length).toBe(5)
})