const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

//testingScope(true);

//2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort();

//console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// parte 2
// 1 

const fatoriar = (num) => {
  let numero =1;
  for (let index = 1; index < num+1; index+=1) {
    numero = numero * index
    
  }
  return numero
}
//console.log(fatoriar(5));
//2
const string = 'Antônio foi no banheiro e não sabemos o que aconteceu';
let big = 'o';

// string.split(" ").forEach(word => {
//   if (word.trim().length > big.length) {
//     big = word.trim();
//   }
// });


string.split(" ").filter((word) => {if (word.length > big);big = word})
console.log(big);

//4
const change = () => {
  let texto = 'tribe x aqui' 
  let nome = 'eliel'
  return texto.replace('x', nome)
};

console.log(change());