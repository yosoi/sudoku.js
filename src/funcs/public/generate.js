import assign from '../internal/solver/assign.js'
import clamp from '../internal/utils/clamp.js'
import cross from '../internet/utils/cross.js'
import getCandidatesMap from '../internal/solver/getCandidatesMap.js'
import getSquareCoords from '../internal/utils/getSquareCoords.js'
import randInt from '../internal/utils/randInt.js'
import Rating from '../../enums/Rating.js'
import shuffle from '../internal/utils/shuffle.js'
import { solve } from './solve.js'
import stripDuplicates from '../internal/utils/stripDuplicates.js'

export function generate(
  difficulty = Rating.EASY,
  blank = ".",
  markers = "123456789",
  size = 81,
  unique = true
) {
  // initialize a blank candidates map like:
  // {"A1": "123456789", ..., "I9": "123456789"}
  const candidatesMap = getCandidatesMap(blank * size, markers);

  // guess values until we solve enough squares to satisfy difficulty rating
  // then, validate and return the puzzle
  shuffle(getSquareCoords(markers)).forEach((square, index) => {

    // randomly choose one of the available candidates for this square
    const candidates = candidatesMap[square];
    const randomCandidate = candidates[randInt(0, candidates.length)];

    // try to assign the randomly chosen candidate to the map
    if (!assign(candidatesMap, square, randomCandidate)) break;

    // get all squares in map that only have one candidate
    const solved = Object.entries(candidatesMap)
      .filter(([square, value]) => value.length === 1)
      .map(([square, value]) => value);

    // if the difficulty requirements are met
    if (solved.length >= difficulty && stripDuplicates(solved).length >= 8) {

      // TODO: see if there can ever be extras and adjust accordingly
      // if you have extras, get rid of them
      if (solved.length > difficulty) {
        throw "The resulting puzzle will be too easy.";
      }

      // create a puzzle from the candidates map like:
      // "...1..34.532..8.90...etc."
      let puzzle = Object.entries(candidatesMap)
        .reduce((b, [square, value]) => {
          b += value.length === 1 ? value : blank;
          return b;
        });

      // return the puzzle if it is solvable
      if (solve(puzzle)) {
        return puzzle;
      }
    }
  });

  // try again
  return generate(difficulty, blank, markers, size, unique);
};
