var vet = [];
let bus = Math.floor(Math.random() * 50 + 1);

for (let x = 1; x <= 50; x++) {
  vet.push(x);
}

function buscaLinear() {
  for (let x = 0; x < vet.length; x++) {
    if (bus == vet[x]) {
      x = vet.lenght;
      console.log(x);
    }
  }
}

buscaLinear();
