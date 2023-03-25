export const puzzleSolution = (initialRows: number, initialColumns: number) => {
  const winArr: number[] = [];
  for (let i = 1; i < initialRows * initialColumns; i++) {
    winArr.push(i);
  }
  winArr.push(0);
  return winArr;
};
