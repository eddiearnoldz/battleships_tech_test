import Grid from "./lib/grid.cjs";
import Battleship from "./lib/battleship.cjs";
import readline from 'readline';
const rl = readline.createInterface({input: process.stdin,output: process.stdout});

const grid1 = new Grid
const grid2 = new Grid
const shipPosition = (type, size, example, grid, player) => {
  return new Promise((resolve, reject) => {
    rl.question(`${player}, on which coordinates would you like to place the your ${type}? e.g ${example}\n`, (answer) => {
      grid.ships.push(new Battleship(size, [answer]))
      grid.positionShip(new Battleship(size, [answer]))
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
  await shipPosition('Destroyer', 2, 'A1, A2', grid1, 'Player 1')
  await shipPosition('Submarine', 3, 'A1, A3', grid1, 'Player 1')
  await shipPosition('Cruiser', 3, 'A1, A3', grid1, 'Player 1')
  await shipPosition('Battleship', 4, 'A1, A4', grid1, 'Player 1')
  await shipPosition('Carrier', 5, 'A1, A5', grid1, 'Player 1')
  renderStartingBoard('Player 2', grid2)
  await shipPosition('Destroyer', 2, 'A1, A2', grid2, 'Player 2')
  await shipPosition('Submarine', 3, 'A1, A3', grid2, 'Player 2')
  await shipPosition('Cruiser', 3, 'A1, A3', grid2, 'Player 2')
  await shipPosition('Battleship', 4, 'A1, A4', grid2, 'Player 2')
  await shipPosition('Carrier', 5, 'A1, A5', grid2, 'Player 2')
}

game()
