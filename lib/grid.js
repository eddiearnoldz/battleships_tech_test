const Battleship = require('./battleship')
class Grid {
  constructor() {
    this.currentState =  {
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
  }

  getCurrentState(){
    return this.currentState;
  }
  positionStartOfShip(ship){
    const startRow = ship.getGridPosition()[0].split("")[0]
    const startColumn = ship.getGridPosition()[0].split("")[1]
    this.getCurrentState()[startRow][startColumn - 1] = 'O'
  }
  positionEndOfShip(ship){
    const endRow = ship.getGridPosition()[1].split("")[0]
    const endColumn = ship.getGridPosition()[1].split("")[1]
    this.getCurrentState()[endRow][endColumn - 1] = 'O'
  }

  positionShipHorizontally(ship) {
    const startRow = ship.getGridPosition()[0].split("")[0];
    const startColumn = ship.getGridPosition()[0].split("")[1];
    for(let i = 0; i < ship.getSize(); i ++) {
      this.getCurrentState()[startRow][startColumn - 1 + i] = 'O'
    }
  }
  

}

module.exports = Grid
// const grid = new Grid
// battleship2Double = new Battleship(2, 1, ['A1', 'A3'] )
// console.log(grid.getCurrentState())
// console.log(grid.positionShip(battleship2Double))
// console.log(grid.getCurrentState())