function sorterino(a, b) {
    return (a > b) ? 1 : -1;
}

exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return array.sort(sorterino)[0];
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return array.sort(sorterino)[array.length - 1];
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    return array.reduce((a, b) => { return a + b } ) / array.length;
}
