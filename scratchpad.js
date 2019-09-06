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

// const obj = {
//   value: 5,
//
//   display() {
//     this.value = 10;
//     console.log('display: ', this.value);
//
//     let innerDisplay = newValue => {
//       this.value = newValue;
//     };
//
//     innerDisplay(15);
//     console.log("new value: ", this.value);
//   }
// };
//
// obj.display();

// const promise = async () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("success!");
//     }, 1000);
//   });
// };
//
// try{
//   const result = await promise();
//   console.log(result);
// } catch(err) {
//   console.log(err);
// }

// const arr1 = [1,2,3];
// const arr2 = arr1.map(x => x + 1);
// console.log(arr2)

// const newArr = arr.map(person => {
//   let newPerson = Object.create(person);
//   newPerson.attendsSchool = true;
//   return newPerson;
// });
//

// const arr = [{name: 'joe', age: 5}, {name: 'miki', age: 10}, {name: 'pedro', age: 12}];
//
// const newArr = arr.map(person => {
//   const newPerson = {...person, attendsSchool: true};
//   return newPerson;
// });
// console.log(newArr);

// const obj = {
//   value: 1,
//   quantity: 5
// };

// const codeburst = 'CODEBURST';
// const characters = [...codeburst];
// console.log(characters);
// const newburst = characters.join('');
// console.log(newburst);

// const numbers = [1,2,3,4,5,6];
// const largest = Math.max(...numbers);
// console.log(largest);

// const arr = [1,2,3,4];
// arr.push(5,6,7);
// console.log(arr);

// const arr = [1,2,3];
// const arrCopy = [...arr];
// arrCopy.reverse();
// console.log('arr: ', arr);
// console.log('arrCopy: ', arrCopy);

// const arr = [1,2,3,4,5];
//
// const reverseArray = array => {
//   const copy = [...array];
//   return copy.reverse();
// };
//
// console.log(reverseArray(arr));

// const str = 'abcdecba';
//
// const isPalindrome = string => {
//   const array = [...string];
//   let palindrome = true;
//   for (let i = 0; i < array.length; i++) {
//     if(array[i] !== array[array.length - 1 - i]){
//       palindrome = false;
//       break
//     };
//   };
//
//   return palindrome ? 'it is a palindrome' : 'not a palindrome';
//
// };
//
// isPalindrome(str);

// const yum = ['the', 'big', 'apple'];
// yum.splice(2, 0, 'red');
// console.log(yum);

// const num = [1,2,3,4,5];
// num.splice(2, 1, 7);
// console.log(num);

// const num = [1,2,3,4,5,6,7,8];
// num.splice(-3, 1);
// console.log(num);

// const num = [1,2,3,4,5];
//
// const segment = num.slice(1, -2);
// console.log(segment);
