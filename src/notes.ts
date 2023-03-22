export const notes = {
  // Techs I need to use: React
  // Techs I want to use to create this: TypeScript, styled-components
  // - Why TypeScript: I have used it in projects, and I want to keep learning it
  // - Why styled-components: I will need to display the board, using styled-components will help me
  //
  // What do I need:
  //
  // 1. - A game board with X by X size - this should be able to change
  //
  // - 1.a
  //      starting white creating a static 3 x 3 board:
  //          0, 1, 2,
  //          3, 4, 5,
  //          6, 7, 8,
  // - 1.b
  //      display the board:
  //          with styled components i can create a div that uses grid:
  //          this grid will take columns and rows, both set to 3
  //      display the buttons:
  //          to display the buttons I need to loop through the board, this can be done with map()
  //          if the board is in an array:
  // - 1.c
  //      make the board into an array:
  //         const board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  //
  // - 1.d
  //      hide number 0, so it looks like a blank tile
  //
  // - 1.e
  //      I'm thinking that instead of actually swapping the number, I'm going to update the board,
  //      which means that I can use a useState to update the board when a button is clicked
  //
  // 2 - find the 0:
  //
  // - 2.a
  //     I want to figure out if a button can be moved, to do this, I need to know what the up, down,
  //     left and right neighbours are. If any of these is number 0, the board should be updated
  //     with the number i clicked now taking the "blank" button (0), and the 0 should be where I clicked
  //     the button. After doing some research I found out that a 2D array would make more sense,
  //     as it would make it easier for me to find the coordinates.
  //
  // - 2.b
  //     the 2D array would optimally look like this:
  //        [
  //        [0, 1, 2],
  //        [0, 1, 2],
  //        [0, 1, 2],
  //        ]
  //     with this top left = 0 0, top right = 0 2, middle middle = 1 1, bottom middle = 2 1
  //     Now it would be easier to find the neighbours, but it also mean that I need to change the code:
  //
  //        board = [
  //        [0, 1, 2],
  //        [0, 1, 2],
  //        [0, 1, 2],
  //        ]
  //
  // - 2.c
  //     This created a problem with the map, as it only showed the "rows" (3), which made me need to use
  //     another map to map over the rows. However, when I updated the board to the 2D array, I was no longer
  //     getting the numbers 0-8, instead i got 0-2 on each row.
  //
  // - 2.d
  //     To solve this problem i updated the numbers in the 2D array, to be:
  //
  //        board = [
  //        [0, 1, 2],
  //        [3, 4, 5],
  //        [6, 7, 8],
  //        ]
  //
  // 3 - find the neighbours:
  //
  // - 3.a
  //     I first need the position on the button I'm clicking, I can achieve this by creating a handleClick
  //     that takes both the rowIndex and colIndex, the rowIndex I get from the puzzleboard.map, and the
  //     colIndex I get from the nested map: rows. When I logged this clicking 3 = 1 0, clicking 7 = 2 1
  //     I belive that this is what I need to find the neighbours.
  //
  // - 3.b
  //     I need to check which row is above
  //     the one I'm clicking meaning that i need a -1 for the rowIndex to check what is above and a + 1
  //     for the rowIndex to check the array below. I realised that this however created a problem, when I
  //     added the bottom check, it said that I was on the bottom row and the top, when I clicked at the
  //     top row and undefined when I clicked on the bottom row.
  //     This made me realise that when I coppied the logic from the top row, I was still looking if the
  //     buttom rowIndex was greater than 0. Updating it to less then, always logged: bottom row. this is why
  //     I needed to use puzzleBoard.length - 1. because the length of the board is 3, i need the -1, as the
  //     rows are 0, 1, 2
  //
  //     This displayed the whole row above/below the one I clicked
  //     I found out that this is because I also need to add the colIndex. which made me be able to only
  //     see the neighbour under or above instead of the full row.
  //
  //     To get the left and the right I could use the same logic, but I had to change the check of rowIndex to colIndex,
  //     I also needed to change the -1 from the rowIndex to the colIndex, as I now wanted to check the colums
  //     instead of the rows.
  //
  // 4 - swap the tiles:
  //
  // - 4.a
  //     If a tile has a neighbour with the number 0, the clicked tile should swap with the 0. the 0 will take
  //     the clicked tiles number, and the clicked tile should become 0. This is where the useState comes in.
  //     When I swap the tiles, I create a new copy of the puzzleBoard by using setPuzzleboard([...])
  //
  //     To be able to swap, I need to start by looking if the number is 0, like:  if (top === 0) then do
  //     do the update (this looks if the top neighbour has the number of 0).
  //     IF the top neighbour is 0 then I want to change that tile. To do this, I need to take the position of
  //     that tile and update the value with the tile I clicked on, and set the value of the one I clicked to 0
  //
  //     puzzleBoard[rowIndex - 1][colIndex] = puzzleBoard[rowIndex][colIndex];
  //     puzzleBoard[rowIndex][colIndex] = 0;
  //
  //     The difference between checking up/down and left/right is that for checking up/down i have a -/+
  //     on the rowIndex, and left/right I have a -/+ on the colIndex
  //
  //
  // 5 - the easy part:
  //
  //        1. I have worked with both react and styled-components before, so displaying the layout was easy
  //        2. I have created a bingo app with a 3x3 grid using nested (2d) arrays, which made me understand
  //           what I logic I could use
  //        3. As I have been working with react and a grid before I also knew that I would need a useState to
  //           update the puzzleboard, once a tile is being moved.
  //
  // 6 - challanges
  //
  //        1: Being able to move/slide/swap the tile was difficult. I understood that I needed to look for the
  //           positions on the board to be able to check if the clicked tile could be moved. If I was to do
  //           this, I needed to have a blank tile. I decided to use the 0 as the blank, as 0 is not to be on
  //           on the board, I could set it to not display the number, and also have a different background
  //           this would create the illusion of a "blank" space, while it is acctually there.
  //
  //        2: I understood the pieces I needed, but I had not created a position swapper before, and with the
  //           Bingo App I created I was not creating the bingo board based on the 2D array, I used it to
  //           go through the winning condition. This made me look up how to work with nested arrays
};
