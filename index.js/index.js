
/*POP-UP*/
const button = document.querySelector("button");
const modal = document.querySelector("dialog");
const buttonClose = document.getElementById("botao");

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}