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
  const candidates = getCandidatesMap(blank * size);
  const squares = getSquareCoords(markers);
  const shuffledSquares = shuffle(squares);
  shuffledSquares.forEach((square, index) => {
    // TODO: Stuff!
  });
  return generate(difficulty, blank, markers, size, unique);
};
