// function greet(firstName) {
//     console.log(window);
// }

// greet('Mirjahon');


// bu mening ilk dasturlash kodim

// console.log('Assolumu alaykum');



// let firstName = 'Ibrohim';
// console.log(firstName);

// 1. O'zgaruvchining nomi Kalif so'z bo'lmasligi kerak, masalan - let, for, if, else, ...
// 2. Raqam bilan boshlanmasligi kerak masalan, 1name, 78firstName 
// 3. Probel va chiziqcha mumkin emas
// 4. Case-sensitive 
// 5. Mazmunli bo'lishi kerak 
// let firstName = 'Salin';
// let age = 34;
// let gender = 'M';



// const pi = 3.14;
// console.log(pi);
// pi = 4;



//  O'zgaruvchilarning turlari va primitiv turlari
// Primitiv turlar:
// let firstName = 'Mirjahon';  // String
// let age = 13; // Number
// let isMarried = false; // Bollean
// let firstName = undefined; // undefined

// let selectedColor = null; // null
// selectedColor = 'green';
// selectedColor = null

// console.log(firstName);







// Reference turlar:
//1. Objectlar

// Obectlarni ishlatish turlari
// let person = {
//     firstName: 'Mirjahon',
//     age: 13
// }

// person.firstName = 'Sodiq'; // recomended


// person['age'] = 17;
// let selection = 'age';

// console.log(person[selection]);


//2. Array (Massivlar)

// let selectedColors = ['oq', 'yashil'];
// selectedColors[2]= 7;
// console.log(selectedColors.length);









// Functions
// function greet(firstName, lastName) {
//     console.log('Asslomu alaykum, ' + firstName + ' ' + lastName);
// }

// function square(number) {
//     return number * number;
// }
// let squareResult = square(2);

// greet('Ahmad' , 'Abdullayev');
// greet('Hmaid');



// Operatorlar turlari
// 1. Arifmetik
// 2. Tayinlov
// 3. Solishturuv
// 4. Mantiqiy
// 5. Bitwise

// Arifmetik

// let x = 7;
// let y = 3;

// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)
// console.log(x ** y)
// console.log(++x);
// console.log(x++)
// x += 3
// console.log(x)
// x *= 3
// console.log(x)




// Solishtiruv va tenglik operatorlari


// let x = 1;
// console.log(x < 0)
// console.log(x >= 0)

// tenglikni aniqlash:
// console.log(x === 1)

// tengmaslikni aniqlash:
// console.log(x !== 1)





// x = 10;
// y = 5;
// console.log(x + y = 15)


// Ternary shartli operatori

// let points = 70;
// let result = points > 60 ? 'Utdi' : 'Utmadi';
// console.log('Imtihon natijasi: ' , result);


// Mantiqiy operatorlar: 
// && (va)
// || (yoki)
// ! (emas)

// &&
// let date = new Date();
// let hour = date.getHours();
// let minute = date.getMinutes();
// console.log('Hour: ', hour , ', Minute' , minute)

// let isOfficeOpen = (hour >= 9 && minute >= 20)

// console.log(isOfficeOpen)

// ||
// console.log(true || false)

// ! (emas)
// let isOfficeOpen = (hour >= 9 || minute >= 20);
// let isOFfficeClosed = !isOfficeOpen;

// console.log('Office yopiq: ', isOfficeOpen);
// console.log('Office ochiq: ', isOFfficeClosed);





// falsy qiymatlar:
// undefined
// null
// 0
// false
// ''
// NaN


// Falsy and Trusy

// let defaultColor = 'qora';
// let userColor = 'siyoh rang';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);


// let person = {
//     name: 'Sobir',
//     age: 36,
//     // job: 'Muhandis'
// }

// console.log(person.job || 'ishsiz')


// Mashq
// let a;
// let b = null;
// let c = undefined;
// let d = 4;
// let e = 'five';
// let f = a || b || c || d || e ;
// console.log(f);


// Amaliy Mashg'ulot
// let color1 = 'qora';
// let color2 = 'oq';
// let colorChange = color1;
// color1 = color2;
// color2 = colorChange;

// console.log(color1)
// console.log(color2)




//  if else haqida

// let hour;
// if (hour >= 6 && hour < 12) {
//     console.log('Xayrli Tong.');

// }

// else if (hour >= 12 && hour < 18) {
//     console.log('Xayrli kun.');
// }

// else {
//     console.log('Xayrli kech.');
// }



// switch case haqida

// let word = 'pencil';
// switch (word) {
//     case 'pencil':
//         console.log('qalam');
//         break;

//     case 'book':
//         console.log('kitob')
//         break;

//     case 'clever':
//     case 'intellgent':
//     case 'smart':
//     case 'clever':
//         console.log('aqlli');

//     default:
//         console.log('Nomalum soz')
        
// }


// if (word === 'pencil') console.log('qalam');
// else if (word === 'book') console.log('kitob');
// else console.log('Nomalum soz');







// for loop haqida

// for (let i=5; i>=1; i--) {
//     if (i%2 !==0)
//        console.log(i);
//     // console.log('Salom')
// }



// while va  haqida


// let i=0;
//    while (i <= 5) {
//     if (i%2 !==0) console.log(i);
//     i++;
//    }

   
// // do...while haqida
// let j=0
// do {
//     if (i%2 !==0) console.log(j);
//     j++;
// }   while (j <= 5)




//  break  ko'rsatmalari haqida

// let i=0;
//    while (i <= 10) {
//     if (i ===5) 
//       break;
    
//     console.log(i);
//     i++;
//    }



//  continue ko'rsatmalari haqida



// let i = 0;
// while (i <= 10) {
//     if (i%2 !==0){
//         i++;
//         continue;
//     }
    
//    console.log(i);
//    i++;
// }





// for-in loop'lari haqida.

// const person = {
//     name: 'Jamol',
//     age: 37
// }

// for (let key in person)
//     console.log(key, person[key])


// const colors = ['oq', 'qora', 'yashil', 'moviy'];
// for (let index in colors)
//     console.log(index, colors[index]);




// for-of loop'lari haqida.


for (let color of color)[
    console.log(color);
]
