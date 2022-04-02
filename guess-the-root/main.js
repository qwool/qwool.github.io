//The first season of the insanity SMP has ended quite abruptly, I will not be explaining why in this video it's a bit complicated.

const modal = document.getElementById("modal");
const modalClose = document.getElementsByClassName("close")[0];
const modalText = document.getElementById("modalText");
const inputField = document.getElementById("inputField");

function generate() {
    randomNumber = Math.floor(Math.random(1, 500) * 220)
    document.getElementById("randomNumber").innerHTML = randomNumber;
}
window.addEventListener('load', function () {
    generate()
    inputField.focus()
}, false);

function handleInput(inputField) {
    truncatedNumber = (Math.round(inputField.value ** 2 * 10000000) / 10000000)
    document.getElementById("answer").innerText = truncatedNumber;
    if (truncatedNumber == randomNumber) {
        openModal("you won!")
        generate()
        inputField.value = ""
    }
}
/* window.addEventListener('keypress', function(e) {
    inputField.value+=e.key;
}); */

function openModal(text) {
  modal.style.display = "block";
  if (text=="openhelp"){
    modalText.innerHTML=document.getElementById("gameHelp").innerHTML;
  }else if (text=="opensettings"){
    modalText.innerHTML=document.getElementById("gameSettings").innerHTML;
  }else{
    modalText.innerHTML = text;
  }
}
modalClose.onclick = function() {
  modal.style.display = "none";
  modalText.innerHTML = "";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalText.innerHTML = "";
  }
}
