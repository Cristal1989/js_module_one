const arrs = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
let midNumber = arrs.length / 2;
let mid = [midNumber];
let hight = [];
let less = [];

for (i = 0; i < arrs.length; i += 1) {
  if (i < mid - 1) {
    less.push(arrs[i]);
  } else if (i > mid - 1) {
    hight.push(arrs[i]);
  }
}

console.log(`Bigger - ${mid} : ${hight}`);
console.log(`Less - ${mid} : ${less}`);

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
let midArr = [15];
let lessArr = [];
let bigArr = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > midArr[0]) {
    bigArr.push(array[i]);
  } else if (array[i] < midArr[0]) {
    lessArr.push(array[i]);
  }
}

console.log(`Bigger - ${midArr} : ${bigArr}`);
console.log(`Less - ${midArr} : ${lessArr}`);

let a = 1;
let a = 2;
console.log(a);



