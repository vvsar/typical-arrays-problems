
exports.min = function min (array) {
    if (!Array.isArray(array) || array.length == 0) {
        let minValue = 0;
        return minValue;
    }
    let minValue = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] >= minValue) {
            continue;
        }
        minValue = array[i];
    }
  return minValue;
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length == 0) {
        let maxValue = 0;
        return maxValue;
    }
    let maxValue = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] <= maxValue) {
            continue;
        }
        maxValue = array[i];
    }
  return maxValue;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length == 0) {
        let avgValue = 0;
        return avgValue;
    }
    let s = array.reduce((sum, current) => sum + current, 0);
    avgValue = s / array.length;
  return avgValue;
}
