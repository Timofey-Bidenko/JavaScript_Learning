"use strict";

// function foo1() {
//   console.log("foo1");
// }
// function foo2() {
//   console.log("foo2");
// }
// function foo3() {
//   console.log("foo3");
// }

// foo1();
// foo2();
// foo3();

// function foo1() {
//   console.log("foo1 start");
//   foo2();
//   console.log("foo1 end");
// }
// function foo2() {
//   console.log("foo2 start");
//   foo3();
//   console.log("foo2 end");
// }
// function foo3() {
//   console.log("foo3 start");
//   console.log("foo3 end");
// }

// foo1();

// 1 - Global Execution Context
// 2 - Functional Execution Context

/* 

Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      type: Global,
      a: 3
      b: 2
      sum: <link>
    }
    outerLink: <link>,
    this: 
  }
  VariavleEnvironment {},
}
Environment {
  змінні
  посилання на звнішне оточення
  значення this
}
LexicalEnvirinment {
  EnvironmentRecord {
    type: Global,
    a: 3
    b: 2
    sum: <link>
  }
  outerLink: <link>,
  this: 
}
*/

// let a = 10;
// var b = 5;

// function foo() {
//   console.log(a);
// }

// foo();

/* 
Global Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      a: 10,
    }
    outerLink: null,
    this: window
  }
  VariavleEnvironment {
    EnvironmentRecord {
      b: 5,
    }
    outerLink: null,
    this: window
  },
}

Functional Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
    }
    outerLink: <Global Execution Context>,
    this: undefined
  }
  VariavleEnvironment {},
}
*/

// let a = 2;
// const b = 3;
// var c = 5;

// function calc(num1, num2) {
//   var d = 2;

//   return (num1 + num2) * (c + d);
// }

// let result = calc(a, b);
// console.log("result:", result);

// 1 - creaction phase
// 2 - execution phase

/* 
// 1 Creation phase

Global Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      type: Global
      a: <unknown>,
      b: <unknown>,
      result: <unknown>,
      calc: <link>
    }
    outerLink:null,
    this: window
  }
  VariavleEnvironment {
    EnvironmentRecord {
      type: Global
      c: undefined,
    }
    outerLink:null,
    this: window
  },
}

Function Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      type: Function,
      num1: <unknown>
      num2: <unknown>
    }
    outerLink: <Global Execution Context>,
    this: undefuned,
  }
  VariavleEnvironment {
    EnvironmentRecord {
      d: undefined,
    }
    outerLink: <Global Execution Context>,
    this: undefuned,
  },
}
*/

/*
// 2 Execution phase
Global Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      type: Global
      a: 2,
      b: 3,
      result: 35,
      calc: <link>
    }
    outerLink:null,
    this: window
  }
  VariavleEnvironment {
    EnvironmentRecord {
      type: Global
      c: 5,
    }
    outerLink:null,
    this: window
  },
}

Function Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      type: Function,
      num1: a
      num2: b
    }
    outerLink: <Global Execution Context>,
    this: undefuned,
  }
  VariavleEnvironment {
    EnvironmentRecord {
      d: 2,
    }
    outerLink: <Global Execution Context>,
    this: undefuned,
  },
}
*/

// let count = 0;

// function raiseCount() {
//   console.log(++count);
// }

// function raiseCount2() {
//   console.log(++count);
// }

// raiseCount();
// raiseCount();
// raiseCount();

// raiseCount2();
// raiseCount2();
// raiseCount2();

// function createCounter() {
//   let count = 0;

//   return function () {
//     console.log(++count);
//   };
// }

// let count1 = createCounter();

// count1();
// count1();
// count1();

// let count2 = createCounter();

// count2();
// count2();
// count2();

/*
Global Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      type: Global
      createCounter: <link>
    }
    outerLink:null,
    this: window
  }
}

createCounter Function Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      type: Function,
      count: 3
      anonimusFunc: <link>
    }
    outerLink: <Global Execution Context>,
    this: undefuned,
  }
}

count1 Function Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      type: Function,
    }
    outerLink: <createCounter Function Execution Context>,
    this: undefuned,
  }
}

createCounter (II) Function Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      type: Function,
      count: 3
      anonimusFunc: <link>
    }
    outerLink: <Global Execution Context>,
    this: undefuned,
  }
}

count2 Function Execution Context {
  LexicalEnvirinment {
    EnvironmentRecord {
      type: Function,
    }
    outerLink: <createCounter (II) Function Execution Context>,
    this: undefuned,
  }
}
*/

// function multBy(a) {
//   return function (num) {
//     console.log(a + num);
//   };
// }

// let multBy2 = multBy(2);
// let multBy3 = multBy(3);

// multBy2(1);
// multBy2(2);
// multBy2(3);

// multBy3(1);
// multBy3(2);
// multBy3(3);

// function createMessage(message) {
//   return function (num1) {
//     return function (num2) {
//       console.log(`${message}: ${num1 * num2}`);
//     };
//   };
// }

// let getHelloNum1 = createMessage("Hello");
// let getfirstNum2 = getHelloNum1(10);
// let getsecondNum2 = getHelloNum1(5);

// getfirstNum2(1);
// getfirstNum2(2);
// getfirstNum2(3);

// getsecondNum2(1);
// getsecondNum2(2);
// getsecondNum2(3);

// function createLimitedFunction(fn, limit) {
//   let count = 1;

//   return function (...args) {
//     // [1, 2]
//     if (count <= limit) {
//       count++;
//       fn(...args); // [1, 2] =>  fn(1, 2)
//     } else {
//       console.log("Limet has been riched");
//     }
//   };
// }

// function sum(a, b) {
//   console.log(a + b);
// }
// function pow2(a) {
//   console.log(a ** 2);
// }

// let limitedSum = createLimitedFunction(sum, 3);
// let limitedPow2 = createLimitedFunction(pow2, 3);

// limitedSum(1, 2);
// limitedSum(2, 2);
// limitedSum(3, 2);
// limitedSum(4, 2);

// limitedPow2(2);
// limitedPow2(3);
// limitedPow2(4);
// limitedPow2(5);

// function summarize(a) {
//   return function (num) {};
// }

// let sum5 = summarize(5);
// sum5(3); // 8
// sum5(); // 6

// function counter() {
//   count = 0;
//   return function () {
//     return {
//       increment() {},
//     };
//   };
// }

// let counter1 = counter();

// // let count  = counter1;
// // count.increment()

function sequence(...rest) {
  result;

  return function () {
    rest.forEach((fn) => {
      fn();
    });
  };
}

let sequenceFunc1 = sequence(sum, pow, increment);
let sequenceFunc2 = sequence(mul, dec, sqrt);

let result1 = sequenceFunc1(2);
let result2 = sequenceFunc2(2);

console.log(result);