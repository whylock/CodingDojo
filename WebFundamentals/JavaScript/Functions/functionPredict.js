1 -- Understand the problem 
2 -- Think of examples
3 -- Break it down
4 -- solve or simplify
5 -- refactor




Predict 1:

function greeting(){
    return "Hello"; // Hello
    console.log("World");
}
var word = greeting(); // Hello
console.log(word);


Hello

=====================

Predict 2: 

function add(num1, num2){
    console.log("Summing Numbers!"); // Summing Numbers!
    console.log("num1 is: " + num1); // num1 is: 3 | 4
    console.log("num2 is: " + num2); // num2 is: 5 | 7
    var sum = num1 + num2;//            8 | 11
    return sum; // 8
}
var result1 = add(3,5); //add(3,5)
var result2 = add(4,7);
console.log(result1); //---> 8
console.log(result2); //---> 11

====================

Predict 3: 
//                4
function highFive(num){
    //                   add 1
    for(var i=0; i<num; i++){
        if(i == 5){ // When is equal to 5
            console.log("High Five!");
        }
        else{ // 0,1,2,3,4
            console.log(i);
        }
    }
}

// undefined