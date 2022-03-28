const Grid = require('../lib/grid.cjs')
const Battleship = require('../lib/battleship.cjs')

describe('Grid class', () => {
  let grid;
  let gridLayout;
  let battleship2Double;
  let battleship3Double;
  let battleship4Double;
  let battleship5Double;

  beforeEach(() => {
    grid = new Grid;
    gridLayout = [
      ['-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-'],
      ['-','-','-','-','-','-','-','-','-','-'],
    ]
     battleship2Double = new Battleship(2, 1, ['A1, A2'] )
     battleship3Double = new Battleship(3, 1, ['B1, B3'] )
     battleship4Double = new Battleship(4, 1, ['C1, C4'] )
     battleship5Double = new Battleship(5, 1, ['D1, D5'] )
     verticalbattleship4Double = new Battleship(4, 1, ['A1, D1'] )
  });

  it('has an array of nested arrays that store the state of the game', () => {
   expect(grid.getCurrentState()).toEqual(gridLayout)
  })
  it('can position a 3-boat horizontally on the board changing relevant position from - to O', () => {
    battleship3Double.populateShip(battleship3Double.size)
    grid.positionShip(battleship3Double)
    expect(grid.getCurrentState()[1]).toEqual(['O','O','O','-','-','-','-','-','-','-'])
  })
  it('can position a 5-boat horizontally on the board changing relevant position from - to O', () => {
    battleship5Double.populateShip(battleship5Double.size)
    grid.positionShip(battleship5Double)
    expect(grid.getCurrentState()[3]).toEqual(['O','O','O','O','O','-','-','-','-','-'])
  })
  it('can position a 4-boat vertically on the board changing relevant position from - to O', () => {
    verticalbattleship4Double.populateShip(verticalbattleship4Double.size)
    grid.positionShip(verticalbattleship4Double)
    expect(grid.getCurrentState()[0]).toEqual(['O','-','-','-','-','-','-','-','-','-'])
    expect(grid.getCurrentState()[1]).toEqual(['O','-','-','-','-','-','-','-','-','-'])
    expect(grid.getCurrentState()[2]).toEqual(['O','-','-','-','-','-','-','-','-','-'])
    expect(grid.getCurrentState()[3]).toEqual(['O','-','-','-','-','-','-','-','-','-'])
  })
  it('can change a blank space to an M for a miss', ()  => {
    grid.missedShot('A1')
    expect(grid.getCurrentState()[0]).toEqual(['M','-','-','-','-','-','-','-','-','-'])
  })
  it('can change a space to an X for a hit', () => {
    grid.hitShot('A1')
    expect(grid.getCurrentState()[0]).toEqual(['X','-','-','-','-','-','-','-','-','-'])
  })
  it('stores the ship once it has been plced on the grid', () => {
    grid.positionShip(verticalbattleship4Double)
    expect(grid.getShips().length).toBe(1)
  })

})