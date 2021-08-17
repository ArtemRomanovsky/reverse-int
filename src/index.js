module.exports = function reverse(n) {
    let stringN = n.toString();
    const arrayN = Array.from(stringN);
    const resultArray = [];
    let result = 0;
    for (let i = arrayN.length - 1; i >= 0; i--) {
      resultArray.push(arrayN[i]);
    }
    stringN = resultArray.join('');
    result = parseInt(stringN, 10);
    return result;
  }
