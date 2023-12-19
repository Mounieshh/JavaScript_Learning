 //let and const

let a = 34
let b = 345

let c = a+b
console.log(c);


const pi =3.14
const r = 10
const area = pi*r*r

console.log("The Area is: "+area);


//arrow functions

let fuse = ()=> "Hello World"
console.log(fuse);
fuse()

//Template Literals

var names = prompt("Enter your Name:")
console.log(`Hello ${names}`);
 

//Generators

function* mygen(limit) {
    for (let i = 1; i <= limit; i++) {
        yield i;
    }
}

const numgen = mygen(5);

for (const num of numgen) {
    console.log(num);
}


//async await

function asyncfunc(){
    setTimeout(() => {
        console.log(1);
        setTimeout(() => {
            console.log(2);
            setTimeout(() => {
                console.log("this is async");
            }, 2000);
        }, 2000);
    }, 1000);
}


async function awaitfunc(){
    try{
    const rock = asyncfunc()
    console.log("Fetched...");
    }
    catch(error){
        console.error(error.message);
    }
    
}

awaitfunc()


