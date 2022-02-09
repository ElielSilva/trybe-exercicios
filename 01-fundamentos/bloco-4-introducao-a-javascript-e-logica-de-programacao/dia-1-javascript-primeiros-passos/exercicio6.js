const peca = "Bispo";
const LowerResult = peca.toLowerCase();
if (LowerResult == "bispo")  {console.log('diagonal');}
else if (LowerResult == 'peão')  {console.log('uma casa diagonal frente');}
else if (LowerResult == "rainha") {console.log('infinito vertical, horizontal e diagonal');}
else if (LowerResult == "rei") {console.log('uma casa vertical, horizontal e diagonal');}
else if (LowerResult == "torre") {console.log('vertical e horizontal');}
else if (LowerResult == "cavalo") {console.log('em L');}
else {console.log('erro');}