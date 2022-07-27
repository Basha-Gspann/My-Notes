// var car_brand = "BMW";
// var car_model =  "520D";
// var car_price = 1000000;

// function newcar()
// {
//     document.write("This is a car");
// }
// newcar();


// We can't add all car details here so, heare comes Objects

// There are two ways of doing this

// first way

// var car = {
//     brand : "BMW",
//     model : "520D",
//     price : 100000,

//     newcar : function()
//     {
//         return("This is a car");
//     }
// }

// document.write("<h1>"+car.brand+"</h1>")



// Second way for multiple cars

// function cars(brand,model,price)
// {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

//     this.newcar = function()
//     {
//         document.write("This is a car");
//     }
// }
// var c1 = new cars("Audi","Q7",1000000);
// c1.newcar();

// var c2 = new cars("BMW","520D",1000000);
// document.write(c2.brand);

