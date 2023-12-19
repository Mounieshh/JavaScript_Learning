//Async

async function hyena() {
    console.log("Villain");
}
hyena()

const yt = new Promise((resolve,reject)=>{
    console.log("This is an Asynchronous Function");
})

//function

function ron(){
    console.log("Harry potter");
}
ron()

// Async Await  ---> ES7

/*


any method can be given a qualifier as asynchronous   by adding  "async" keyword before the parameter FileList

"await" -- > keyword is used to wait till that promise is resolved and print a block if --> "resolved"

if it is "rejected"  take the whole promise and put that in a try - catch block  to respond for "reject"


*/



// An asynchronous operation that returns a promise

function fetchUserData(userId) {
return new Promise((resolve, reject) => {
setTimeout(() => {
const userData = {
  id: userId,
  username: `user${userId}`,
  email: `user${userId}@example.com`
};
resolve(userData);
}, 1000); // creating a delay of 1000 milliseconds (1 second)
});
}


// Using async/await to handle asynchronous code

async function getUserData() {
try {
console.log("Fetching user data...");
const user1 = await fetchUserData(1);
const user2 = await fetchUserData(2);

console.log("User 1 data:", user1);
console.log("User 2 data:", user2);
console.log("All user data fetched!");
} catch (error) {
console.error("Error fetching user data:", error);
}
}

// Calling the async function
getUserData();