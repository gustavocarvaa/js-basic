"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var usuario = {
  nome: "Didi",
  idade: 23,
  endereco: {
    cidade: "Jeremoabo",
    esdado: "Bahia"
  }
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

var arr = [1, 2, 3, 4];
console.log(nome);
console.log(resto);
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c); //SPREAD

var arr1 = [1, 2, 3];
var arr2 = [2, 4, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);

var usuario2 = _objectSpread({}, usuario, {
  nome: 'gus'
});

console.log(usuario2);
var firstName = 'Efraim';
var funcao = 'Me amar';
var pessoa = {
  firstName: firstName,
  funcao: funcao,
  idade: 23
};
console.log(pessoa);
