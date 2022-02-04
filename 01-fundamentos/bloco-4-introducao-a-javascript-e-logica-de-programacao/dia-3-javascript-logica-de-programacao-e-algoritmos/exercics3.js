let array = ['java', 'javascript', 'python', 'html', 'css'];

const item1 = array[0].length;
const item2 = array[1].length;
const item3 = array[2].length;
const item4 = array[3].length;
const item5 = array[4].length;
const maior = Math.max(item1,item2,item3,item4,item5);
const menor = Math.min(item1,item2,item3,item4,item5);
for (let x = 0; x < array.length; x++) {
  let index = array[x]
  if (index.length == maior) {
    console.log(index);
  }
}
for (let x = 0; x < array.length; x++) {
  let index = array[x]
  if (index.length == menor) {
    console.log(index);
  }
}

