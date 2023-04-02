var road=document.getElementById("road");
var city=document.getElementById("city");
var car1=document.getElementById("car1");
var car2=document.getElementById("car2");
var wheels=document.querySelectorAll(".wheel")
var mainTimer=document.getElementById("mainTimer");
var secTimer=document.getElementById("secTimer");
var equation=document.getElementsByClassName("equation");

// console.log(city);
// console.log(road);
// console.log(car1);
// console.log(car2);
// console.log(mainTimer);
// console.log(secTimer);
// console.log(equation);
// console.log(wheels[0])
// console.log(wheels.length)




function animate1() {
        city.classList.toggle("animateCity");
        road.classList.toggle("animateRoad");
        //car1.classList.toggle("animateCar");
        //car2.classList.toggle("animateCar");
        for(let i=0;i<wheels.length;i++){
       // wheels[i].classList.toggle("animateWheels");
        }
        
}

