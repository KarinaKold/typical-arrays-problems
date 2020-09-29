
exports.min = function min (array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  if (array.length <= 0) {
    return 0;
  } else {
    return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  if (array.length <= 0) {
    return 0;
  } else {
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  if (array.length <= 0) {
    return 0;
  } 
    return array.reduce((a,b) => (a+b))/array.length;
  
}