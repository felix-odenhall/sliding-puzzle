# Sliding puzzle / N Puzzle

A simple puzzle game I made using React, TypeScript and styled-components.

## How to play:

The objective of the game is to arrange the grid of tiles in numerical order, starting with 1 at the top-left corner and ending with the blank space at the bottom-right corner.

To achieve this, you need to move the tiles by clicking on them. You can only move a tile if it is adjacent to the blank space, and you can only move a tile vertically or horizontally (up, down, left, or right).

If you want to reset the board and try again, simply click the "Shuffle" button. This will randomize the position of the tiles and generate a new board.

## Start the application:

To start the application type: `npm start`. This will run it in the browser at: [localhost:3000](http://localhost:3000)

## Update the puzzle board:

1. Go to `gameData.ts` - located in: `src/constants/gameData.ts`
2. Set the variables: `initialRows` and `initialColumns` to the desired number of rows and columns, that you would like to use for the puzzle grid.

## Run tests:

To run the tests, type `npm test`. This command will launch the test runner and execute all of the tests included in the test suite.
