export const shuffleArray = (array: number[][]) => {
  for (let rows = array.length - 1; rows > 0; rows--) {
    for (let columns = array[rows].length - 1; columns > 0; columns--) {
      const randomRow = Math.floor(Math.random() * (rows + 1));
      const randomColumn = Math.floor(Math.random() * (columns + 1));

      const temp = array[rows][columns];
      array[rows][columns] = array[randomRow][randomColumn];
      array[randomRow][randomColumn] = temp;
    }
  }
  return array;
};
