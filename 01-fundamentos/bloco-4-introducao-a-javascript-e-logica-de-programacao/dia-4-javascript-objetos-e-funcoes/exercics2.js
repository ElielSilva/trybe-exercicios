function isPalindromo(text) {
  let nome = "";
  for (const iterator of text) {
    nome = iterator+nome
  }
  if (nome === text) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
let n = 'arara';
isPalindromo(n);
//2
let array =[2, 3, 6, 7, 10, 1]
function isMax (lista) {
  let contador = 0;
  for (const iterator of lista) {
    if (iterator > contador) {
      contador = iterator;
    }
  }
  console.log(lista.indexOf(contador));
}
isMax(array)

//3

let array3 = [2, 4, 6, 7, 10, 0, -3];
function isMin (lista) {
  let contador = 0;
  for (const iterator of lista) {
    if (iterator < contador) {
      contador = iterator;
    }
  }
  console.log(lista.indexOf(contador));
}
isMin(array3)

//4

const array4 =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
contado 
for (const iterator of object) {
  for (const x of object) {
    
  }
}