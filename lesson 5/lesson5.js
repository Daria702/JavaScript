// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let  pryamok = (a, b) => a*b;
console.log(pryamok(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let kolo = (radius) => Math.PI*radius*radius;
console.log(kolo(2));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cilindr = (h, r) => 2*Math.PI*r*h;
    console.log(cilindr(3,2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = (array) => {
    for (let i=0; i<array.length; i++) {
       console.log(array[i]);
    }
};
    arr([1, 2, 3]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraf = (text) => document.write(`<p> ${text} </p>`);
paragraf('fkdmfidfi');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let spisok = (text) => {
    document.write(`<ul>`)
    for (let i=0; i<3; i++) {
        document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}
spisok('hello');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
//   li визначається другим аргументом, який є числовим (тут використовувати цикл)

let spisok2 = (text, kilkist) => {
    document.write(`<ul>`)
    for (let i=0; i<kilkist; i++) {
        document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}
spisok2('hello2', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrSpisok = (massiv) => {
    document.write(`<ul>`)
    for (const element of massiv) {
        document.write(`<li> ${element} </li>`)
    }
    document.write(`</ul>`)
}
arrSpisok([1, 3, 'fgkg']);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
//   об'єкту окремий блок.
let  users = (...items) => {
    for (const elem of items) {
        document.write(`<div class="divs"> ${elem.id}, ${elem.name}, ${elem.age} </div>`);
    }
}
users({id:123, name:'Dasha', age:30}, {id:213, name:'Sasha', age:20}, {id:321, name:'Pasha', age:10});


// - створити функцію яка повертає найменьше число з масиву

let minArr = (array) => {
    let min = array[0];
    for (const num of array) {
        if (min > num) {
            min = num;
        }
    }
    return min;
}
console.log(minArr([1,5,-2,10]));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let result = 0;
    for (let i=0; i<arr.length; i++) {
        result=result+arr[i];
    }
    console.log(result);
}
sum([1, 2, 5, 4]);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//   Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let  swap = (arr,index1,index2) => {
    let arrNew = [];
    for (let i=0; i<arr.length; i++) {
        arrNew.push(arr[i]);
    }
    arrNew[index1] = arrNew[index2];
    arrNew[index2] = arr[index1];
    console.log(arrNew);
}
swap([5,7,1,6], 1, 2);



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//   Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let result = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {

                result = sumUAH / currencyValues[i].value;

}
        return result;
}
}
console.log(exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));


