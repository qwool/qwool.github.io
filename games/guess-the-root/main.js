//The first season of the insanity SMP has ended quite abruptly, I will not be explaining why in this video it's a bit complicated.

const modal = document.getElementById("modal");
const modalClose = document.getElementsByClassName("close")[0];
const modalText = document.getElementById("modalText");
const inputField = document.getElementById("inputField");
var today = new Date()

function generateDaily() {
  var seed = today.getDate()*100 + today.getMonth()*10 + today.getFullYear()
  var todaysNumber = Math.sin(seed++) * 10000;
  todaysNumber = Math.floor( (todaysNumber - Math.floor(todaysNumber)) * 220 )
  console.log(
    "today is " + today.getDate() + "\/" + today.getMonth() + "\/" + today.getFullYear() +

    "\nand the seed is " + seed +
    "\nand the number is "+todaysNumber
  )
  randomNumber = todaysNumber
  document.getElementById("randomNumber").innerHTML = todaysNumber;

}
function generateRandom() {
  randomNumber = Math.floor(Math.random() * 220)
  document.getElementById("randomNumber").innerHTML = randomNumber;
}
window.addEventListener('load', function () {
  var mode = window.location.search.substring(6)
  console.log(mode)
  if (mode=="daily"){
    generateDaily()
    document.getElementById("dailySwitch").innerText="random"
    document.getElementById("dailySwitch").href="."
  }else{
    generateRandom()
    document.getElementById("dailySwitch").innerText="daily"
  }
  inputField.focus()
  
}, false);

function handleInput(inputField) {
  truncatedNumber = (Math.round(inputField.value ** 2 * 10000000) / 10000000)
  document.getElementById("answer").innerText = truncatedNumber;
  if (truncatedNumber == randomNumber) {
    openModal("you won!")
    generateRandom()
    
    // inputField.value = ""
  }
}
/* window.addEventListener('keypress', function(e) {
    inputField.value+=e.key;
}); */

function openModal(text) {
  modal.style.display = "flex";
  if (text == "openhelp") {
    modalText.innerHTML = document.getElementById("gameHelp").innerHTML;
  } else if (text == "opensettings") {
    modalText.innerHTML = document.getElementById("gameSettings").innerHTML;
  } else {
    modalText.innerHTML = text;
  }
}
modalClose.onclick = function () {
  modal.style.display = "none";
  modalText.innerHTML = "";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalText.innerHTML = "";
  }
}
