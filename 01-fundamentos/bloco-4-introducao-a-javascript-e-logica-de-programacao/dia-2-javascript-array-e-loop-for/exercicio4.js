let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for(let x of numbers) {
  result += x;
}
if (result/numbers.length < 20 ){console.log('valor menor que 20');}
else  {console.log('valor maior ou igual a 20');}
