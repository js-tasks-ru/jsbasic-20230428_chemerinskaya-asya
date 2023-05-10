function factorial(n) {
  let numberResult = 1;
  if (n == 0 || n == 1) {
      numberResult = 1
  } else {
      for (let i = 0; i < n; i++) {
          numberResult *= (n - i)
      }
  }
  return numberResult
}
