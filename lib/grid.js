const Battleship = require('./battleship')
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
  missedShot(position) {
    const convertedLetterToNumber = this.#convertLetterToNumber(position[0])
    this.getCurrentState()[convertedLetterToNumber][position[1] - 1] = 'M'
  }
  hitShot(position) {
    const convertedLetterToNumber = this.#convertLetterToNumber(position[0])
    this.getCurrentState()[convertedLetterToNumber][position[1] - 1] = 'X'
  }
  #convertLetterToNumber(letter) {
    const conversion = {'A': 0, 'B': 1,'C': 2, 'D': 3,'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9}
    return conversion[letter]
  }
  

}

module.exports = Grid
// const grid = new Grid
// battleship2Double = new Battleship(2, 1, ['A1', 'A3'] )
// console.log(grid.getCurrentState())
// console.log(grid.positionShipVerticaly(battleship2Double))
// console.log(grid.getCurrentState())
// console.log(grid.convertLetterToNumber('B'))