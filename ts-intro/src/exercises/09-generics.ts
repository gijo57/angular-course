const whatTypeAmI = <T>(argument: T) => {
  return argument;
};

let iAmString = whatTypeAmI('Hello World');
let iAmNumber = whatTypeAmI(100);
let iAmArray = whatTypeAmI([1, 2]);
let iAmExplicitType = whatTypeAmI<number>(57);
