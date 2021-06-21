var forms = [
  "singleNumberForm",
  "simpleArrayForm",
  "arrayOfPairsForm",
  "matrixForm",
  "simpleStringForm",
  "characterMatrixForm",
  "unweightedTreeForm",
  "weightedTreeForm",
  "unweightedGraphForm",
  "weightedGraphForm",
];
var categories = ["number", "array", "string", "tree", "graph"];
function showForm() {
  var anchorlink = arguments[0];
  // console.log(anchorlink);
  var i;
  for (i = 0; i < forms.length; i++) {
    var element = document.getElementById(forms[i]);
    if (!element.classList.contains("d-none")) element.classList.add("d-none");
  }

  for (i = 0; i < categories.length; i++) {
    var element = document.getElementById(categories[i]);
    if (element.classList.contains("active"))
      element.classList.remove("active");
  }
  var element = document.getElementById(arguments[0]);
  element = anchorlink;
  var formId, categoryId, heading;
  if (element == "singleNumber") {
    formId = "singleNumberForm";
    categoryId = "number";
    heading = "Single Number";
  }
  if (element == "simpleArray") {
    formId = "simpleArrayForm";
    categoryId = "array";
    heading = "Simple Array";
  }
  if (element == "arrayOfPairs") {
    formId = "arrayOfPairsForm";
    categoryId = "array";
    heading = "Array of Pairs";
  }
  if (element == "matrix") {
    formId = "matrixForm";
    categoryId = "array";
    heading = "Matrix";
  }
  if (element == "simpleString") {
    formId = "simpleStringForm";
    categoryId = "string";
    heading = "Simple String";
  }
  if (element == "characterMatrix") {
    formId = "characterMatrixForm";
    categoryId = "string";
    heading = "Character Matrix";
  }
  if (element == "weightedTree") {
    formId = "weightedTreeForm";
    categoryId = "tree";
    heading = "Weighted Tree";
  }
  if (element == "unweightedTree") {
    formId = "unweightedTreeForm";
    categoryId = "tree";
    heading = "Unweighted Tree";
  }
  if (element == "weightedGraph") {
    formId = "weightedGraphForm";
    categoryId = "graph";
    heading = "Weighted Graph";
  }
  if (element == "unweightedGraph") {
    formId = "unweightedGraphForm";
    categoryId = "graph";
    heading = "Unweighted Graph";
  }
  document.getElementById("defineHead").innerHTML = "Random " + heading;
  document.getElementById(formId).classList.remove("d-none");
  document.getElementById(categoryId).classList.add("active");
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateInput() {
  document.getElementById("outputTextArea").value = "";
  var heading = document.getElementById("defineHead").innerHTML;

  if (heading == "Random Single Number") {
    var n_test_cases = document.getElementById("numberTestCases").value;
    var min_value = document.getElementById("numberMinValue").value;
    var max_value = document.getElementById("numberMaxValue").value;
    var n_test_cases_flag = document.getElementById(
      "numberTestCasesFlag"
    ).value;

    // var currentState = getTextAreaValue("outputTextArea");
    if (n_test_cases_flag == "1") {
      document.getElementById("outputTextArea").value += n_test_cases + "\n";
    }

    var it;
    for (it = 0; it < n_test_cases; it++) {
      document.getElementById("outputTextArea").value +=
        getRndInteger(Number(min_value), Number(max_value)) + "\n";
    }
    // console.log(min_value + " " + max_value);
    // console.log(max_value);
  } else if (heading == "Random Simple Array") {
    var tc = document.getElementById("simpleArrayNtc").value;
    var cur_size = document.getElementById("simpleArraySize").value;
    var min_val = document.getElementById("simpleArrayMinValue").value;
    var max_val = document.getElementById("simpleArrayMaxValue").value;
    var tcFlag = document.getElementById("simpleArrayNtcFlag").value;
    var nFlag = document.getElementById("simpleArrayNFlag").value;
    var dictinct_value = document.getElementById("simpleArrayDvFlag").value;

    console.log(tc, cur_size, min_val, max_val, tcFlag, nFlag, dictinct_value);
    // var currentState = getTextAreaValue("outputTextArea");
    if (tcFlag == "1") {
      document.getElementById("outputTextArea").value += tc + "\n";
    }

    var it, it2;
    for (it = 0; it < tc; it++) {
      if (nFlag == "1")
        document.getElementById("outputTextArea").value += cur_size + "\n";
      for (it2 = 0; it2 < cur_size; it2++) {
        document.getElementById("outputTextArea").value +=
          getRndInteger(Number(min_val), Number(max_val)) + " ";
      }
      document.getElementById("outputTextArea").value += "\n";
    }
  } else if (heading == "Random Simple String") {
    console.log("neera   j");
    var tc = document.getElementById("simpleStringNtc").value;
    var tcFlag = document.getElementById("simpleStringNtcFlag").value;
    var s_size = document.getElementById("simpleStringSize").value;
    var nflag = document.getElementById("simpleStringNFlag").value;
    var specific_char = document.getElementById(
      "simpleStringSpecificChar"
    ).value;

    var s_char;
    if(specific_char!="")
      s_char = specific_char.split(",");
    else s_char = [];
    // var distinct_cflag=document.getelementById("simpleStringDcharFlag").value;

    if (tcFlag == "1") {
      document.getElementById("outputTextArea").value += tc + "\n";
    }
    var it, it2;
    console.log(s_char);
    if (s_char.length) {
      var siz = s_char.length;
      console.log(siz);
      console.log(Math.random());
      for (it = 0; it < tc; it++) {
        if (nflag == "1")
          document.getElementById("outputTextArea").value += s_size + "\n";
        for (it2 = 0; it2 < s_size; it2++)
          document.getElementById("outputTextArea").value +=
            s_char[getRndInteger(Number(0), Number(1000000)) % siz];
        document.getElementById("outputTextArea").value += "\n";
      }
    } 
    else {
      for (it = 0; it < tc; it++) {
        if (nflag == "1")
          document.getElementById("outputTextArea").value += s_size + "\n";
        for (it2 = 0; it2 < s_size; it2++)
          document.getElementById("outputTextArea").value +=
            String.fromCharCode(97 + getRndInteger(Number(0), Number(25)));
        document.getElementById("outputTextArea").value += "\n";
      }
    }
  } else if (heading == "Random Matrix") {
    var tc = document.getElementById("matrixNtc").value;
    var Rows = document.getElementById("matrixRows").value;
    var Cols = document.getElementById("matrixCols").value;
    var min_val = document.getElementById("matrixMinValue").value;
    var max_val = document.getElementById("matrixMaxValue").value;
    var tcFlag = document.getElementById("matrixNtcFlag").value;
    var RCFlag = document.getElementById("matrixRCFlag").value;
    var dictinct_value = document.getElementById("simpleArrayDvFlag").value;

    // console.log(tc, cur_size, min_val, max_val, tcFlag, nFlag, dictinct_value);
    // var currentState = getTextAreaValue("outputTextArea");
    if (tcFlag == "1") {
      console.log("nero");
      document.getElementById("outputTextArea").value += tc + "\n";
    }

    var it, it2;
    for (it = 0; it < tc; it++) {
      if (RCFlag == "1")
        document.getElementById("outputTextArea").value +=
          Rows + " " + Cols + "\n";
      var i, j;
      for (i = 0; i < Rows; i++) {
        for (j = 0; j < Cols; j++)
          document.getElementById("outputTextArea").value +=
            getRndInteger(Number(min_val), Number(max_val)) + " ";
        document.getElementById("outputTextArea").value += "\n";
      }
    }
  } else if (heading == "Random Character Matrix") {
    var tc = document.getElementById("charMatrixNtc").value;
    var Rows = document.getElementById("charMatrixRows").value;
    var Cols = document.getElementById("charMatrixCols").value;
    var tcFlag = document.getElementById("charMatrixNtcFlag").value;
    var RCFlag = document.getElementById("charMatrixRClag").value;
    var specific_char = document.getElementById(
      "charMatrixSpecificChars"
    ).value;
    var s_char;
    if(specific_char!="")
      s_char = specific_char.split(",");
    else s_char = [];

    // console.log(tc, cur_size, min_val, max_val, tcFlag, nFlag, dictinct_value);
    // var currentState = getTextAreaValue("outputTextArea");
    if (tcFlag == "1") {
      console.log("nero");
      document.getElementById("outputTextArea").value += tc + "\n";
    }


    if (s_char.length) {
      var siz = s_char.length;

      var it, it2;
      for (it = 0; it < tc; it++) {
        if (RCFlag == "1")
          document.getElementById("outputTextArea").value +=
            Rows + " " + Cols + "\n";
        var i, j;
        for (i = 0; i < Rows; i++) {
          for (j = 0; j < Cols; j++)
            document.getElementById("outputTextArea").value +=
            s_char[getRndInteger(Number(0), Number(1000000)) % siz] +
              " ";
          document.getElementById("outputTextArea").value += "\n";
        }
        // document.getElementById("outputTextArea").value += '\n';
      }
    } 

    else {
      var it, it2;
      for (it = 0; it < tc; it++) {
        if (RCFlag == "1")
          document.getElementById("outputTextArea").value +=
            Rows + " " + Cols + "\n";
        var i, j;
        for (i = 0; i < Rows; i++) {
          for (j = 0; j < Cols; j++)
            document.getElementById("outputTextArea").value +=
              String.fromCharCode(97 + getRndInteger(Number(0), Number(25))) +
              " ";
          document.getElementById("outputTextArea").value += "\n";
        }
        // document.getElementById("outputTextArea").value += '\n';
      }
    }

  }
  else if(heading=="Random Weighted Graph")
  {
    var tc = document.getElementById("weightedgNtc").value;
    var tcflag = document.getElementById("weightedgNtcflag").value;
    var nodes = document.getElementById("weightedgNodes").value;
    var edges = document.getElementById("weightedgEdges").value;
    var NEFlag = document.getElementById("weightedgNEflag").value;
    var isdirectedflag=document.getElementById("weightedgDirectedflag").value;
    var initnode= document.getElementById("weightedgNodesStart").value;
  }
  else if(heading=="Random UnWeighted Graph")
  {
    var tc = document.getElementById("unweightedgNtc").value;
    var tcflag = document.getElementById("unweightedgNtcflag").value;
    var nodes = document.getElementById("unweightedgNodes").value;
    var edges = document.getElementById("unweightedgEdges").value;
    var NEFlag = document.getElementById("unweightedgNEflag").value;
    var isdirectedflag=document.getElementById("unweightedgDirected").value;
    var initnode= document.getElementById("unweightedgNodesStart").value;
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
