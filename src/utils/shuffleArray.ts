export const shuffleArray = <T>(arr: T[]): T[] => {
  return arr.sort((a, b) => 0.5 - Math.random());
};
