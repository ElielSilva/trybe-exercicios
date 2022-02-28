var info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('bem vindo',info.personagem);
console.log('___________________________________');
//2

info.recorrente = 'sim';
console.log(info.recorrente);
console.log('___________________________________');
//3
const lista = Object.keys(info)
for (const key in lista) {
  console.log(lista[key]); 
}
console.log('___________________________________');
// 4

for (const key in info) {
  console.log(info[key]); 
}

// 5

var info2 = {
  personagem: 'Tio patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim',
};
for (const key in info) {
  console.log(info[key]+' e '+info2[key]);
}
console.log('___________________________________');
// 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log("O livro favorito de "+leitor.nome+leitor.sobrenome+" se chama "+leitor.livrosFavoritos[0].titulo);
console.log('___________________________________');
//7
leitor.livrosFavoritos[1] = [{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}]

console.log(leitor.nome+' tem '+leitor.livrosFavoritos.length+' livros favoritos');