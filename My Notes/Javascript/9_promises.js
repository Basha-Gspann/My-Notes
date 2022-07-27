// (We should know Functions and Callback Functions)

// var prom = new Promise(function(resolve,reject)
// {
//     var drive = false;
//     if(drive)
//     {
//         resolve("Yes");
//     }
//     else{
//         reject("No");
//     }
// });

// prom.then(function(resolve){
//     console.log(resolve + " I Know Driving")
// }).catch(function(reject){
//     console.log(reject + " I don't Know Driving")
// });





// Dependences of Promises 

// var functions = function() 
// {
//     return new Promise(function(resolve,reject){
//         resolve(" Leant Functions");
//     });
// };

// var callback = function(message) 
// {
//     return new Promise(function(resolve,reject){
//         resolve(message + " Leant Callback Functions");
//     });
// };

// var promises = function(message) 
// {
//     return new Promise(function(resolve,reject){
//         resolve(message + " Good to go with Promises");
//     });
// };

// functions().then(function(result){
//     return callback(result);
// }).then(function(result){
//     return promises(result);
// }).then(function(result){
//     console.log("good to go:" + result);
// })