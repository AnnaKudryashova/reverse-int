module.exports = function reverse (n) {
    const str = n.toString();
    const reversedStr = str.split('').reverse().join('');
    const result = parseInt(reversedStr, 10);
    return result;
}
