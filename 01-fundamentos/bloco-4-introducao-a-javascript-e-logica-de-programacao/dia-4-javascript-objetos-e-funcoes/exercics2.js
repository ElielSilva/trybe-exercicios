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

function contar (array) {
  var resposta = "";
  let contador = 0;
  let y=0;
  for (let iterator of array) {
    
    for (let x of iterator) {
      y++
    }
    if (y >contador) {
      contador = y;
      resposta = iterator
      y=0
    } else {
      y= 0
    }
  }
  return console.log(resposta); 
}
contar(array4)

//5 
let array5 = [2, 3, 2, 5, 8, 2, 3];
function isReplace(params) {
  let numero;
  let retidor =0;
  let contador = 0;
  for (const iterator of params) {
    for (const x of params) {
      if (iterator == x) {
        contador ++
      }
    }
    if (contador>retidor) {
      retidor = contador
      numero = iterator
      contador=0
    }
  }
  return console.log(numero);
}isReplace(array5)


//6 
let valor = 5;
function sum(valor) {
  let resultado = 0;
  for (let index = 0; index <= valor; index++) {
    resultado = resultado+index
    
  }
  return console.log(resultado);
}
sum(valor)

// 7 