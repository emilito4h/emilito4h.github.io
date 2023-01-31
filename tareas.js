

function abrecierraBarra() {
 var x = document.getElementById("barranavegacion");
  if (x.className === "barrasup") {
   x.className += " responsiva";
  } 
  else {
    x.className = "barrasup";
  }
}

function abreForm() {
document.getElementById("formularioContacto").style.display = "block";
}

function cierraForm() {
  document.getElementById("formularioContacto").style.display = "none";
}

function abreGracias() {
  document.getElementById("Gracias").style.display = "block";
  document.getElementById("formularioContacto").style.display = "none";
}

function cierraGracias() {
  document.getElementById("Gracias").style.display = "none"
}



 