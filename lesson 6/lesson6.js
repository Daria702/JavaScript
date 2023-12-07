// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str4 =  'hello world';
console.log(str4.toUpperCase());

let str5 =  'lorem ipsum';
console.log(str5.toUpperCase());

let str6 =  'javascript is cool';
console.log(str6.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str7 =  'HELLO WORLD';
console.log(str7.toLowerCase());

let str8 =  'LOREM IPSUM';
console.log(str8.toLowerCase());

let str9 =  'JAVASCRIPT IS COOL';
console.log(str9.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str10 = ' dirty string   ';
let strNew = str10.trim();
console.log(strNew)


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str11 = 'Ревуть воли як ясла повні';
let arr = str11.split(' ');
console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr2 = [10,8,-7,55,987,-1011,0,1050,0];
let arrNew = arr2.map((a) => a.toString());
console.log(arrNew);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.



let nums = [11,21,3];
let sortNums = (arr, direction) => {
    if (direction === 'zbilshenna') {
        let variant1 = arr.sort((a, b) => {
            return a - b;
        });
        console.log(variant1);
    } else {
        let variant2 = arr.sort((a, b) => {
            return b - a;
        });
        console.log(variant2);
    }
}
sortNums(nums, 'zbilshenna');


// ==========================
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortTitles = coursesAndDurationArray.sort((title1, title2) =>
    title2.monthDuration - title1.monthDuration);
console.log(sortTitles);


let filteredCourses = coursesAndDurationArray.filter((item) => item.monthDuration > 5 );
console.log(filteredCourses);

let coursesMap = coursesAndDurationArray.map((title, index, array) => {
    // title.id = index + 1;
    return {id: index + 1, ... title};
});
console.log(coursesMap);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let arrCardsMy = [];
let suits = ['spade', 'diamond','heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king', 'tuz'];
    for (let suit of suits) {
            for (let value of values) {
                if (suit === 'spade' || suit === 'clubs') {
                    arrCardsMy.push({cardSuit: suit, value:  value,  color: 'black'});

                }
                if (suit === 'diamond' || suit === 'heart') {
                    arrCardsMy.push({cardSuit: suit, value:  value, color: 'red'});
                }
            }
    }
// console.log(arrCardsMy);

let arrCards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'}
];


// - знайти піковий туз

console.log(arrCards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));


// - всі шістки

let shist = arrCards.filter((card) => card.value === '6');
console.log(shist);



// - всі червоні карти

let color = arrCards.filter((card) => card.color === 'red');
console.log(color);


// - всі буби

let buba = arrCards.filter((card) => card.cardSuit === 'heart');
console.log(buba);


// - всі трефи від 9 та більше

let tref = arrCards.filter((card) => card.value > 9 && card.cardSuit === 'diamonds');
console.log(tref);


//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

// let reduce = arrCards.reduce((accumulator, card) => {
//         if (card.cardSuit === 'clubs') {
//             accumulator[1].push(card);
//         }
//         if (card.cardSuit === 'spades') {
//             accumulator[3].push(card);
//         }
//         if (card.cardSuit === 'diamonds') {
//             accumulator[0].push(card);
//         }
//         if (card.cardSuit === 'hearts') {
//             accumulator[2].push(card);
//         }
//     return accumulator;
// }, [[], [], [], []]);
// console.log(reduce);

let reduce = arrCards.reduce((accumulator, card) => {
    if (card.color === 'red') {
        accumulator[1].push(card);
    } else {
        accumulator[0].push(card);
    }
    return accumulator;
}, [[], []]);
console.log(reduce);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let searchMod = coursesArray.filter((user) => user.cardSuit === 'sass');
console.log(searchMod);