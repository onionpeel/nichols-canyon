// const objInput = ({name, age}) => {
//   console.log(name);
// };
//
// objInput({name: "me", age: 100});

// let x = 7;
// const sayNumber = () => {
//   console.log(x);
// };
// sayNumber();

const insideFun = () => {
  console.log('Im inside');
};

const outsideFun = ({insideFun}) => {
  insideFun();
};

outsideFun();
