// factorial-break.js
let valor = 20
let factorial = 1
let i = 0;
while (i <= 10) {
    if(i===0){
        i++;
        continue;}
  factorial = factorial * i
  i++
  if(i>10){
    break;
  }
  console.log(factorial)
}
