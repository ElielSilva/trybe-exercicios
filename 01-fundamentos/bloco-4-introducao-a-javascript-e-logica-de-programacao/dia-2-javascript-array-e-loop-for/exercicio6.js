let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let num of numbers) {
  if (num % 2 != 0 ) {
    result ++;
  }
}
if (result > 0) {console.log(result);}
else {console.log('nenhum valor');}