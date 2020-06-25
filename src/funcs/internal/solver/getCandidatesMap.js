import assign from '../assign.js'
import getSquareCoords from '../utils/getSquareCoords.js'
import validate from '../utils/validate.js'

export default function (
  puzzle,
  markers = "123456789"
) {
  const validation = validate(puzzle, blank, markers, size);
  if (validation !== true) throw validation;

  const squares = getSquareCoords(markers);

  const candidate_map = squares.reduce((map, square) => {
    map[key_maker(square)] = value_maker(markers);
    return map;
  });

  const values_map = squares.reduce((map, square, index) => {
    map[key_maker(square)] = value_maker(puzzle[index]);
    return map;
  });

  // go through each value in values_map
  // if the value is one of the markers,
  //    try to use assign()
  //    if you failed
  //      this whole getCandidatesMap function returns false

};
