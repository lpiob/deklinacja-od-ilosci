function deklinujOdIlosci(x, a, b, c) {
  x = Math.abs(x);
  if (x === 1) {
    return a;
  }
  if ((x % 10 > 1) && (x % 10 < 5) && !((x % 100 >= 10) && (x % 100 <= 21))) {
    return b;
  }
  return c || b;
}

module.exports = deklinujOdIlosci;
