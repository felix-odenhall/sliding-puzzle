export const shuffle2DArray = <T>(arr: T[][]): T[][] => {
  return arr.map((row) => shuffleArray(row));
};

export const shuffleArray = <T>(arr: T[]): T[] => {
  return [...arr].sort(() => 0.5 - Math.random());
};
