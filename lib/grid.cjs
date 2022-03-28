const Battleship = require('./battleship.cjs')
class Grid {
  constructor() {
    this.currentState =  [
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
  }

  getCurrentState(){
    return this.currentState;
  }
  positionShipHorizontally(ship) {
    const startRow = ship.getGridPosition()[0].split("")[0];
    const convertedLetterToNumber = this.#convertLetterToNumber(startRow)
    const startColumn = ship.getGridPosition()[0].split("")[1];
    for(let i = 0; i < ship.getSize(); i ++) {
      this.getCurrentState()[convertedLetterToNumber][startColumn - 1 + i] = 'O'
    }
  }
  positionShipVerticaly(ship) {
    const startRow = ship.getGridPosition()[0].split("")[0];
    const convertedLetterToNumber = this.#convertLetterToNumber(startRow)
    const startColumn = ship.getGridPosition()[0].split("")[1];
    for(let i = 0; i < ship.getSize(); i ++) {
      this.getCurrentState()[convertedLetterToNumber + i][startColumn -1] = 'O'
    }
  }
  positionShip(ship) {
    ship.getGridPosition()[0][0] === ship.getGridPosition()[0][4]
     ?
    this.positionShipHorizontally(ship)
    :
    this.positionShipVerticaly(ship)
  }
  missedShot(position) {
    const convertedLetterToNumber = this.#convertLetterToNumber(position[0])
    this.getCurrentState()[convertedLetterToNumber][position[1] - 1] = 'M'
  }
  hitShot(position) {
    const convertedLetterToNumber = this.#convertLetterToNumber(position[0])
    this.getCurrentState()[convertedLetterToNumber][position[1] - 1] = 'X'
  }
  printGrid() {
  console.log(this.getCurrentState().flat())
  }
  #convertLetterToNumber(letter) {
    const conversion = {'A': 0, 'B': 1,'C': 2, 'D': 3,'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9}
    return conversion[letter]
  }
  
}

module.exports = Grid
// const grid = new Grid
// battleship2Double = new Battleship(2, 1, ['A1', 'A3'] )
// battleship5Double = new Battleship(5, 1, ['E4', 'H4'] )
// battleship3Double = new Battleship(3, 1, ['B1', 'B3'] )
// battleship4Double = new Battleship(4, 1, ['C5', 'C8'] )
// console.log(grid.getCurrentState())
// console.log(grid.positionShipHorizontally(battleship2Double))
// console.log(grid.positionShipHorizontally(battleship3Double))
// console.log(grid.positionShipHorizontally(battleship4Double))
// console.log(grid.positionShipVerticaly(battleship5Double))
// console.table(grid.getCurrentState())
// console.log(grid.printGrid())