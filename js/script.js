var forms = ["numberForm", "simpleArrayForm", "arrayOfPairsForm", "arrayMatrixForm", "simpleStringForm", "characterMatrixForm", "unweightedTreeForm", "weightedTreeForm", "unweightedGraphForm", "weightedGraphForm" ]

let tabs = []
forms.forEach( (form)=>{ tabs.push(form.substring(0, form.indexOf("Form"))) } )

// document.getElementById("number").onclick = function() {
//   var element = document.getElementById("number");
//   element.classList.add("active");
//   forms.forEach( (formElement)=>{ $("#"+formElement).classList.add('d-none') } )
//   document.getElementById("numberForm").classList.remove("d-none");
// }

// document.getElementById("simpleArray").onclick = function() {
//   var element = document.getElementById("array");
//   element.classList.add("active");
//   forms.forEach( (formElement)=>{ $("#"+formElement).classList.add('d-none') } )
//   document.getElementById("simpleArrayForm").classList.remove("d-none");
//   var element = document.getElementById("number");
//   element.classList.remove("active");
//   var element = document.getElementById("numberForm");
//   element.classList.add("d-none");
// }

tabs.forEach(tab => {
  document.getElementById(tab).onclick = () => {
    tabs.forEach( item => { document.getElementById(item).classList.remove('active') } )
    var element = document.getElementById(tab);
    element.classList.add("active");
    forms.forEach( (formElement)=>{ document.getElementById(formElement).classList.add('d-none') } )
    document.getElementById(tab+"Form").classList.remove("d-none");  
  }
})