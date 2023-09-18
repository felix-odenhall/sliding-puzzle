# Sliding puzzle / N Puzzle

A sliding puzzle game built with React, TypeScript, and styled-components.


## How to play:

* The objective of the game is to arrange the tiles in numerical order, with the number 1 in the top-left corner and the blank space in the bottom-right corner.

* To move a tile, click on it. You can only move a tile if it is adjacent to the blank space, and you can only move a tile vertically or horizontally.

* To reset the board, click the "Shuffle" button to randomize the position of the tiles and generate a new board.

## Installation:

This project was developed and tested on Node.js version 18.15.0.

To install the dependencies required to run the application, type: `npm install` in your terminal.

## Getting started:

To start the application, type: `npm start` in your terminal. This will run the app in your browser at: [localhost:3000](http://localhost:3000)

## Updating the puzzle board:

To customize the puzzle board:

1. Open **`src/constants/gameData.ts`** in your text editor.
2. Set the variables **`initialRows`** and **`initialColumns`** to the desired number of rows and columns.

## Running tests:

To run the tests, type: `npm test` in your terminal. This will launch the test runner and execute all of the tests included in the test suite.

## Requirments:
- [x] Responsive design.
- [x] Tiles should be in numerical order from 1 and up.
- [x] There should be exactly one empty space.
- [ ] To move a tile, click on it. You can only move a tile if it is adjacent to the blank space, and you can only move a tile vertically or horizontally. Clicking on a tile will move it one step towards the empty space, along with any other tiles in the same row or column*.
- [x] All text should be in the Google font Open Sans.
- [x] The initial order of the tiles should be randomized.
- [x] There should be a button to shuffle the order.
- [x] If the user solves the puzzle, it should be displayed on the screen in some suitable way.

* **Note**: Currently, the implementation only allows **moving one tile at a time**, even if multiple tiles are in the same row or column as the empty space. Therefore, a user can only move a tile next to the blank space.

## Thoughts of improvments:
- [ ] New design
- [ ] Add a text to display number of clicks
- [ ] Keyboard navigation
- [ ] Button to show information on how to play
