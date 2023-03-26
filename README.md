# Sliding puzzle / N Puzzle

A sliding puzzle game built with React, TypeScript, and styled-components.


## How to play:

* The objective of the game is to arrange the tiles in numerical order, with the number 1 in the top-left corner and the blank space in the bottom-right corner.

* To move a tile, click on it. You can only move a tile if it is adjacent to the blank space, and you can only move a tile vertically or horizontally.

* To reset the board, click the "Shuffle" button to randomize the position of the tiles and generate a new board.

## Instalation:

This project was developed and tested on Node.js version 18.15.0.

To install the dependencies required to run the application, run the following command in your terminal: `npm install`

## Getting started:

To start the application, typ: `npm start`. This will run the app in your browser at: [localhost:3000](http://localhost:3000)

## Updating the puzzle board:

To update the puzzle board:

1. Open **`src/constants/gameData.ts`** in your text editor.
2. Set the variables **`initialRows`** and **`initialColumns`** to the desired number of rows and columns.

## Running tests:

To run the tests, type `npm test`. This will launch the test runner and execute all of the tests included in the test suite.

## Requirments:
- [x] Responsive design.
- [x] Tiles should be in numerical order from 1 and up.
- [x] There should be exactly one empty space.
- [ ] Tiles are moved by clicking on a tile in the same column or row as the empty space, then the clicked tile and all tiles between it and the empty space are moved one step towards the empty space. So if the user clicks on the five in the example wireframe below, both the five and the ten will be moved one step down * .
- [x] All text should be in the Google font Open Sans.
- [x] The initial order of the tiles should be randomized.
- [x] There should be a button to shuffle the order.
- [x] If the user solves the puzzle, it should be displayed on the screen in some suitable way.

* **Note**: Currently, the implementation only allows **moving one tile at a time**, even if multiple tiles are in the same row or column as the empty space. Therefore, if the user clicks on a tile, only that tile will be moved, even if there are other tiles between it and the empty space.

## Thoughts of improvments:
- [ ] New design
- [ ] Add a text to display number of clicks
- [ ] Keyboard navigation
- [ ] Button to show information on how to play
