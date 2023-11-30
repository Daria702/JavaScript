// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function pryamokutn (storonaA, storonaB) {
    let plosha = storonaA*storonaB;
    return plosha;
}
console.log(pryamokutn(2, 3))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function kolo (radius) {
    let plosha = Math.PI*radius*radius;
    return plosha;
}
console.log(kolo(2));



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cilindr (radius, height) {
    let plosha = 2*Math.PI*radius*height;
    return plosha;
}
console.log(cilindr(2, 5));



// - створити функцію яка приймає масив та виводить кожен його елемент

function array () {
    for (let i=0; i<array.length; i++) {
        console.log(array[i]);
    }
}
array([1, 2, 3, 4, 5]);

function array2 () {
        console.log(array2);
}
array2([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function  paragraf(text) {
    document.write(`<p> ${text} </p>`)
}
paragraf('fkdmfidfi');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function  spisok(text) {
    document.write(`<ul>`)
    for (let i=0; i<3; i++) {
        document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}
spisok('hello');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


function  spisok2(text, kilkist) {
    document.write(`<ul>`)
    for (let i=0; i<kilkist; i++) {
        document.write(`<li> ${text} </li>`)
    }
    document.write(`</ul>`)
}
spisok2('hello', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrSpisok(massiv) {
    document.write(`<ul>`)
    for (const element of massiv) {
        document.write(`<li> ${element} </li>`)
    }
    document.write(`</ul>`)
}
arrSpisok([1, 3, 'fgkg']);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.


function users(...items) {
    for (const elem of items) {
        document.write(`<div class="divs"> ${elem.id}, ${elem.name}, ${elem.age} </div>`);
    }
}
users({id:123, name:'Dasha', age:30}, {id:213, name:'Sasha', age:20}, {id:321, name:'Pasha', age:10});


// - створити функцію яка повертає найменьше число з масиву

function minNumber(array) {
    if (array[0]<array[1] && array[0]<array[2]) {
        console.log(array[0]);
    }
    if (array[1]<array[0] && array[1]<array[2]) {
        console.log(array[1]);
    }
    if (array[2]<array[1] && array[2]<array[0]) {
        console.log(array[2]);
    }
}
minNumber([5, 2, 3]);


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let result = 0;
    for (let i=0; i<arr.length; i++) {
        result=result+arr[i];
    }
    console.log(result);
}
sum([1, 2, 3, 4])

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


function  swap(arr,index1,index2) {
    const arrNew = [];
    for (let i=0; i<arr.length; i++) {
      arrNew.push(arr[i]);
    }
    arrNew[index1] = arrNew[index2];
    arrNew[index2] = arr[index1];
    console.log(arrNew);
}
swap([5,7,1,6], 1, 2);



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function  exchange(sumUAH,currencyValues,exchangeCurrency) {
    let result = 0;
    if (exchangeCurrency==='USD') {
       result = sumUAH / currencyValues[0].value;
    }
    if (exchangeCurrency==='EUR') {
        result = sumUAH / currencyValues[1].value;
    }
    console.log(result);
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')
