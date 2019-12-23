/* //Rascunho

class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.username = "Gusinho";
  }

  showUser() {
    console.log(this.username);
  }
}

const MinhaLista = new TodoList();

//let, const, var;
//let e const block
//var global

const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map((item, index, outra) => outra);

const sum =  arr.reduce((total, next) => total + next);

const filter = arr.filter(item => item  % 2 === 0);

const find = arr.find(item => item === 4);

//Desestruturação

const usuario = {
  nome: 'Didi',
  idade: 23,
  endereco : {
    cidade: 'Jeremoabo',
    esdado: 'Bahia'
  }
}

const {nome, idade, endereco: {cidade}} = usuario;

function mostraItem({nome, idade}) {
  console.log(nome, idade);
}
mostraItem(usuario);
 */

//REST

const usuario = {
  nome: "Didi",
  idade: 23,
  endereco: {
    cidade: "Jeremoabo",
    esdado: "Bahia"
  }
};

const { nome, ...resto } = usuario;

const arr = [1, 2, 3, 4];

console.log(nome);
console.log(resto);

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [2, 4, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario2 = {...usuario, nome: 'gus'};

console.log(usuario2);

const firstName = 'Efraim';
const funcao = 'Me amar';

const pessoa = {
  firstName,
  funcao,
  idade: 23
};

console.log(pessoa);