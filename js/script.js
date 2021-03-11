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
  var formId, categoryId, heading;
  if(element == "singleNumber") {
    formId = "singleNumberForm";
    categoryId = "number";
    heading = "Single Number";
  }
  if(element == "simpleArray") {
    formId = "simpleArrayForm";
    categoryId = "array";
    heading = "Simple Array";
  }
  if(element == "arrayOfPairs") {
    formId = "arrayOfPairsForm";
    categoryId = "array";
    heading = "Array of Pairs";
  }
  if(element == "matrix") {
    formId = "matrixForm";
    categoryId = "array";
    heading = "Matrix";
  }
  if(element == "simpleString") {
    formId = "simpleStringForm";
    categoryId = "string";
    heading = "Simple String";
  }
  if(element == "characterMatrix") {
    formId = "characterMatrixForm";
    categoryId = "string";
    heading = "Character Matrix";
  }
  if(element == "weightedTree") {
    formId = "weightedTreeForm";
    categoryId = "tree";
    heading = "Weighted Tree";
  }
  if(element == "unweightedTree") {
    formId = "unweightedTreeForm";
    categoryId = "tree";
    heading = "Unweighted Tree";
  }
  if(element == "weightedGraph") {
    formId = "weightedGraphForm";
    categoryId = "graph";
    heading = "Weighted Graph";
  }
  if(element == "unweightedGraph") {
    formId = "unweightedGraphForm";
    categoryId = "graph";
    heading = "Unweighted Graph";
  }
  document.getElementById("defineHead").innerHTML = "Random " + heading;
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

