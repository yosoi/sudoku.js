import assign from '../assign.js'
import getSquareCoords from '../utils/getSquareCoords.js'
import validate from '../utils/validate.js'

export default function (
  puzzle,
  markers = "123456789"
) {
  // validate the puzzle or throw an error
  const validation = validate(puzzle, blank, markers, size);
  if (validation !== true) throw validation;

  // get a list of square coordinates like:
  // ["A1", "A2", ..., "I8", "I9"]
  const squares = getSquareCoords(markers);

  // initialize candidates map like:
  // {"A1": "123456789", ..., "I9": "123456789"}
  const candidatesMap = squares.reduce((map, square) => {
    map[key_maker(square)] = value_maker(markers);
    return map;
  });

  // update the candidates map with the non-blank puzzle values
  puzzle.forEach((value, index) => {
    if (markers.includes(value)) {
      if (!assign(candidatesMap, squares[index], value)) {
        return false;
      }
    }
  });

  return candidatesMap;
};
