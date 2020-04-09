// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно
// присутствовать только 1 раз в одном объекте )
let user = {name: 'Pavlo', age: 26, address: 'Lviv'};
let phone = {model: 'iPhone', number: 123456789, serialNumber: 26354841549894};
let laptop = {processor: 'Intel', gpu: 'Nvidia', RAM: 8};
let apple = {variety: 'Golden', weight: 100, taste: 'sweet'};
let pen = {color: 'blue', height: 110, price: '$2'};
//______________________________________________________________________________________________________________________
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний
// объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] ,
// wife: { name: 'cherry' } };
let car = {
    name: 'audi',
    model: 'A8',
    color: {mainColor: 'silver', specification: 'metallic'},
    engine: ['2.9', 'gas engine']
};

let book = {
    bookName: 'I am',
    author: 'Nil Bernson',
    story: {main: 'detective', second: 'drama'},
    characters: ['Micki', 'Lili', 'Max']
};

let store = {
    storeName: 'Silpo',
    products: {water: 'WOS', beer: 'Lvivske', whiskey: 'Red Label'},
    address: 'Lviv, Shevchenka 5',
    sellers: ['Nadya', 'Victoria', 'Misha']
};

let hospital = {
    hospitalName: 'Lviv central hospital',
    headPhysician: {name: 'Oleg Pikov', age: 42, cabinet: 18},
    hospitalAddress: 'Lviv, Rappoporta 7',
    branches: ['surgery', 'pediatrics', 'dentistry']
};

let town = {
    townName: 'Lviv',
    attractions: ['Market Square', 'Church of Olga and Elizabeth', 'Dominican Cathedral'],
    information: {population: 700000, area: 890000}
};

//______________________________________________________________________________________________________________________
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
//___________1___________
for (let userKeys in user) {
    console.log(userKeys);
}

let userK = Object.keys(user);
console.log(userK);


for (let phoneKeys in phone) {
    console.log(phoneKeys);
}

let phoneK = Object.keys(phone);
console.log(phoneK);


for (let laptopKeys in laptop) {
    console.log(laptopKeys);
}

let laptopK = Object.keys(laptop);
console.log(laptopK);


for (let appleKeys in apple) {
    console.log(appleKeys);
}

let appleK = Object.keys(apple);
console.log(appleK);


for (let penKeys in pen) {
    console.log(penKeys);
}

let penK = Object.keys(pen);
console.log(penK);


//___________2___________
for (let carKeys in car) {
    console.log(carKeys);
}

let carK = Object.keys(car);
console.log(carK);


for (let bookKeys in book) {
    console.log(bookKeys);
}

let bookK = Object.keys(book);
console.log(bookK);


for (let storeKeys in store) {
    console.log(storeKeys);
}

let storeK = Object.keys(store);
console.log(storeK);


for (let hospitalKeys in hospital) {
    console.log(hospitalKeys);
}

let hospitalK = Object.keys(hospital);
console.log(hospitalK);


for (let townKeys in town) {
    console.log(townKeys);
}

let townK = Object.keys(town);
console.log(townK);

//______________________________________________________________________________________________________________________

//___________5___________
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
let carsArr = [
    {model: 'audi', yearOfManufacture: 2012, power: 2.9, color: 'black'},
    {model: 'bmw', yearOfManufacture: 2013, power: 2, color: 'red'},
    {model: 'suzuki', yearOfManufacture: 2002, power: 3, color: 'blue'},
    {model: 'toyota', yearOfManufacture: 2020, power: 1.6, color: 'black'},
    {model: 'lexus', yearOfManufacture: 2014, power: 2.8, color: 'red'},
    {model: 'mercedes', yearOfManufacture: 2013, power: 2.2, color: 'black'},
    {model: 'subaru', yearOfManufacture: 2002, power: 2.6, color: 'grey'},
    {model: 'volvo', yearOfManufacture: 2015, power: 2.5, color: 'silver'},
    {model: 'honda', yearOfManufacture: 2016, power: 2.1, color: 'black'},
    {model: 'porshe', yearOfManufacture: 2017, power: 2.8, color: 'yellow'}
];

//______________________________________________________________________________________________________________________
//___________6___________
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
// (Значаения полей могу быть выдуманными)
let cities = [
    {name: 'Lviv', population: 700000, country: 'Ukraine', region: 'Lvivska obl.'},
    {name: 'Kyiv', population: 1700000, country: 'Ukraine', region: 'Kyivska obl.'},
    {name: 'Dnipro', population: 900000, country: 'Ukraine', region: 'Dnipropetrovska obl.'},
];

//______________________________________________________________________________________________________________________
//___________7___________
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let cars = [
    {
        model: 'audi', yearOfManufacture: 2012, power: 2.9, color: 'black',
        driver: {name: 'Vova', age: 25, gender: 'male', experience: 5}
    },
    {
        model: 'bmw', yearOfManufacture: 2013, power: 2, color: 'red',
        driver: {name: 'Pavlo', age: 26, gender: 'male', experience: 7}
    },
    {
        model: 'suzuki', yearOfManufacture: 2002, power: 3, color: 'blue',
        driver: {name: 'Misha', age: 45, gender: 'male', experience: 10}
    },
    {
        model: 'toyota', yearOfManufacture: 2020, power: 1.6, color: 'black',
        driver: {name: 'Oleg', age: 40, gender: 'male', experience: 12}
    },
];

//___________8___________- проитерировать каждый массив из задания 5,6,7 при помощи while.
console.log('**************************************'); // Щоб краще було видно

let carsArrList = 0;
while (carsArrList < carsArr.length) {
    console.log(carsArr[carsArrList]);
    carsArrList++;
}

console.log('**************************************');

let citiesList = 0;
while (citiesList < cities.length) {
    console.log(cities[citiesList]);
    citiesList++;
}

console.log('**************************************');

let carsList = 0;
while (carsList < cars.length) {
    console.log(cars[carsList]);
    carsList++;
}

//______________________________________________________________________________________________________________________
//___________9___________- проитерировать каждый массив из задания 5,6,7 при помощи for .
console.log('**************************************');

for (let carsArrList2 = 0; carsArrList2 < carsArr.length; carsArrList2++) {
    console.log(carsArr[carsArrList2]);
}

console.log('**************************************');

for (let citiesList2 = 0; citiesList2 < cities.length; citiesList2++) {
    console.log(cities[citiesList2]);
}

console.log('**************************************');

for (let carsList2 = 0; carsList2 < cars.length; carsList2++) {
    console.log(cars[carsList2]);
}
//___________10__________- проитерировать каждый массив из задания 5,6,7 при помощи  for of.
console.log('**************************************');

for (let carsArrList3 of carsArr) {
    console.log(carsArrList3);
}

console.log('**************************************');

for (let citiesList3 of cities) {
    console.log(citiesList3);
}

console.log('**************************************');

for (let carsList3 of cars) {
    console.log(carsList3);
}

//___________11__________- взять объекты из задания 1 и превратить каждый в json.

let strUser = JSON.stringify(user);
let strPhone = JSON.stringify(phone);
let strLaptop = JSON.stringify(laptop);
let strApple = JSON.stringify(apple);
let strPen = JSON.stringify(pen);

//___________12__________- взять json из задания 11 и превратить их обратно в объекты.
let prsUser = JSON.parse(strUser);
let prsPhone = JSON.parse(strPhone);
let prsLaptop = JSON.parse(strLaptop);
let prsApple = JSON.parse(strApple);
let prsPen = JSON.parse(strPen);

//___________13__________ - взять массив из задания 5,в цикле перебрать его объекты превратив их в json.
console.log('**************************************');

for (let strCarsArr of carsArr) {
    let sca = JSON.stringify(strCarsArr);
    console.log(sca);
}


//___________14__________ - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
console.log('**************************************');

for (let strCities of cities) {
    let sc = JSON.stringify(strCities);
    console.log(sc);
}

//___________15__________ - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
console.log('**************************************');

let newCarsArr = [];

for (let strCars of cars) {
    let c = JSON.stringify(strCars);
    newCarsArr.push(strCars);
    console.log(c);
}

console.log(newCarsArr);

console.log('**************************************');

//____________________________________________________________________________________//
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
let users = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
];

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
for (let use of users) {
    console.log(use);
    for (let skill of use.skills) {
        console.log(skill);
    }
}

console.log('**************************************');

// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills
// всех пользователей в отедльный массив
let newUsersArr = [];

for (let usr of users) {
    for (let skl of usr.skills) {
        newUsersArr.push(skl);
    }
}

console.log(newUsersArr);

console.log('**************************************');
//____________________________________________________________________________________//
//____________________________________________________________________________________//
let users2 = [
    {name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}},

    {name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}},

    {name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}},

    {name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}},

    {name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}},

    {name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}},
    {name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}},

    {name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}},

    {name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}},

    {name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}},

    {name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}}
];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let user2AddressArr = [];

for (let user2Address = 0; user2Address < users2.length; user2Address++) {
    user2AddressArr.push(users2[user2Address].address)
}

console.log(user2AddressArr);

console.log('**************************************');

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

for (let i = 0; i < users2.length; i++) {
    let div = document.createElement('div');
    div.innerText = `${users2[i].name} ${users2[i].age} ${users2[i].status} ${users2[i].address.city}
        ${users2[i].address.country} ${users2[i].address.street} ${users2[i].address.houseNumber}`;
    document.body.appendChild(div);
}

document.write('<hr>');

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

for (let j of users2) {
    let users2Div = document.createElement('div');

    for (let b in j) {
        let users2Value = document.createElement('div');
        users2Value.textContent = `${b}: ${j[b]}`;
        users2Div.appendChild(users2Value);
    }
    document.body.appendChild(users2Div);
}

document.write('<hr>');



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
for (let j of users2) {
    let users2Div = document.createElement('div');

    for (let b in j) {
        let users2Value = document.createElement('div');
        if (b !== 'address') {
            users2Value.innerText = `${j[b]}`;
        } else {
            for (let l in j.address) {
                let addressDiv = document.createElement('div');
                addressDiv.innerText = `${j.address[l]}`;
                users2Value.appendChild(addressDiv);
            }
        }
        users2Div.appendChild(users2Value);
    }
    document.body.appendChild(users2Div);
}


//____________________________________________________________________________________//
//____________________________________________________________________________________//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine',
//     city: 'Ternopil'}}....]
for (let usersId = 0; usersId <usersWithId.length; usersId++) {
    for (let citiesId = 0; citiesId < citiesWithId.length; citiesId++) {
        if (usersWithId[usersId].id === citiesWithId[citiesId].user_id) {
            usersWithId[usersId].address = citiesWithId[citiesId];
        }
    }
}

console.log(usersWithId);

console.log('**************************************');

//____________________________________________________________________________________//
// Перед переглядом завдання, що знаходиться нижче, розкоментувати його.
//____________________________________________________________________________________//

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let divClass = document.getElementsByClassName('main');

// for (let main of divClass) {
//     divClass = main.innerText; //текст з селетора по класу
//     main.style.width = '200px'; // - змінити ширину блоку
//     main.style.height = '200px'; // - змінити висоту блоку
// }

// console.log(divClass);


// let divClass2 = document.getElementsByClassName('main');
// for (let divInnerText of divClass2) {
//     divInnerText.innerText = 'Hello owu CLASS'; // зміна тексту по класу
//     divClass2 = divInnerText.innerText;
// }

// console.log(divClass2);


// //____________________________________________________________________________________//

// let divId = document.getElementById('header');
// console.log(divId.innerText); //текст з селетора по id

// divId.innerText = 'Hello owu ID'; // зміна тексту по id
// console.log(divId.innerText);
//
// divId.style.width = '150px'; // - змінити ширину блоку
// divId.style.height = '150px'; // - змінити висоту блоку

// //____________________________________________________________________________________//

// let divTag = document.getElementsByTagName('div');
//
// for (let divTagText of divTag) {
//     divTag = divTagText.innerText; //текст з селетора по tag
//     divTagText.style.width = '120px'; // - змінити ширину блоку
//     divTagText.style.height = '120px'; // - змінити висоту блоку
// }

// let divTag2 = document.getElementsByTagName('div');
//
// for (let divTagInnerText of divTag2) {
//     divTagInnerText.innerText = 'Hello owu TAG';
//     divTag2 = divTagInnerText.innerText;
// }
// console.log(divTag2);

//____________________________________________________________________________________//
//____________________________________________________________________________________//
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

document.write('<hr>');

let table = document.createElement('table');
let tr = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

table.appendChild(tr);
document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

let table2 = document.createElement('table');
for (let i = 0; i < 10; i++) {
    let tr2 = document.createElement('tr');
    for (let t = 0; t < 3; t++) {
        let td4 = document.createElement('td');
        tr2.appendChild(td4);
    }
    table2.appendChild(tr2);
}

document.body.appendChild(table2);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// з 5 ячейками аналогічно як і з 3.
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt

let tablePromt = document.createElement('table');
let a = prompt('Введіть кількість рядків');
let b = prompt('Введіть кількість ячейок');

for (let i = 0; i < a; i++) {
    let trPromt = document.createElement('tr');
    for (let j = 0; j < b; j++) {
        let tdPromt = document.createElement('td');
        trPromt.appendChild(tdPromt);
    }
    tablePromt.appendChild(trPromt);
}

document.body.appendChild(tablePromt);

//____________________________________________________________________________________//
//____________________________________________________________________________________//


// Завантажити з мережі будь-який шаблон сайту.
//     Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// - знайти всі div та змінити ім колір на червоний
//____________________________________________________________________________________//
//____________________________________________________________________________________//

// ============
// ====class===
// ============
//
//     - є сторінка index.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту
//     яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде
//     змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// todo add rules
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій
// блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement
// вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій
// блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще
// один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и
// вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту