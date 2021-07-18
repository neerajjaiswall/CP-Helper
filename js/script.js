var forms = [
  "singleNumberForm",
  "simpleArrayForm",
  "arrayOfPairsForm",
  "matrixForm",
  "simpleStringForm",
  "characterMatrixForm",
  // "unweightedTreeForm",
  // "weightedTreeForm",
  "undirectedwGraphForm",
  "directedwGraphForm",
  "directedunwGraphForm",
  "undirectedunwGraphForm",
];
// var categories = ["number", "array", "string", "tree", "graph"];
var categories = ["number", "array", "string","graph"];

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
  // if (element == "weightedTree") {
  //   formId = "weightedTreeForm";
  //   categoryId = "tree";
  //   heading = "Weighted Tree";
  // }
  // if (element == "unweightedTree") {
  //   formId = "unweightedTreeForm";
  //   categoryId = "tree";
  //   heading = "Unweighted Tree";
  // }
  if (element == "directedweightedGraph") {
    formId = "directedwGraphForm";
    categoryId = "graph";
    heading = "Directed Weighted Graph";
  }
  if (element == "udwGraph") {
    formId = "undirectedwGraphForm";
    categoryId = "graph";
    heading = "Undirected Weighted Graph";
  }
  if (element == "duwGraph") {
    formId = "directedunwGraphForm";
    categoryId = "graph";
    heading = "Directed Unweighted Graph";
  }
  if (element == "uduwGraph") {
    formId = "undirectedunwGraphForm";
    categoryId = "graph";
    heading = "Undirected Unweighted Graph";
  }
 
  document.getElementById("defineHead").innerHTML = "Random " + heading;
  document.getElementById(formId).classList.remove("d-none");
  document.getElementById(categoryId).classList.add("active");
}
 
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
function generateInput() {

try {
  var alertElement = document.getElementById("invalidAlert");
  if (!alertElement.classList.contains("d-none")) alertElement.classList.add("d-none");
 
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
  } 
  
  
  
  else if (heading == "Random Simple Array") {
    var tc = document.getElementById("simpleArrayNtc").value;
    var cur_size = document.getElementById("simpleArraySize").value;
    var min_val = document.getElementById("simpleArrayMinValue").value;
    var max_val = document.getElementById("simpleArrayMaxValue").value;
    var tcFlag = document.getElementById("simpleArrayNtcFlag").value;
    var nFlag = document.getElementById("simpleArrayNFlag").value;
    var dictinct_value = document.getElementById("simpleArrayDvFlag").value;
 
    // console.log(tc, cur_size, min_val, max_val, tcFlag, nFlag, dictinct_value);
    // var currentState = getTextAreaValue("outputTextArea");
    if((dictinct_value == "1") && (max_val-min_val+1 < cur_size)) {
      console.log("Invalid Range !");
      var usethis = document.getElementById("invalidAlert");
      if(usethis.classList.contains("d-none"))
        usethis.classList.remove("d-none");
      return;
    }
    if (tcFlag == "1") {
      document.getElementById("outputTextArea").value += tc + "\n";
    }
 
 
    var it, it2;
 
 
    if(dictinct_value == "1") {
      console.log("check0");
      if(max_val-min_val+1 < cur_size) {console.log("Invalid range"); return;}
 
      console.log("check");
 
      let s = new Set();
      for (it = 0; it < tc; it++) {
        if (nFlag == "1")
          document.getElementById("outputTextArea").value += cur_size + "\n";
 
        for (it2 = 0; it2 < cur_size; it2++) {
 
          var num = getRndInteger(Number(min_val), Number(max_val));
          console.log(num);
          // while(s.has(num)==0) num = getRndInteger(Number(min_val), Number(max_val));
          while(1) {
            if(s.has(num))
              num = getRndInteger(Number(min_val), Number(max_val));
            else break;
          }
 
          document.getElementById("outputTextArea").value +=
            num + " ";
            s.add(num);
        }
        s.clear();
        document.getElementById("outputTextArea").value += "\n";
      }
    }
 
    else {
      for (it = 0; it < tc; it++) {
        if (nFlag == "1")
          document.getElementById("outputTextArea").value += cur_size + "\n";
        for (it2 = 0; it2 < cur_size; it2++) {
          document.getElementById("outputTextArea").value +=
            getRndInteger(Number(min_val), Number(max_val)) + " ";
        }
        document.getElementById("outputTextArea").value += "\n";
      }
    }
 
  } 
 
 
 
  else if (heading == "Random Array of Pairs") {
    var tc = document.getElementById("arrayOfPairsNtc").value;
    var cur_size = document.getElementById("arrayOfPairsSize").value;
    var min_val1 = document.getElementById("arrayOfPairsMinFv").value;
    var max_val1 = document.getElementById("arrayOfPairsMaxFv").value;
    var min_val2 = document.getElementById("arrayOfPairsMinSv").value;
    var max_val2 = document.getElementById("arrayOfPairsMaxSv").value;
    var tcFlag = document.getElementById("arrayOfPairsNtcFlag").value;
    var nFlag = document.getElementById("arrayOfPairsNFlag").value;
 
    console.log(cur_size);
    // var dictinct_value = document.getElementById("simpleArrayDvFlag").value;
 
    // console.log(tc, cur_size, min_val, max_val, tcFlag, nFlag, dictinct_value);
    // var currentState = getTextAreaValue("outputTextArea");
    if((max_val1-min_val1+1 < cur_size) || (max_val2-min_val2+1 < cur_size)) {
      console.log("Invalid Range !");
      var usethis = document.getElementById("invalidAlert");
      if(usethis.classList.contains("d-none"))
        usethis.classList.remove("d-none");
      return;
    }
 
 
    if (tcFlag == "1") {
      document.getElementById("outputTextArea").value += tc + "\n";
    }
 
 
    var it, it2;
 
      let s = new Set();
      for (it = 0; it < tc; it++) {
        if (nFlag == "1")
          document.getElementById("outputTextArea").value += cur_size + "\n";
 
        for (it2 = 0; it2 < cur_size; it2++) {
 
          var num = new Array(2);
          
          num[0] = getRndInteger(Number(min_val1), Number(max_val1));
          num[1] = getRndInteger(Number(min_val2), Number(max_val2));

          while(1) {
            var flag = true;
            for (item of s.values()) {
              if(item[0] == num[0] && item[1]==num[1]) {
                flag = false;
                break;
              }
            }
              if(flag) {
                break;
              }
              else {
                num[0] = getRndInteger(Number(min_val1), Number(max_val1));
                num[1] = getRndInteger(Number(min_val2), Number(max_val2));
              }

          }

          document.getElementById("outputTextArea").value +=
            num[0] + " " + num[1] + "\n";
            s.add(num);
        }
        s.clear();
 
        // document.getElementById("outputTextArea").value += "\n";
      }
 
  } 
  
  
  else if (heading == "Random Simple String") {
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


  else if(heading=="Random Directed Unweighted Graph") {   
    var tc = document.getElementById("dunweightedgNtc").value;
    var tcFlag = document.getElementById("dunweightedgNtcflag").value;
    var nodes = document.getElementById("dunweightedgNodes").value;
    var edges = document.getElementById("dunweightedgEdges").value;
    var NEFlag = document.getElementById("dunweightedgNEflag").value;
    //var isdirectedflag=document.getElementById("weightedgDirectedflag").value;
    var initnode= document.getElementById("dunweightedgNodesStart").value;
 
    if((edges > (nodes*(nodes-1)))) {
      console.log("These number of edges is not possible with given number of nodes, Try  again!");
      var usethis = document.getElementById("invalidAlert");
      if(usethis.classList.contains("d-none"))
        usethis.classList.remove("d-none");
      return;
    }


    if (tcFlag == "1") {
      document.getElementById("outputTextArea").value += tc + "\n";
      console.log("xyz");
    }
 var it, it2;
 
      let s = new Set();
      for (it = 0; it < tc; it++) {
        if (NEFlag == "1")
        {
          document.getElementById("outputTextArea").value += nodes + " " + edges + "\n";
         }

        for (it2 = 0; it2 < edges; it2++) {
              
          var num = new Array(2);
          
          if(initnode == "0") {
            num[0] = getRndInteger(Number(0), Number(nodes-1));
            num[1] = getRndInteger(Number(0), Number(nodes-1));
          }
          else {
            num[0] = getRndInteger(Number(1), Number(nodes));
            num[1] = getRndInteger(Number(1), Number(nodes));
          }


          while(1) {
            var flag = true;
            if(num[0]==num[1]) {
              console.log(num[0] + ' ' + num[1] + '\n');
              flag = false;
            }
            for (item of s.values()) {
              if((item[0] == num[0] && item[1]==num[1])) {
                flag = false;
                break;
              }
            }
              if(flag) {
                break;
              }
              else {
                if(initnode == "0") {
                  num[0] = getRndInteger(Number(0), Number(nodes-1));
                  num[1] = getRndInteger(Number(0), Number(nodes-1));
                }
                else {
                  num[0] = getRndInteger(Number(1), Number(nodes));
                  num[1] = getRndInteger(Number(1), Number(nodes));
                }
              }

          }

          document.getElementById("outputTextArea").value +=
            num[0] + " " + num[1] + "\n";
            s.add(num);
            
        }
        s.clear();
      }
  }


else if(heading=="Random Undirected Unweighted Graph") {   
    console.log("nero");
    var tc = document.getElementById("uduwgNtc").value;
    var tcFlag = document.getElementById("uduwgNtcflag").value;
    var nodes = document.getElementById("uduwgNodes").value;
    var edges = document.getElementById("uduwgEdges").value;
    var NEFlag = document.getElementById("uduwgNEflag").value;
    //var isdirectedflag=document.getElementById("weightedgDirectedflag").value;
    var initnode= document.getElementById("uduwgNodesStart").value;
 
    if((edges > (nodes*(nodes-1))/2)) {
      console.log("These number of edges is not possible with given number of nodes, Try  again!");
      var usethis = document.getElementById("invalidAlert");
      if(usethis.classList.contains("d-none"))
        usethis.classList.remove("d-none");
      return;
    }


    if (tcFlag == "1") {
      document.getElementById("outputTextArea").value += tc + "\n";
      console.log("xyz");
    }
 var it, it2;
 
      let s = new Set();
      for (it = 0; it < tc; it++) {
        if (NEFlag == "1")
        {
          document.getElementById("outputTextArea").value += nodes + " " + edges + "\n";
         }

        for (it2 = 0; it2 < edges; it2++) {
              
          var num = new Array(2);
          
          if(initnode == "0") {
            num[0] = getRndInteger(Number(0), Number(nodes-1));
            num[1] = getRndInteger(Number(0), Number(nodes-1));
          }
          else {
            num[0] = getRndInteger(Number(1), Number(nodes));
            num[1] = getRndInteger(Number(1), Number(nodes));
          }

          while(1) {
            console.log("check0");
            var flag = true;

            if(num[0]==num[1]) {
              console.log(num[0] + ' ' + num[1] + '\n');
              flag = false;
            }

            for (item of s.values()) {
              if((item[0] == num[0] && item[1] == num[1]) || (item[0] == num[1] && item[1]==num[0])) {
                flag = false;
                break;
              }
            }
              if(flag) {
                break;
              }

              else {
                if(initnode == "0") {
                  num[0] = getRndInteger(Number(0), Number(nodes-1));
                  num[1] = getRndInteger(Number(0), Number(nodes-1));
                }
                else {
                  num[0] = getRndInteger(Number(1), Number(nodes));
                  num[1] = getRndInteger(Number(1), Number(nodes));
                }
              }

          }

          document.getElementById("outputTextArea").value +=
            num[0] + " " + num[1] + "\n";
            s.add(num);  
        }
        s.clear();
      }
  }


  else if(heading=="Random Directed Weighted Graph") {   
    var tc = document.getElementById("dwgNtc").value;
    var tcFlag = document.getElementById("dwgNtcflag").value;
    var nodes = document.getElementById("dwgNodes").value;
    var edges = document.getElementById("dwgEdges").value;
    var NEFlag = document.getElementById("dwgNEflag").value;
    var minw = document.getElementById("dwgMinWeight").value;
    var maxw = document.getElementById("dwgMaxWeight").value;
    //var isdirectedflag=document.getElementById("weightedgDirectedflag").value;
    var initnode= document.getElementById("dwgNodeStart").value;
 
    if((edges > (nodes*(nodes-1)))) {
      console.log("These number of edges is not possible with given number of nodes, Try  again!");
      var usethis = document.getElementById("invalidAlert");
      if(usethis.classList.contains("d-none"))
        usethis.classList.remove("d-none");
      return;
    }


    if (tcFlag == "1") {
      document.getElementById("outputTextArea").value += tc + "\n";
      console.log("xyz");
    }
 var it, it2;
 
      let s = new Set();
      for (it = 0; it < tc; it++) {
        if (NEFlag == "1")
        {
          document.getElementById("outputTextArea").value += nodes + " " + edges + "\n";
         }

        for (it2 = 0; it2 < edges; it2++) {
              
          var num = new Array(2);
          var weight = getRndInteger(Number(minw), Number(maxw));
          if(initnode == "0") {
            num[0] = getRndInteger(Number(0), Number(nodes-1));
            num[1] = getRndInteger(Number(0), Number(nodes-1));
          }
          else {
            num[0] = getRndInteger(Number(1), Number(nodes));
            num[1] = getRndInteger(Number(1), Number(nodes));
          }


          while(1) {
            var flag = true;
            if(num[0]==num[1]) {
              console.log(num[0] + ' ' + num[1] + '\n');
              flag = false;
            }
            for (item of s.values()) {
              if((item[0] == num[0] && item[1]==num[1])) {
                flag = false;
                break;
              }
            }
              if(flag) {
                break;
              }
              else {
                if(initnode == "0") {
                  num[0] = getRndInteger(Number(0), Number(nodes-1));
                  num[1] = getRndInteger(Number(0), Number(nodes-1));
                }
                else {
                  num[0] = getRndInteger(Number(1), Number(nodes));
                  num[1] = getRndInteger(Number(1), Number(nodes));
                }
              }

          }

          document.getElementById("outputTextArea").value +=
            num[0] + " " + num[1] + " " + weight + "\n";
            s.add(num);
            
        }
        s.clear();
      }
  }


else if(heading=="Random Undirected Weighted Graph") {   
    console.log("nero");
    var tc = document.getElementById("udwgNtc").value;
    var tcFlag = document.getElementById("udwgNtcflag").value;
    var nodes = document.getElementById("udwgNodes").value;
    var edges = document.getElementById("udwgEdges").value;
    var NEFlag = document.getElementById("udwgNEflag").value;
    //var isdirectedflag=document.getElementById("weightedgDirectedflag").value;
    var minw = document.getElementById("udwgMinWeight").value;
    var maxw = document.getElementById("udwgMaxWeight").value;
    var initnode= document.getElementById("udwgNodeStart").value;
 
    if((edges > (nodes*(nodes-1))/2)) {
      console.log("These number of edges is not possible with given number of nodes, Try  again!");
      var usethis = document.getElementById("invalidAlert");
      if(usethis.classList.contains("d-none"))
        usethis.classList.remove("d-none");
      return;
    }


    if (tcFlag == "1") {
      document.getElementById("outputTextArea").value += tc + "\n";
      console.log("xyz");
    }
 var it, it2;
 
      let s = new Set();
      for (it = 0; it < tc; it++) {
        if (NEFlag == "1")
        {
          document.getElementById("outputTextArea").value += nodes + " " + edges + "\n";
         }

        for (it2 = 0; it2 < edges; it2++) {
              
          var num = new Array(2);
          var weight = getRndInteger(Number(minw), Number(maxw));
          if(initnode == "0") {
            num[0] = getRndInteger(Number(0), Number(nodes-1));
            num[1] = getRndInteger(Number(0), Number(nodes-1));
          }
          else {
            num[0] = getRndInteger(Number(1), Number(nodes));
            num[1] = getRndInteger(Number(1), Number(nodes));
          }

          while(1) {
            console.log("check0");
            var flag = true;

            if(num[0]==num[1]) {
              console.log(num[0] + ' ' + num[1] + '\n');
              flag = false;
            }

            for (item of s.values()) {
              if((item[0] == num[0] && item[1] == num[1]) || (item[0] == num[1] && item[1]==num[0])) {
                flag = false;
                break;
              }
            }
              if(flag) {
                break;
              }

              else {
                if(initnode == "0") {
                  num[0] = getRndInteger(Number(0), Number(nodes-1));
                  num[1] = getRndInteger(Number(0), Number(nodes-1));
                }
                else {
                  num[0] = getRndInteger(Number(1), Number(nodes));
                  num[1] = getRndInteger(Number(1), Number(nodes));
                }
              }

          }

          document.getElementById("outputTextArea").value +=
            num[0] + " " + num[1] + " " + weight + "\n";
            s.add(num);  
        }
        s.clear();
      }
  }
 }


 catch(error) {
    console.error(error);
    var usethis = document.getElementById("invalidAlert");
    if(usethis.classList.contains("d-none"))
      usethis.classList.remove("d-none");
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