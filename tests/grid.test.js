const Grid = require('../lib/grid.js')
const Battleship = require('../lib/battleship.js')

describe('Grid class', () => {
  let grid;
  let gridLayout;
  let battleship2;
  let battleship3;
  let battleship4;
  let battleship5;

  beforeEach(() => {
    grid = new Grid;
    gridLayout = [
      ['-', '-','-', '-','-', '-','-', '-','-', '-'],
      ['-', '-','-', '-','-', '-','-', '-','-', '-'],
      ['-', '-','-', '-','-', '-','-', '-','-', '-'],
      ['-', '-','-', '-','-', '-','-', '-','-', '-'],
      ['-', '-','-', '-','-', '-','-', '-','-', '-'],
      ['-', '-','-', '-','-', '-','-', '-','-', '-'],
      ['-', '-','-', '-','-', '-','-', '-','-', '-'],
      ['-', '-','-', '-','-', '-','-', '-','-', '-'],
      ['-', '-','-', '-','-', '-','-', '-','-', '-'],
      ['-', '-','-', '-','-', '-','-', '-','-', '-'],
     ];
     battleship2Double = new Battleship(2, 1, ['A1', 'A3'] )
     battleship3Double = new Battleship(3, 1, ['B1', 'B4'] )
     battleship4Double = new Battleship(4, 1, ['C1', 'C5'] )
     battleship5Double = new Battleship(5, 1, ['D1', 'D6'] )
  });

  it('has an array of nested arrays that store the state of the game', () => {
   expect(grid.getCurrentState()).toEqual(gridLayout)
  })
})