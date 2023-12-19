 //Promises
 const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Hell0 world")
    },1000)
})
console.log(promise1);

promise1.then((value)=>{
    console.log(value);
})

console.log(promise1);


let japan = new Promise((resolve,reject)=>{
const x = "mouniesh"
const y = "mouniesh"

if(x==y){
    console.log(x);
    resolve()
}
else{
    console.log(y+"string");
    reject()
}
})

japan
.then(()=>{
console.log("Success");
}).
catch(()=>{
console.log("You got an error");
})

//Syntax
//Catching
                            //    catch(()=>{
                            //     console.log(successmessage);
                            //    })

//Four states 
// *Fullfilled
// *Pending
// *rejected 


//CallBack

setTimeout(() => {
    console.log("Hey There");
    setTimeout(() => {
        console.log("After 3 seconds..");
        setTimeout(() => {
            console.log("After 4 seconds")
        }, 4000);
    }, 3000);
}, 2000);