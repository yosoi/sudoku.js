import validate from './validate.js'

export default function (puzzle) {
  const validation = validate(puzzle);
  if (!validation) throw validation;
  console.log(puzzle.map((char, index) => {
    let view = char + " ";
    if (index % 3 === 2) view += "  ";
    if (index % 9 === 8) view += "\n";
    if (index % 27 === 26) view += "\n";
    return view;
  }).join());
};
