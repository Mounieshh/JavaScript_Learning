
        //Mouse Events 
        var btn = document.getElementById("btn")
        var  btn2 = document.getElementById("btn2")
        var btn3 = document.getElementById("catch")
        var btn4 = document.getElementById("catch2")
        var nest = document.getElementById("nest")
        btn.addEventListener('click', function() {
            alert("The Button is clicked")
        })
        btn2.addEventListener('mouseover',function () {
            alert("When Hovering the mouse")
        })

        btn3.addEventListener("dblclick", function(){
            var ne = document.createElement("h4")
            ne.textContent = prompt("Enter your name:")
            nest.append(ne)
            alert("Entered Successfully")
        })

        btn4.addEventListener("click" , ()=>{
            alert("This is created using Arrow Function")
        })

        //Mouse Events

        var btnel5 = document.getElementById("btnel5")

        btnel5.addEventListener("mousedown" , ()=>{
            alert("This is mouse down")
        })

        document.addEventListener("mouseup",(event)=>{
            console.log("mouseup",event);
        })
        document.addEventListener("mousedown",(event)=>{
            console.log("mousedown",event);
        })
        
        document.addEventListener("mouseenter",(event)=>{
            console.log("mouseenter",event);
        })

        document.addEventListener("mouseleave",(event)=>{
            console.log("mouseleave",event);
        })

        //Ctrl ,alt ,shift Keys //when pressing these keys it show as an output as textcontent
        var btnel6 = document.getElementById("btnel6")
        btnel6.addEventListener("click",(e)=>{
            let key = []

            if(e.ctrlKey) key.push("ctrl")
            if(e.shiftKey) key.push("shift")
            if(e.altKey) key.push("alt")
            if(e.metaKey) key.push("meta")
            var p = document.getElementById("para")
            p.textContent = `Keys: ${key.join('+')}`

        })

    

