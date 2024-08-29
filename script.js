const character = `!`;
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}
//Change code to a different loop style
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}
// if(``){
//   console.log(`Condition is true`)
// }else if(5 > 10){
//   console.log(`5 is less than 10`);
// }else{
//   console.log(`This is the else block`);
// }

// let continueLoop = false
// let done = 0

// while(rows.length < count){
//   // done++;
//   rows.push(padRow(rows.length + 1, count))
//   // if(done === count){
//   //   continueLoop = false
//   // }
// }

// for (let i = count; i > 0 ;i --) {
//   rows.push(padRow(i, count))
// }

// const numbers = [1, 2, 3]
// const shifted = numbers.shift()
// console.log(shifted);
// const unshifted = numbers.unshift(5)
// console.log(unshifted);
// console.log(numbers);

let result = ``;

for (const row of rows) {
  result = result + `\n` + row;
}

console.log(result);
