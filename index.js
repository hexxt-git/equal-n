/**
 * Function to check if the number `x` is equal to the number `n`.
 * Throws an error if `n` is not an integer.
 *
 * @param {number} x - The first number to compare
 * @param {number} n - The second number to compare
 * @returns {boolean} `true` if `x` is equal to `n`, otherwise `false`
 */
function isN(x, n) {
    // Check if `x` is an integer using a ternary operator
    const xIsInteger = Number.isInteger(x) ? true : false;
    if (!xIsInteger) {
        return false; // If `x` is not an integer, return `false`
    }

    // Check if `n` is an integer using a ternary operator
    const nIsInteger = Number.isInteger(n) ? true : false;
    if (!nIsInteger) {
        // Throw an exception if `n` is not an integer
        throw new Error(`Input n must strictly be an integer, got ${n} instead.`);
    }

    // Compare `x` and `n` for strict equality using a ternary operator
    const equality = x === n ? true : false;
    return equality;
}

module.exports = isN;
