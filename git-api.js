var div = document.querySelector("#result");
var ipt = document.querySelector("#app input");
var btt = document.querySelector("#app button");

btt.onclick = buscar;

function buscar() {
  var user = ipt.value;

  load();

  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(function(response) {
      rederRepos(response.data);
    })
    .catch(function(error) {
      if (error.response.status === 404) {
        notFound();
      }
    });
}

function rederRepos(list) {
  div.innerHTML = "";

  var ul = document.createElement('ul');

  for (l of list) {
    var li = document.createElement("li");
    var repo = document.createTextNode(l.name);

    li.append(repo);
    ul.append(li);
  }

  div.append(ul);
}

function notFound() {
  div.innerHTML = '';

  var h2 = document.createElement('h2');
  var content = document.createTextNode("Não encontrado");

  h2.append(content);
  div.append(h2);
}

function load() {  
  var loading = document.createElement('li');
  var loadingContente = document.createTextNode('Carregando...');

  div.innerHTML = "";
  
  loading.append(loadingContente);
  div.append(loading);
}
