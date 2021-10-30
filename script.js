search = document.getElementById("search");
engine = document.getElementById("engine");
enginesel = document.getElementById("enginesel");

  engine.value = localStorage.getItem("engine")
  enginesel.value = localStorage.getItem("enginesel")

search.onkeydown = function(e){
   if(e.keyCode == 13){
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
