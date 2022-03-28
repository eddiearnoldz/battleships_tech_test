import Grid from "./lib/grid.cjs";
import Battleship from "./lib/battleship.cjs";
import readline from 'readline';
const rl = readline.createInterface({input: process.stdin,output: process.stdout});

const grid1 = new Grid
const grid2 = new Grid
const shipPosition = (type, size, example, grid) => {
  return new Promise((resolve, reject) => {
    rl.question(`On which coordinates would you like to place the your ${type}? e.g ${example}\n`, (answer) => {
      const Position = answer
      grid.ships.push(new Battleship(size, [Position]))
      grid.positionShip(new Battleship(size, [Position]))
      console.table(grid.getCurrentState())
      resolve()
    })
  })
}
const renderStartingBoard = (player,grid) =>{
  console.log(`Lets play battle ships. ${player} anchor you ships`)
  console.table(grid.getCurrentState())
}

const game = async () => {
  renderStartingBoard('Player 1', grid1)
  await shipPositionPlayer1('Destroyer', 2, 'A1, A2', grid1)
  await shipPositionPlayer1('Submarine', 3, 'A1, A3', grid1)
  await shipPositionPlayer1('Cruiser', 3, 'A1, A3', grid1)
  await shipPositionPlayer1('Battleship', 4, 'A1, A4', grid1)
  await shipPositionPlayer1('Carrier', 5, 'A1, A5', grid1)
  renderStartingBoard('Player 2', grid2)
}

game()
