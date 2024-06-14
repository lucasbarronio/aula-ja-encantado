const ipt = document.getElementById("campo");
const btn = document.getElementById("pesquisa");
const lst = document.getElementById("lista");

btn.addEventListener('click', function () {
  let item = document.createElement('LI');
  let texto = document.createTextNode(ipt.value);
  item.append(texto);
  lst.append(item);
  ipt.value = "";
})



