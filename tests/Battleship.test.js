const Battleship = require('../lib/battleship.js')

describe('Battleship class', () => {
  let battleship;

  beforeEach(() => {
    battleship = new Battleship(3, 1, ['A1', 'C1']);
  });

  it('has an array that stores its damage', () => {
    expect(battleship.getDamage()).toEqual([])
  })
  it('shows which player owns the ship', () => {
    expect(battleship.getPlayer()).toBe(1)
  })
  it('knows its grid positon when initialized', () => {
    expect(battleship.getGridPosition()).toEqual(['A1', 'C1'])
  })
  it('populates the damage array with Os based on ship size', () => {
    battleship.populateShip(3)
    expect(battleship.getDamage()).toEqual(['O', 'O', 'O'])
  })

})