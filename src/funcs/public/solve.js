import getCandidatesMap from '../internal/solver/getCandidatesMap.js'
import Rating from '../../enums/Rating.js'
import search from '../internal/solver/search.js'
import validate from '../internal/utils/validate.js'

export function solve (
  puzzle,
  blank = ".",
  markers = "123456789",
  minPreSolved = 17,
  reverse = false,
  size = 81
) {
  // Validate the puzzle or throw an error
  const validation = validate(puzzle, blank, markers, size);
  if (validation !== true) throw validation;

  // Ensure that enough puzzle tiles have been pre-solved
  const preSolved = puzzle.filter(char => markers.includes(char)).length;
  if (preSolved < minPreSolved) {
    throw "Too few presolved squares. The minimum is " + minPreSolved;
  }
  
  // Return a solution to the puzzle, or false
  const candidates = getCandidatesMap(puzzle);
  const solution = search(candidates, reverse);
  return solution ? solution.join() : false;
};
