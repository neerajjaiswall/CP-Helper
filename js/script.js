var forms = ["numberForm", "simpleArrayForm",  ]

document.getElementById("number").onclick = function() {
  var element = document.getElementById("number");
  element.classList.add("active");
  var element = document.getElementById("numberForm");
  element.classList.remove("d-none");
}

document.getElementById("simpleArray").onclick = function() {
  var element = document.getElementById("array");
  element.classList.add("active");
  var element = document.getElementById("simpleArrayForm");
  element.classList.remove("d-none");
  var element = document.getElementById("number");
  element.classList.remove("active");
  var element = document.getElementById("numberForm");
  element.classList.add("d-none");
}

