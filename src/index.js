module.exports = function multiply(first, second) {
    const multiplication = +first * +second;

    //first * second = in range MAX_SAFE_INTEGER (2 53), MIN_SAFE_INTEGER (-2 53)
    if (Number.isSafeInteger(multiplication)) return (multiplication).toString();

    const firstArr = first.split('').reverse();
    const secondArr = second.split('').reverse();
    let result = [];

    for (let i = 0; firstArr[i] >= 0; i++) {
        for (let j = 0; secondArr[j] >= 0; j++) {
            if (!result[i + j]) result[i + j] = 0;

            //put digit from first * digit from second result to arr
            result[i + j] += firstArr[i] * secondArr[j];
        }
    }

    for (let i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) result[i + 1] = 0;

            // take integer, leaving the remainder out, add it to the next mul value
            result[i + 1] += parseInt(result[i] / 10);
            // save remainder in the initial mul value's place
            result[i] %= 10;
        }
    }

    result.reverse();
    for (let i = 0; i < result.length; i++) {
        if (result[i] === 0) {
            result.splice(i--, 1);
        } else {
            i = result.length * 2;
        }
    }

    return result.join('');
};
