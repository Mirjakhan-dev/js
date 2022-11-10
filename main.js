
// alert("test");

// let x = 1;

// x = 2;

// Primitiv turlar

// 1 Number (raqamlar, arifmetik shaklida)
// 2 String (Text shaklida)
// 3 Bolean (Rost yoki to'gri)
// 4 undefind 






//  Non primiteve tiplar

// 1. Massiv
// let x = [1]; //Massiv, Array

// x.push("Salom")
// x.unshift("boshidan")


// console.log(x.length)



// let x = ["M", "A", "S"];

// console.log(x[1]);


// 2. Object
// let pen = {}

// pen.color = 'oq'
// pen.price = 2000

// console.log(pen);







// ----------------------------------------------

// && = vaa

// true && true = true
// true && false = false
// false && true = false
// false && false = false


// || - yoki

// true || true = true
// true || false = true
// false || true = true
// false || false = false


//-------------------------------------------------






// Sahrtlar
// 1 - if

// let yosh = prompt("yoshingiz")

// if (yosh >= 20 && obhavo == "quyosh" || testscore > 160) {
//     console.log("Siz kirishingiz mumkin, siz ota-oansiz!");

// } else if (yosh >= 7) {
//     console.log("Siz maktab saytiga kiraolmaysiz");
// } else {
//     console.log("Siz maktab saytiga kira olmaysiz");
// }



// 2 - switch


// let ism = prompt("ismingiz")

// switch(ism){
//     case "muhammadyunus":
//         console.log("Assalomu alaykum ustoz");
//         break;
//     case "mirjahon":
//         console.log("Assalomu alaykum uquvchi");
//         break;
//     default:
//         console.log("Sani tanimadim");
//         break;


// }


// ----------------------------------------------------------------


// functions

// 1 nomli funksiyalar




// function plus(a, b){
//     return a + b
// }

// console.log(plus(5, 9))
// console.log(plus(2, 9))
// console.log(plus(5, 9))
// console.log(plus(8, 9))
// console.log(plus(7, 9))





// function daraja(number, daraja=2){
//     if(!daraja){
//         daraja = 2
//     }
//     return number ** daraja
// }

// console.log(daraja(3))




// anonim funksiyasi - funksiyaning nomi yozilmaydi

// console.log((function (a, b){
//     return a + b
// })(8, 6))



// arrow funksiyasi -  "funksiya" so'zi yozilmaydi

// to'liq yozilishi:

// let plus = (a, b) => {
//     return a + b

// }
// console.log(plus(5, 7));



// bir qatorlik yozilishi:
// let plus = (a, b) => a + b

// console.log(plus(5, 7));



// arrayning for.Each metodi

// let arr = ["a", "b","c"]

// arr.forEach( (value) => {
//     console.log(value)
// })



// let arr = ["A", "B", "C"]


// for (const item of arr) {
//     console.log(item)
// }




// -------------------------------------

//  Dom, elementlarni tanlash
//  keys turlari:

// 1. idli_element = snake keys
// 2. idliElement = camel keys -- recommended
// 3. IdliElement = pascal keys


// ------------------------------------------------------
// let idliElement = document.getElementById("idli") 
// let klassliElement = document.getElementsByClassName("classli")     
// let element = document.getElementsByName("p")   
// console.log(element);

// ! bu yo'llardan foydalanilmaydi
// Mana shu yuldan foydanlanish avfzal
// let element1 = document.querySelector("p") //element kerak bulsa
// let element2 = document.querySelector(".p") //class kerak bulsa
// let element3 = document.querySelector("#p") //id kerak bulsa

// console.log(element)


















//--------------------------------------------


// Classlar bilan ishlash

// 1-yo'l (recommended)

// let redDiv = document.querySelector(".color-1");


// redDiv.classList.add("test");
// redDiv.classList.remove("color-1");
// redDiv.classList.toggle("color-1");

// 2-yo'l

// let redDiv = document.querySelector("div");

// redDiv.className = ".color-1 test-1 test-2 test-3";

// ---------------------------------------------------

// let redDiv = document.querySelector("div");

// redDiv.textContent = "Salom dunyo";
// redDiv.innerHTML = "<h1> Salom dunyo </h1>";


// ----------------------------------
// appendchild, prepend

// redDiv.remove(); //element qo'shish
// let redDiv = document.createElement("div")

// redDiv.classList.add("color-1");
// window.document.body.appendChild(redDiv)  //oxiridan elementni qo'shib beradi
// window.document.body.prepend(redDiv) //oxiridan elementni qo'shib beradi

// ----------------------------------------------------

// Eventlar - hodisalar

let buttonElement = document.querySelector("button");

// 1- yo'l
// buttonElement.onclick = event => {
//     console.log(event)
// }

// 2- yo'l (recommended)
buttonElement.addEventListener("mouseleave", (event) => {
    console.log(event);
})

// formElement.addEventListener("submit", (event) => {
//     event.preventDefault();
    
// })

// ------------------------------------------------









