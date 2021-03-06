
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
    if (Array.isArray(array) && array.length > 0) {
        // if it is fine to use Math.max(...array) - it's a solution
        let maxNumber = array[0];

        array.forEach(number => {
            if (number > maxNumber) {
                maxNumber = number;
            }
        });

        return maxNumber;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array.reduce((a, b) => a + b) / array.length;
    }
    return 0;
}
