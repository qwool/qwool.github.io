search = document.getElementById("search");
engine = document.getElementById("engine");
enginesel = document.getElementById("enginesel");
engine.value = localStorage.getItem("engine")
enginesel.value = localStorage.getItem("enginesel")

if (engine.value==""){
  enginesel.value="https://google.com/search?q="
  engine.value="https://google.com/search?q="
  save();
}


search.onkeydown = function(e){
   if(e.keyCode == 13){
    if (engine.value==""){
      enginesel.value="https://google.com/search?q="
      engine.value="https://google.com/search?q="
      save();
    }
     window.location.href=engine.value+search.value;
   }
};

enginesel.onchange = function(){
  engine.value=enginesel.value
  localStorage.setItem("enginesel", enginesel.value);

  save()
}
engine.onchange = function(){
  localStorage.setItem("engine", engine.value);
  save()
  if (enginesel.value!=engine.value){
    enginesel.value=""
  }
}
function save() {
  localStorage.setItem("enginesel", enginesel.value);
  localStorage.setItem("engine", engine.value);
  console.log("field: "+localStorage.getItem("engine"))
  console.log("select:"+localStorage.getItem("enginesel"))
}

// Get the modal
var modal = document.getElementById("settings");

// Get the button that opens the modal
var btn = document.getElementById("settingsBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
