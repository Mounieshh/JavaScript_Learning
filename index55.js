var val1 = document.getElementById("A")
  var val2= document.getElementById("B")

  var Result = document.getElementById("Result")

  console.log(val1.value)
  console.log(val2.value);
  
  function Adding(){
    var box1 = Number(val1.value)
    var box2 = Number(val2.value)

    var total = box1+box2
    console.log(total);
    Result.textContent = total
  }