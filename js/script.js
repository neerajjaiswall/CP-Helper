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

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateInput() {
  var heading = document.getElementById("defineHead").innerHTML;
  
  if(heading == "Random Single Number") {
    var n_test_cases = document.getElementById("numberTestCases").value;
    var min_value = document.getElementById("numberMinValue").value;
    var max_value = document.getElementById("numberMaxValue").value;
    var n_test_cases_flag = document.getElementById("numberTestCasesFlag").value;
    
    // var currentState = getTextAreaValue("outputTextArea");
    if(n_test_cases_flag == "1") {
      document.getElementById("outputTextArea").value += n_test_cases + '\n';
    }

    var it;
    for(it = 0; it<n_test_cases; it++) {
      document.getElementById("outputTextArea").value += getRndInteger(Number(min_value), Number(max_value)) + '\n';
    }
    console.log(min_value);
    console.log(max_value);
    console.log(n_test_cases_flag);
    console.log(n_test_cases);
  }
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

