function pow(base, exponent) {
  if (!Number.isInteger(base) || !Number.isInteger(exponent)) {
    throw new TypeError("Base and exponent values must be number values");
  }
  if (exponent < 0) {
    throw new RangeError("Exponent must be positive integer value");
  }
  return base ** exponent;
}

try {
  console.log("Pow(2, 3):", pow(-2, 4));
} catch (err) {
  if (err instanceof TypeError) {
    console.log("Input incorrect type");
  } else if (err instanceof RangeError) {
    console.log("Exponent value must be pisitive integer");
  } else {
    console.log("Something went wrong");
  }
}
