
exports.min = function min(array) {
    if (Array.isArray(array) && array.length > 0) {
        // if it is fine to use Math.min(...array) - it's a solution
        let minNumber = array[0];

        array.forEach(number => {
            if (number < minNumber) {
                minNumber = number;
            }
        });

        return minNumber;
    }
    return 0;
}

exports.max = function max(array) {
    // if it is fine to use Math.max(...array) - it's a solution
    return 0;
}

exports.avg = function avg(array) {
    return 0;
}
