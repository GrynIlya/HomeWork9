function fibonacci(ind) {
let ArrayFibonacci = [1,1];
  for (var i = 2; i < 50; i++) {
    ArrayFibonacci[i] = ArrayFibonacci[i-1] + ArrayFibonacci[i-2];
  }
  console.log(ArrayFibonacci[ind]);
  return ArrayFibonacci[ind];
}
console.log(fibonacci(12));