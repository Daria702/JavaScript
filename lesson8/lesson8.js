// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)

users = [];
users.push(new User(1, 'Dasha', 'Bohachenko', '@ukr.net', '096'));
users.push(new User(2, 'Pasha', 'Bohachenko', 'hz', '093'));
users.push(new User(4, 'Sasha', 'Bohachenko', '@gmail.com', '099'));
users.push(new User(3, 'Olya', 'Bohachenko', 'no', '066'));
users.push(new User(5, 'Nadya', 'Bohachenko', '@ukr.net', '091'));
users.push(new User(6, 'Katya', 'Bohachenko', '@ukr.net', '095'));
users.push(new User(7, 'Vasya', 'Bohachenko', '@ukr.net', '067'));
users.push(new User(8, 'Petya', 'Bohachenko', '@ukr.net', '097'));
users.push(new User(9, 'Kolya', 'Bohachenko', '@ukr.net', '088'));
users.push(new User(10, 'Valentin', 'Bohachenko', '@ukr.net', '001'));


// for (let i=0; i<10; i++) {
//     users[i] = new User()
// }
// User()
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = users.filter((user) => user.id%2 === 0)
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let usersSort = users.sort((user1, user2) => user1.id - user2.id);
console.log(usersSort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor (id, name, surname , email, phone, order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
console.log(Client);

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [];
clients.push(new Client(1, 'Dasha', 'Bohachenko', '@ukr.net', '096', ['1', '2', '3']));
clients.push(new Client(2, 'Pasha', 'Bohachenko', 'hz', '093', ['1']));
clients.push(new Client(4, 'Sasha', 'Bohachenko', '@gmail.com', '099', ['1', '2']));
clients.push(new Client(3, 'Olya', 'Bohachenko', 'no', '066', ['1', '2', '3']));
clients.push(new Client(5, 'Nadya', 'Bohachenko', '@ukr.net', '091', ['1', '3']));
clients.push(new Client(6, 'Katya', 'Bohachenko', '@ukr.net', '095', ['1', '2', '3', '4']));
clients.push(new Client(7, 'Vasya', 'Bohachenko', '@ukr.net', '067', ['1', '2']));
clients.push(new Client(8, 'Petya', 'Bohachenko', '@ukr.net', '097', ['2', '3']));
clients.push(new Client(9, 'Kolya', 'Bohachenko', '@ukr.net', '088', ['1', '2', '3']));
clients.push(new Client(10, 'Valentin', 'Bohachenko', '@ukr.net', '001', ['1', '2', '3']));

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientsSort = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(clientsSort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function  Constructor (model, virobnik, year, shvidkist, obiem) {
    this.model = model;
    this.virobnik = virobnik;
    this.year = year;
    this.shvidkist = shvidkist;
    this.obiem = obiem;
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.shvidkist} на годину`);
    }
    this.info = function () {
        console.log(`model - ${this.model}`);
    }
}

let car = new Constructor('fkdlk', 'fff', 2009, 200, 5);
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, virobnik, year, shvidkist, obiem) {
        this.model = model;
        this.virobnik = virobnik;
        this.year = year;
        this.shvidkist = shvidkist;
        this.obiem = obiem;
        this.drive = function() {
            console.log(`їдемо зі швидкістю ${shvidkist} на годину`);
        }
        this.info = function () {
            console.log(`model - ${model}`);
        }
    }
}
let car1 = new Car('fkdlk', 'fff', 2009, 200, 5);
console.log(car1);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Popelyushka (name, age , size) {
    this.name = name;
    this.age = age;
    this.size = size
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)

popelyushas = [];
popelyushas.push(new Popelyushka('Olya', 19, 37));
popelyushas.push(new Popelyushka('Nadya', 21, 38));
popelyushas.push(new Popelyushka('Dasha', 29, 39));
popelyushas.push(new Popelyushka('Masha', 49, 40));
popelyushas.push(new Popelyushka('Kasha', 7, 34));
popelyushas.push(new Popelyushka('Lara', 11, 36));
popelyushas.push(new Popelyushka('Lena', 78, 42));
popelyushas.push(new Popelyushka('Katya', 20, 36));
popelyushas.push(new Popelyushka('Vita', 23, 37));
popelyushas.push(new Popelyushka('Liza', 26, 38));


console.log(popelyushas);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princ {
    constructor(name, age, sizeOfLeg) {
        this.name = name;
        this.age = age;
        this.size = sizeOfLeg;
    }
}
let princ = new Princ('Petya', 30, 39);
console.log(princ);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const popel of popelyushas) {
    if (popel.size === princ.size) {
        console.log(`${popel.name} - This is she`)
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(popelyushas.find(popel => popel.size === princ.size));
