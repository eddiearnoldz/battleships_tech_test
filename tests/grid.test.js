const Grid = require('../lib/grid.js')
const Battleship = require('../lib/battleship.js')

describe('Grid class', () => {
  let grid;
  let gridLayout;
  let battleship2Double;
  let battleship3Double;
  let battleship4Double;
  let battleship5Double;

  beforeEach(() => {
    grid = new Grid;
    gridLayout = {
      'A': ['-','-','-','-','-','-','-','-','-','-'],
      'B': ['-','-','-','-','-','-','-','-','-','-'],
      'C': ['-','-','-','-','-','-','-','-','-','-'],
      'D': ['-','-','-','-','-','-','-','-','-','-'],
      'E': ['-','-','-','-','-','-','-','-','-','-'],
      'F': ['-','-','-','-','-','-','-','-','-','-'],
      'G': ['-','-','-','-','-','-','-','-','-','-'],
      'H': ['-','-','-','-','-','-','-','-','-','-'],
      'I': ['-','-','-','-','-','-','-','-','-','-'],
      'J': ['-','-','-','-','-','-','-','-','-','-'],
  }
     battleship2Double = new Battleship(2, 1, ['A1', 'A2'] )
     battleship3Double = new Battleship(3, 1, ['B1', 'B4'] )
     battleship4Double = new Battleship(4, 1, ['C1', 'C5'] )
     battleship5Double = new Battleship(5, 1, ['D1', 'D6'] )
  });

  it('has an array of nested arrays that store the state of the game', () => {
   expect(grid.getCurrentState()).toEqual(gridLayout)
  })
  it('can change the start position of a 2-boat on the grid to an O', () => {
    battleship2Double.populateShip(battleship2Double.size)
    grid.positionStartOfShip(battleship2Double)
    expect(grid.getCurrentState()['A']).toEqual(['O','-','-','-','-','-','-','-','-','-'])
  })
  it('can change the end position of a 2-boat on the grid to an O', () => {
    battleship2Double.populateShip(battleship2Double.size)
    grid.positionEndOfShip(battleship2Double)
    expect(grid.getCurrentState()['A']).toEqual(['-','O','-','-','-','-','-','-','-','-'])
  })
})