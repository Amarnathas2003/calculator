function buttonClicked(val){
      document.getElementById("input-display").value+=val 
}

function clearBtn(){
     document.getElementById("input-display").value=""
}

function calculate(){
    let thing2 = document.getElementById("input-display").value
    let last = eval(thing2)
    document.getElementById("input-display").value=last

}

