// const arr = [1,2,3,4,5,5,5,5];
//
// const noDuplicate = array => {
//   const setArr = new Set(arr);
//   return Array.from(setArr);
// };
//
// console.log(noDuplicate(arr));

// const obj = {
//   value: 3,
//
//   display() {
//     console.log(this.value);
//   }
// };
//
// obj.display();

// let value = 0;

// const obj = {
//   value: 5,
//
//   display() {
//     this.value = 10;
//     console.log('display: ', this.value);
//
//     let innerDisplay = function(newValue) {
//       this.value = newValue;
//     };
//
//     innerDisplay(15);
//     console.log("new value: ", window.value);
//   }
// };
//
// obj.display();

// function display() {
//   const value = 7;
//
//   function inner() {
//     console.log(value);
//   };
//
//   return inner;
// };
//
// let newFunc = display();
// newFunc();

const obj = {
  value: 5,

  display() {
    this.value = 10;
    console.log('display: ', this.value);

    let innerDisplay = newValue => {
      this.value = newValue;
    };

    innerDisplay(15);
    console.log("new value: ", this.value);
  }
};

obj.display();
