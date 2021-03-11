var forms = ["singleNumberForm", "simpleArrayForm", "arrayOfPairsForm", "matrixForm", "simpleStringForm", "characterMatrixForm", "unweightedTreeForm", "weightedTreeForm", "unweightedGraphForm", "weightedGraphForm"];
var categories = ["number", "array", "string", "tree", "graph"];
function showForm() {
  var anchorlink = arguments[0];
  // console.log(anchorlink);
  var i;
  for(i=0; i<forms.length; i++) {
    var element = document.getElementById(forms[i]);
    if(!element.classList.contains("d-none"))
      element.classList.add("d-none");
  }

  for(i=0; i<categories.length; i++) {
    var element = document.getElementById(categories[i]);
    if(element.classList.contains("active"))
      element.classList.remove("active");
  }
  var element = document.getElementById(arguments[0]);
  element = anchorlink;
  var formId, categoryId;
  if(element == "singleNumber") {
    formId = "singleNumberForm";
    categoryId = "number";
  }
  if(element == "simpleArray") {
    formId = "simpleArrayForm";
    categoryId = "array";
  }
  if(element == "arrayOfPairs") {
    formId = "arrayOfPairsForm";
    categoryId = "array";
  }
  if(element == "matrix") {
    formId = "matrixForm";
    categoryId = "array";
  }
  if(element == "simpleString") {
    formId = "simpleStringForm";
    categoryId = "string";
  }
  if(element == "characterMatrix") {
    formId = "characterMatrixForm";
    categoryId = "string";
  }
  if(element == "weightedTree") {
    formId = "weightedTreeForm";
    categoryId = "tree";
  }
  if(element == "unweightedTree") {
    formId = "unweightedTreeForm";
    categoryId = "tree";
  }
  if(element == "weightedGraph") {
    formId = "weightedGraphForm";
    categoryId = "graph";
  }
  if(element == "unweightedGraph") {
    formId = "unweightedGraphForm";
    categoryId = "graph";
  }

  document.getElementById(formId).classList.remove("d-none");
  document.getElementById(categoryId).classList.add("active");
}

// document.getElementById("number").onclick = function () {
//   var element = document.getElementById("number");
//   element.classList.add("active");
//   var element = document.getElementById("numberForm");
//   element.classList.remove("d-none");
// }

// document.getElementById("simpleArray").onclick = function () {
//   var element = document.getElementById("array");
//   element.classList.add("active");
//   var element = document.getElementById("simpleArrayForm");
//   element.classList.remove("d-none");
//   var element = document.getElementById("number");
//   element.classList.remove("active");
//   var element = document.getElementById("numberForm");
//   element.classList.add("d-none");
// }

