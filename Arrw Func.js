//Arrrow Functions

var george = ()=>{
    console.log("Hey There");
    alert("This is an Example of arrw functions")
}

george()

//Arrw funcs with within Single no need Curly braces

var hong = ()=> console.log("Hello World");
console.log("This line is printed");
hong()

//With Parameters

var godzilla = (a,b)=> a+b
console.log(godzilla(3,56));
godzilla(6,7)


var empire = (g,h)=>{
    return g*h
}

console.log(empire(3,6));


let stock = ['nifty','react','angular',23,67]
var stellar = [1,3,5,7,9]
console.log(stellar.map(y=> y+10));

console.log(stock.map(x=>  "Hello  " + x));
