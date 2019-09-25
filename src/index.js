module.exports = function multiply(first, second) {
  const result = +first * +second;
  if (Number.isSafeInteger(result)) {
    return result.toString();
  } else {
    const bigger = first > second ? first : second;
    const smaller = first < second ? first : second;
    const multiplications = [];
    const biggerDigits = bigger.split('');
    const smallerDigits = smaller.split('');

    for(let i = 0; i < smallerDigits.length; i++) {
      let smallDigitMulRes = 0;
      biggerDigits.forEach(digit => {
        const res = smallDigitMulRes[i] * digit;
        smallDigitMulRes += res;
      });
      multiplications.push(smallDigitMulRes);
    }
  }
}
