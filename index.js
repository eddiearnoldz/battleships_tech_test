import Grid from "./lib/grid.cjs";
import Battleship from "./lib/battleship.cjs";
import readline from 'readline';
const rl = readline.createInterface({input: process.stdin,output: process.stdout});

const grid1 = new Grid
const grid2 = new Grid
const destroyerPosition = () => {
  return new Promise((resolve, reject) => {
    rl.question("In which position would you like to place the front of your Destroyer? e.g A1, A2 ", (answer) => {
      const Position = answer
      const destroyerP1 = new Battleship(2, 1, [Position])
      grid1.positionShip(destroyerP1)
      console.table(grid1.getCurrentState())
      resolve()
    })
  })
}
const submarinePosition = () => {
  return new Promise((resolve, reject) => {
    rl.question("In which position would you like to place the front of your Destroyer? e.g A1, A3 ", (answer) => {
      const Position = answer
      const submarineP1 = new Battleship(3, 1, [Position])
      grid1.positionShip(submarineP1)
      console.table(grid1.getCurrentState())
      resolve()
    })
  })
}
const cruiserPosition = () => {
  return new Promise((resolve, reject) => {
    rl.question("In which position would you like to place the front of your Destroyer? e.g A1, A3 ", (answer) => {
      const Position = answer
      const cruiserP1 = new Battleship(3, 1, [Position])
      grid1.positionShip(cruiserP1)
      console.table(grid1.getCurrentState())
      resolve()
    })
  })
}
const battleshipPosition = () => {
  return new Promise((resolve, reject) => {
    rl.question("In which position would you like to place the front of your Destroyer? e.g A1, A4 ", (answer) => {
      const Position = answer
      const battleshipP1 = new Battleship(4, 1, [Position])
      grid1.positionShip(battleshipP1)
      console.table(grid1.getCurrentState())
      resolve()
    })
  })
}
const carrierPosition = () => {
  return new Promise((resolve, reject) => {
    rl.question("In which position would you like to place the front of your Carrier? e.g A1, A5 ", (answer) => {
      const Position = answer
      const destroyerP1 = new Battleship(5, 1, [Position])
      grid1.positionShip(destroyerP1)
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
  await destroyerPosition()
  await submarinePosition()
  await cruiserPosition()
  await battleshipPosition()
  await carrierPosition()
}

game()
