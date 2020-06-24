export default function (a, b) {
  var result = [];
  for(var ai in a){
    for(var bi in b){
      result.push(a[ai] + b[bi]);
    }
  }
  return result;
};
