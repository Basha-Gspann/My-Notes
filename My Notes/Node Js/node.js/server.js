// ******** HTTP Module ***********

var http =require('http');

http.createServer((req,res) =>{
    res.write('Hello');
    res.end();
    console.log('server running...')
}).listen(8080)



// ******** File system Module ***********

// This is to Read a File from local Folder and create a test file

var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    fs.readFile('test.txt',(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8080)



// How to over write the file

// var http = require('http');
// var fs = require('fs');

// http.createServer((req,res)=>{

//     // appendFile is used to overwrite a file 
//     // and it will take 3 arguments

//     fs.appendFile('test.txt',(' Thank You'),(err,data)=>{
//         res.write(data);
//         res.end();
//     })
// }).listen(8080)



// How to over write entair text the file

// var http = require('http');
// var fs = require('fs');

// http.createServer((req,res)=>{
//     fs.writeFile('test.txt',('New Me'),(err,data)=>{
//         res.write(data);
//         res.end();
//     })
// }).listen(8080)




// How to Delete the file

// var http = require('http');
// var fs = require('fs');

// http.createServer((req,res)=>{

//     // Here we have to use only 2 arrguments
//     // and in arrow function we need only one arrugment

//     fs.unlink('test.txt',(err)=>{

//         // But, we have to check if their is any error(we cant delete other file) by using throw functionality

//         if (err) throw err;
//         console.log('File Deleted')
//     })
// }).listen(8080)