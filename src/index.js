exports.min = function min(arr) {
    if ((arr == null)
        || (arr.length < 1)
        || isNaN(arr.reduce((a, b) => a + b)))
        return 0;
    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        minValue = arr[i] < minValue ? arr[i] : minValue;
    }
    return minValue;
}

exports.max = function max(arr) {
    if ((arr == null)
        || (arr.length < 1)
        || isNaN(arr.reduce((a, b) => a + b)))
        return 0;
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxValue = arr[i] > maxValue ? arr[i] : maxValue;
    }
    return maxValue;
}

exports.avg = function avg(arr) {
    if ((arr == null)
        || (arr.length < 1)
        || isNaN(arr.reduce((a, b) => a + b)))
        return 0;
    let avgValue = (arr.reduce((a, b) => a + b)) / arr.length;
    return avgValue;
}	
