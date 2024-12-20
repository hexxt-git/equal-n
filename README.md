# equalN

**A robust utility function for validating if two numbers are strictly equal, with robust error handling for non-integer inputs.**

---

## Installation

Install the package via npm or yarn:

```bash
npm install equal-n
```

or

```bash
yarn add equal-n
```

---

## Usage

The `equalN` function checks if a number `x` is strictly equal to another number `n`. It ensures that both `x` and `n` are integers and throws an error if `n` is not an integer.

### Example:

```ts
import equalN from 'equal-n';

// Valid comparison
console.log(equalN(5, 5)); // true
console.log(equalN(5, 6)); // false

// Invalid `x`
console.log(equalN(5.5, 5)); // false

// Invalid `n` (throws an error)
try {
    console.log(equalN(5, 5.5));
} catch (error) {
    console.error(error.message);
    // Output: Input n must strictly be an integer, got 5.5 instead.
}
```

---

## API

### `equalN(x: number, n: number): boolean`

#### Parameters:
- **`x`**: The first number to compare.  
- **`n`**: The second number to compare (must be an integer).

#### Returns:
- **`boolean`**: Returns `true` if `x` is equal to `n`, otherwise `false`.

#### Errors:
- Throws an `Error` if `n` is not an integer.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [repository on GitHub](https://github.com/hexxt-git/equal-n).