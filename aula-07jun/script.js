const ipt = document.getElementById("input");
const add = document.getElementById("add-btn");
const lst = document.getElementById("lista");
const rmv = document.getElementById("rmv-btn");

function addItem() {
  let item = document.createElement('li');
  item.append(ipt.value);
  item.setAttribute('id', ipt.value);
  lst.appendChild(item);
  ipt.value = "";
  ipt.focus();
}

function removeItem() {
  let texto = ipt.value;
  document.querySelector('#' + texto).remove();
  ipt.value = '';
  ipt.focus();
}

add.addEventListener('click', function () {
  if (ipt.value != '') {
    addItem();
  }
})

ipt.addEventListener('keydown', function (event) {
  if (event.key === "Enter" && ipt.value != '') {
    addItem();
  }
})

rmv.addEventListener('click', removeItem)

