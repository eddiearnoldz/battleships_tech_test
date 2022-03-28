import Grid from "./lib/grid.cjs";
import Battleship from "./lib/battleship.cjs";
import readline from 'readline';
const rl = readline.createInterface({input: process.stdin,output: process.stdout});

const grid1 = new Grid
const grid2 = new Grid
const shipPositionPlayer1 = (type, size, example) => {
  return new Promise((resolve, reject) => {
    rl.question(`On which coordinates would you like to place the your ${type}? e.g ${example}\n`, (answer) => {
      const Position = answer
      grid1.ships.push(new Battleship(size, 1, [Position]))
      grid1.positionShip(new Battleship(size, 1, [Position]))
      console.table(grid1.getCurrentState())
      resolve()
    })
  })
}
const renderStartingBoard = () =>{
  console.log("Lets play battle ships")
  console.table(grid1.getCurrentState())
}

const game = async () => {
  renderStartingBoard()
  await shipPositionPlayer1('Destroyer', 2, 'A1, A2')
  await shipPositionPlayer1('Submarine', 3, 'A1, A3')
  await shipPositionPlayer1('Cruiser', 3, 'A1, A3')
  await shipPositionPlayer1('Battleship', 4, 'A1, A4')
  await shipPositionPlayer1('Carrier', 5, 'A1, A5')
}

game()
