// - создать массив с 20 числами.
let numbers = [28, 2, 14, 1, 33, -5, 12, 33, -8, 0, 10, 100, 45, 78, 6, 4, 7, 292, 33, 28];

// -- при помощи метода sort отсортировать массив.
let resultSort = numbers.sort((a, b) => a - b);
console.log(resultSort);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let resultDecline = numbers.sort((a, b) => b - a);
console.log(resultDecline);

// -- при помощи filter получить числа кратные 3
let filter = numbers.filter(num => num % 3 === 0);
console.log(filter);

// -- при помощи filter получить числа кратные 10
let filterTen = numbers.filter(num => num % 10 === 0);
console.log(filterTen);

// -- перебрать (проитерировать) массив при помощи foreach()
numbers.forEach(num => console.log(num));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let map = numbers.map(num => num * 3);
console.log(map);


console.log('*********************************************');

// ====================================================================================================================
// - создать массив со словами на 15-20 элементов.
let words = ['hello', 'how', 'are', 'you', 'my', 'name', 'is', 'pavlo', 'i', 'live', 'in', 'lviv', 'favorite', 'color', 'black'];

// -- отсортировать его по алфавиту в восходящем порядке.
console.log(words.sort());

// -- отсортировать его по алфавиту  в нисходящем порядке.
console.log(words.reverse());

// -- отфильтровать слова длиной менее 4х символов
let wordsLenght = words.filter(word => word.length <= 4);
console.log(wordsLenght);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let wordsMap = words.map(word => word + '!');
console.log(wordsMap);

console.log('*********************************************');

// ====================================================================================================================
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
let usersAgeGrowth = users.sort((user1, user2) => user1.age - user2.age);
console.log(usersAgeGrowth);

// let usersAgeDecrease = users.sort((user1, user2) => user2.age - user1.age);
// console.log(usersAgeDecrease);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let usersName = users.sort((user1, user2) => user1.name.length - user2.name.length);
console.log(usersName);


// let usersNameDecrease = users.sort((user1, user2) => user2.name.length - user1.name.length);
// console.log(usersNameDecrease);

console.log('*********************************************');

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу
// його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let usersCopy = JSON.parse(JSON.stringify(users));

let newUsers = [];

usersCopy.map((value, index) => {
    value.id = index + 1;
    newUsers.push(value);
    return value;
});

console.log(users);

console.log(newUsers);


// - відсортувати його за індентифікатором
let newUsersSort = newUsers.sort((user1, user2) => user1.id - user2.id);

console.log(newUsersSort);


// ====================================================================================================================
// -- наисать функцию калькулятора с 2мя числами и колбеком
function calculate(a, b, callback) {
    console.log(callback(a, b));
}

calculate(2, 4, function(a, b) {
    return a + b - a;
});

// -- наисать функцию калькулятора с 3мя числами и колбеком
function calculate3(a, b, c, callback) {
    console.log(callback(a, b, c));
}

calculate3(2, 4, 6, function(a, b, c) {
    return a + b + c;
});

console.log('*********************************************');


// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================


let cars = [
    {producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400},
    {producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250},
    {producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300},
    {producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140},
    {producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200},
    {producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165},
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180},
    {producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400},
    {producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230}
];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
let cars3L = cars.filter(car => car.volume > 3);

console.log(cars3L);

// - двигун = 2л
let cars2L = cars.filter(car => car.volume === 2);

console.log(cars2L);

// - виробник мерс
let carProducer = cars.filter(car => car.producer === 'mercedes');

console.log(carProducer);

// - двигун більше 3х літрів + виробник мерседес
// тут не до кінця зрозумів. Але якщо виробник мерседес з двигуном більше 3х, то замість || буде &&
let cars3LMers = cars.filter(car => car.volume > 3 || car.producer === 'mercedes');

console.log(cars3LMers);

// - двигун більше 3х літрів + виробник субару
let cars3LSub = cars.filter(car => car.volume > 3 || car.producer === 'subaru');

console.log(cars3LSub);

// - сили більше ніж 300
let carsPower = cars.filter(car => car.power > 300);

console.log(carsPower);

// - сили більше ніж 300 + виробник субару
let carsPowerSub = cars.filter(car => car.power > 300 || car.producer === 'subaru');

console.log(carsPowerSub);

// - мотор серіі ej
let carsEngie = cars.filter(car => car.engine.startsWith('ej'));

console.log(carsEngie);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
let carsEngiePowers = cars.filter(car => car.engine.startsWith('ej') || car.power > 300);

console.log(carsEngiePowers);

// - двигун меньше 3х літрів + виробник мерседес
let cars3LMersSmall = cars.filter(car => car.volume < 3 || car.producer === 'mercedes');

console.log(cars3LMersSmall);

// - двигун більше 2л + сили більше 250
let carsEngiePower = cars.filter(car => car.volume > 2 || car.power > 250);

console.log(carsEngiePower);

// - сили більше 250  + виробник бмв
let carsBmwPower = cars.filter(car => car.power > 250 || car.producer === 'bmw');

console.log(carsBmwPower);


console.log('*********************************************');

// ====================================================================================================================
// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];


// для перегляду кожну по черзі розкоментовувати та закоментовувати, тому що масив "мутований"//

// -- отсортировать его по id пользователей
let usersWithAddressId = usersWithAddress.sort((user1, user2) => user1.id - user2.id);

console.log(usersWithAddressId);

// -- отсортировать его по id пользователей в обратном опрядке
// let usersWithAddressIdRev = usersWithAddress.sort((user1, user2) => user2.id - user1.id);

// console.log(usersWithAddressIdRev);

// -- отсортировать его по возрасту пользователей
let usersWithAddressAge = usersWithAddress.sort((user1, user2) => user1.age - user2.age);

console.log(usersWithAddressAge);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let usersWithAddressAgeRev = usersWithAddress.sort((user1, user2) => user2.age - user1.age);

// console.log(usersWithAddressAgeRev);

// -- отсортировать его по имени пользователей
let usersWithAddressName = usersWithAddress.sort(function (a, b) {
    let nameA = a.name.toLocaleLowerCase();
    let nameB = b.name.toLocaleLowerCase();
    if (nameA < nameB) {
        return -1;
    } else {
        return 1;
    }
});

console.log(usersWithAddressName);

// -- отсортировать его по имени пользователей в обратном порядке
// let usersWithAddressNameRev =  usersWithAddress.sort(function(a, b) {
//     let nameA = a.name.toLocaleLowerCase();
//     let nameB = b.name.toLocaleLowerCase();
//     if (nameA > nameB) {
//         return -1;
//     } else {
//         return 1;
//     }
// });

// console.log(usersWithAddressNameRev);


// -- отсортировать его по названию улицы  в алфавитном порядке
// let usersWithAddresStreet =  usersWithAddress.sort(function(a, b) {
//     let streetA = a.address.street.toLocaleLowerCase();
//     let streetB = b.address.street.toLocaleLowerCase();
//     if (streetA < streetB) {
//         return -1;
//     } else {
//         return 1;
//     }
// });

// console.log(usersWithAddresStreet);

// // -- отсортировать его по номеру дома по возрастанию
let usersWithAddressHouse = usersWithAddress.sort((user1, user2) => user1.address.number - user2.address.number);

console.log(usersWithAddressHouse);

// -- отфильтровать (оставить) тех кто младше 30
let usersWithAddress30 = usersWithAddress.filter(user => {
    if (user.age < 30) {
        return user;
    }
});

console.log(usersWithAddress30);

// -- отфильтровать (оставить) тех у кого отрицательный статус
let usersWithAddressStatus = usersWithAddress.filter(user => {
    if (user.status === false) {
        return user;
    }
});

console.log(usersWithAddressStatus);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let usersWithAddressStatus30 = usersWithAddress.filter(user => {
    if (user.status === false && user.age < 30) {
        return user;
    }
});

console.log(usersWithAddressStatus30);

// -- отфильтровать (оставить) тех у кого номер дома четный
let usersHouseNumber = usersWithAddress.filter(user => {
    if (user.address.number % 2 === 0) {
        return user;
    }
});

console.log(usersHouseNumber);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.

let car1 = {
    model: 'audi',
    power: 400,
    price: 12000,
    year: 2016,
    driver: {name: 'Pavlo', age: 26, experience: 3}
};

let car2 = {
    model: 'vw',
    power: 350,
    price: 10000,
    year: 2014,
    driver: {name: 'Max', age: 30, experience: 10}
};

let car3 = {
    model: 'porshe',
    power: 800,
    price: 50000,
    year: 2019,
    driver: {name: 'Alex', age: 20, experience: 1}
};

let car4 = {
    model: 'volvo',
    power: 380,
    price: 15000,
    year: 2018,
    driver: {name: 'John', age: 40, experience: 15}
};

let car5 = {
    model: 'suzuki',
    power: 420,
    price: 17000,
    year: 2014,
    driver: {name: 'Takashi', age: 29, experience: 7}
};

let car6 = {
    model: 'toyota',
    power: 550,
    price: 27000,
    year: 2017,
    driver: {name: 'Oleg', age: 36, experience: 8}
};

let car7 = {
    model: 'ferari',
    power: 990,
    price: 120000,
    year: 2020,
    driver: {name: 'Luidji', age: 31, experience: 7}
};

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
car1.power += car1.power * 0.1;
car2.power += car2.power * 0.1;
car3.power += car3.power * 0.1;

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
car1.driver = {name: 'Mery', age: 26, experience: 3};
car2.driver = {name: 'Katya', age: 33, experience: 10};
car3.driver = {name: 'Roxy', age: 28, experience: 3};

// Для початку вкладіть всі наші створені автомобілі в масив cars.
let cars1 = [car1, car2, car3, car4, car5, car6, car7];

// Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
cars1.map((car, i) => {
    if (i % 2 === 0) {
        car.power += car.power * 0.1;
        car.price += car.price * 0.05;
        return car;
    }
});


// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то
// необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
cars1.forEach(car => {
    if (car.driver.experience < 5 && car.driver.age > 25) {
        return car.driver.experience++;
    }
});

console.log(cars1);

// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
let totalPrice = cars1.reduce((price, car) => price + car.price, 0);

console.log(totalPrice);


//===================================================================================================================
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

//         0  1  2  3  4  5  6  7  8  9  10
let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function findIndex(array, key) {
    if (!arr.includes(key)) {
        console.log(-1);
    } else {
        let arrTmp = array.map((item, index) => {
            if (item === key) {
                return index;
            }
        });
        arrTmp = arrTmp.filter(item => item+1);
        console.log('Min index:' + Math.min(...arrTmp));
        console.log('Max index:' + Math.max(...arrTmp));
    }
}

findIndex(arr, 4);