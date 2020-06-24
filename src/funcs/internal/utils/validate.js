export default function (
  puzzle,
  blank,
  markers ,
  size
) {
  if (!puzzle) return "Empty board";
  if (puzzle.length !== 81) {
    return "Invalid board size. Board must be exactly " + size + " squares.";
  }
  const invalidChar = puzzle.find(char => {
    return !(blank + markers).includes(char);
  });
  if (invalidChar) {
    return "Invalid board character encountered: " + invalidChar;
  }
  return true;
};
