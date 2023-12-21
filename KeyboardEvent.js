var key1 = document.getElementById("key1")
        var key2 = document.getElementById("key2")
        var key3 = document.getElementById("key3")

        
        key1.addEventListener("keydown",(event)=>{
            console.log("keydown",event);
        })

        key2.addEventListener("keyup",(event)=>{
            console.log("keyup",event);
        })

        key3.addEventListener("keypress",(event)=>{
            console.log("keypress",event);
        })