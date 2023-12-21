//Creating an array

let dan = [23,'king','queen','robert',89]
console.log(dan.length);
console.log(dan.toString());

//Creating arrays through Functions

function cage() {
    var util = ['mouniesh','is','a','developer','since',2012]
    let util2 = [1,3,5,6,7,9,10]
    //Length
    console.log(util.length);

    //Converting to String
    console.log(util.toString());
    //Joining characters or something in between the elements
    console.log(util2.join(' '));
    
    //deleting the objects or array 
    var util3 = {
        "Name":"Mouniesh",
        "Class":"II-CSE-B",
        "Subject":"Data Structures"
    }
    console.log(util3.Name);
    console.log(delete util3.Class);
    console.log(util3);

    //With array
    console.log(delete util[0]);
    console.log(util);

    //Concatinating

    console.log(util.concat(util2));

    //Flatening Array

    let dog = [[1,2,3],[4,5,6],[7,8,9]]
    console.log(dog.flat());

    //push method (Adding elements to the end of the array)

    console.log(dog.push("german shepherd","bull pit","puppy"));
    console.log(dog);

    //unshift Method(Adding elements to the front of the array)

    var birds = [2,3,4,5,6,6,7,90]
    console.log(birds.unshift(11,33,55,66));
    console.log(birds);

    //pop method (Removing elements at end)
    var birds2 = [3,5,6,7,8,9,23]
    console.log(birds2.pop());
    console.log(birds2);

    //shift method (Removing elements at front)

    console.log(birds2.shift());
    console.log(birds2);

    //splice
    var emparr = []
    console.log(emparr.splice(0,0,1,2,3,4,5)) //inserting 
    console.log(emparr);

    console.log(emparr.splice(1,2));//deleting
    console.log(emparr);

}

cage()