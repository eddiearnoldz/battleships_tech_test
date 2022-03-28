# Battleships tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  For this one, there will be a light time pressure.  See what you can get done in four hours.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## User stories

```
As a player
So that I can prepare for the game
I would like to place a ship in a board location

As a player
So that I can play a more interesting game
I would like to have a range of ship sizes to choose from

As a player
So the game is more fun to play
I would like a nice command line interface that lets me enter ship positions and shots using commands (rather than using IRB to interact with objects)

As a player
So that I can create a layout of ships to outwit my opponent
I would like to be able to choose the directions my ships face in

As a player
So that I can have a coherent game
I would like ships to be constrained to be on the board

As a player
So that I can have a coherent game
I would like ships to be constrained not to overlap

As a player
So that I can win the game
I would like to be able to fire at my opponent's board

As a player
So that I can refine my strategy
I would like to know when I have sunk an opponent's ship

As a player
So that I know when to finish playing
I would like to know when I have won or lost

As a player
So that I can consider my next shot
I would like to be able to see my hits and misses so far

As a player
So that I can play against a human opponent
I would like to play a two-player game
```

# Requirements

# Initial Thoughts
- we need two boards to play on. These could be a grid of 10 nested arrays with 10 elements in them. grid first line [ -, -, -, M, -, -, -, -, O, X ]
- each value on the board can be either 'blank', 'ship', 'hit', or 'missed'
- the boats can be a class that have different sizes passed in the constructor,who owns them and how damaged they are e.g. damage = [O, O, O, X, X] ( X = hit)
- There should be 4 boats of 2, 3, 4and 5 length 
- the game class will decide who's turn it is, where the boats are positioned and what commands each player makes
- there should be prmopts in teh CLI such as 'You hit a ship', 'You sunk a ship', 'You missed'
- directions and ship placement can be passed in a simple two character command e.g. A5 for fifth element of 1st array (A),
  this would then be the same for positioning the ships. where would you like the boat t start? 'B3' and 'where does it end?' 'B5'
- must catch errors of non existent grid command 'A11 does not exist', 'A ship is already on C5'

# Dependencies

# Screenshots

# Reflections

