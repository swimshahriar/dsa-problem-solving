function _add(a, b, c) {
  return a + b + c;
}

function defaultArguments(fn, defaultArgs) {
  return function (...params) {
    return fn(...params, ...Object.values(defaultArgs));
  };
}

let add_ = defaultArguments(_add, { b: 9, e: 11, f: 12 });
console.log(add_(10)); // 30
console.log(add_(10, 7)); // 26
console.log(add_()); // 32

add_ = defaultArguments(add_, { b: 3, a: 2 });
console.log(add_(10)); // 15
console.log(add_()); // 14
