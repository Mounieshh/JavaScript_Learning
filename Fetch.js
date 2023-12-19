
//POST METHOD 
 const request = new Request("https://jsonplaceholder.typicode.com/users",{
  method:"POST",
  headers:{
    "Content-type":"application/json",

  },
  body:JSON.stringify({
    "name":"mouniesh",
    "Class":"CSE",
    "roll":"94"
  })
})

fetch(request)
.then(response => response.json())
.then((data)=> console.log(data)) 
.catch(error=>console.error(error))


  
//Fetching Text Data and Checking Responses


 fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  })
  .then((text) => {
    console.log("Response:", text);
  })
  .catch((error) => {
    console.error(error);
  });
  

  //PUT Method

  fetch("https://jsonplaceholder.typicode.com/users")  
  
  //Do Not Give same URL or ID for fetch it leads to error or 404 not found error

  .then((res)=> res.json())
  .then(data => console.log(data))

  const tune = new Request("https://jsonplaceholder.typicode.com/users/1",{
  method:"PUT",
  headers:{
    "Content-type":"application/json",

  },
  body:JSON.stringify({
    "name":"mouniesh",
    "Class":"CSE",
    "roll":"94"
  })
})

fetch(tune)
.then(resp=> resp.json())
.then((dat)=>console.log(dat))
.catch((error)=>console.error(error.message)) 


//DELETE METHOD

const fetch2 = new Request("https://jsonplaceholder.typicode.com/users/2",{
  method:"DELETE",
  headers:{
    "Content-type":"application/json"
  },
  body:JSON.stringify({
    "name":"thor",
    "place":"asgard",
    "destination":"avenger"
  })
})

fetch(fetch2)         // this Gives an Output of {} and shows the status code 200 OK
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.error(err))


fetch(fetch2)
  .then(response => {
                    //This Shows me the output of "Error Deleting User: 200"
    if (response.status === 204) {
      console.log("User successfully deleted!");
    } else {
      console.error(`Error deleting user: ${response.status}`);
    }
  })
  .catch(error => console.error(error.message));





