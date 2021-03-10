document.getElementById("numlink").onclick = function() {
  var element = document.getElementById("numlink");
  element.classList.add("active");
  document.getElementById("s_array").style.display = "none";
  document.getElementById("just_number").style.display  = "inline";
}

