// Defination :- It states that call back function is a function that is passed to another function as an argument, that perticular function is executed later in th programm


// Syntex :- function abc(call){ call() }

// function one()
// {
//     console.log("function 1");
// }

// function two()
// {
//     console.log("function 2");
// }

// function three()
// {
//     console.log("function 3");
// }

// one();
// two();
// three();



// Set timeout 


// function one()
// {
//     console.log("function 1");
// }

// function two()
// {
//     console.log("function 2");
// }

// function three()
// {
//     console.log("function 3");
// }

// setTimeout(one, 2000);
// two();
// three();





// Set timeout other way

// function one()
// {
//     setTimeout(function(){
//         console.log("function 1");}, 2000)
    
// }

// function two()
// {
//     console.log("function 2");
// }


// one();
// two();





// Set timeout one after other

// function one()
// {
//     setTimeout(function(){
//         console.log("function 1");
//     two()
//     }, 2000)
    
// }

// function two()
// {
//     console.log("function 2");
// }


// one();