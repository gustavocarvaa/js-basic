const { setTimeout } = require("timers");

var a = '';

function checaIdade(idade) {
  return new Promise((resolve, reject) => {
    if(idade < 18){
      setTimeout(() => reject("Menor que 18"), 2000)
    }else{
      setTimeout(() => resolve("Maior que 18"), 2000);
    }
  });
 }
 checaIdade(20)
  .then(function(response) {
  console.log(response);
  })
  .catch(function(error) {
  console.log(error);
  });
 