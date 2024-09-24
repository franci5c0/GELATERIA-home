
/*POP-UP*/
const button = document.querySelector("button");
const modal = document.querySelector("dialog");

button.onclick = function () {
    modal.showModal()
}


/*SLIDES CABEÇALHO*/
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage()
}, 2000)


function nextImage() {
 count++;
 if(count>9) {
    count = 1;
 }

 document.getElementById("radio"+count).checked = true
}