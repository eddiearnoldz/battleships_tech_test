class Battleship {
  constructor(size, gridPosition) {
    this.damage = []
    this.gridPosition = gridPosition
    this.size = size
  }

  getDamage() {
    return this.damage;
  }
  getGridPosition() {
    return this.gridPosition;
  }
  populateShip(size) {
    for(let i = 0; i < size; i ++) {
      this.damage.push('O')
    }
  }
  getSize() {
    return this.size;
  }
  hitShip(position) {
    this.damage[position] = 'X'
  }
}

module.exports = Battleship