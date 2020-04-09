// - створити функцію яка виводить масив

function showArray(array) {
    console.log(array);
}

showArray([12, 22, 50]);


//__________________________________________________________________________//

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
function randomArray(array) {
    for (let i = 0; i < 5; i++) {
        array[i] = Math.round(Math.random() * 100);
    }
    showArray(array);
}

randomArray([]);
console.log('************************************');
//__________________________________________________________________________//
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function comparisonSmall(a, b, c) {
    console.log(a, b, c);
    let min = arguments[0];
    for (let i = 1; i < 3; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

console.log(comparisonSmall(5, 10, 15));

console.log('************************************');
//__________________________________________________________________________//
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function comparisonBig(a, b, c) {
    console.log(a, b, c);
    let max = arguments[0];
    for (let i = 1; i < 3; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(comparisonBig(22, 55, 100));

console.log('************************************');
//__________________________________________________________________________//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function printLargeNumber() {
    let min = arguments[0];
    let max = min;
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        } else if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    console.log(max);
    return min;
}

let minNum = printLargeNumber(-15, 25, 45, 100, -2, 0, 11);
console.log(minNum);

console.log('************************************');
//__________________________________________________________________________//
// - створити функцію яка виводить масив
let emptyArray = [11, 15, -6, 15, 28, -100, 33, 55];

function outputEmptyArray(array) {
    console.log(array);
}

outputEmptyArray(emptyArray);

console.log('************************************');
//__________________________________________________________________________//
// - створити функцію яка повертає найбільше число з масиву
function outputArrayMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let maxNumberOfArray = outputArrayMax([12, 1, 5, 6]);
console.log(maxNumberOfArray);

console.log('************************************');
//__________________________________________________________________________//
// - створити функцію яка повертає найменьше число з масиву
function outputArrayMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

let minNumberOfArray = outputArrayMin([55, 100, 200, -2, 400]);
console.log(minNumberOfArray);

console.log('************************************');

//__________________________________________________________________________//
// - створити функцію яка приймає масив чисел
function numbersArray(array) {
    console.log(array);
}

numbersArray([1, 2, 5, 8, 6, 10, 200, 4566]);
//__________________________________________________________________________//
// - створити функцію яка скаладає значення елементів масиву та повертає його.
function sumArray(array) {
    let s = 0;
    for (const number of array) {
        s += number;
    }
    return s;
}

let arraySum = sumArray([2, 6, 10, 10, 2]);
console.log(arraySum);

console.log('************************************');
//__________________________________________________________________________//
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticArray(array) {
    let i = 0;
    for (const number of array) {
        i += number;
    }
    let s = i / array.length;
    return s;

}

let arithmetic = arithmeticArray([15, 10, 10, 5]);
console.log(arithmetic);

console.log('************************************');
//__________________________________________________________________________//
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
function returnQuantity(objectArray) {
    let i = objectArray.length;
    return i;
}
let quantity = returnQuantity([{name: 'Pavlo'}, {age: 26}]);
console.log(quantity);

console.log('************************************');
//__________________________________________________________________________//
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function returnFields(objectArray) {
    let i = 0;
    for (const key of objectArray) {
        for (const value in key) {
            i++;
        }
    }
    return i;
}

let fields = returnFields([
    {name: 'Pavlo', age: 26},
    {name: 'Mery', age: 23},
    {address: 'Lviv', street: 22}
]);
console.log(fields);

console.log('************************************');
//__________________________________________________________________________//
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let array1 = [1,2,3,4];
let array2 = [2,3,4,5];
//           [3,5,7,9]

function sumElements(array1, array2) {
    let newArr = [];
    for (let i = 0; i < array1.length; i++) {
        newArr.push(array1[i] + array2[i])
    }
    return newArr;
}

let newArr = sumElements(array1, array2);
console.log(newArr);

console.log('************************************');
//__________________________________________________________________________//


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


//зразок
// let newFunc = function (arrOne) {
//     let counter =0;
//     for (let i = 0; i < arrOne.length; i++) {
//         if (arrOne[i]!==0) {
//         arrTwo.push(arrOne[i]);
//         } else if (arrOne[i] == 0) {
//             counter++;
//         }
//     }

//     while (counter>0) {
//         arrTwo.push(0);
//         counter--;
//     }
//     return arrTwo;


// };



//__________________________________________________________________________//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function addTag() {
    let element = document.createElement('div');
    element.innerText = 'Hello owu';
    document.body.appendChild(element);
}

addTag();

//__________________________________________________________________________//
// - Додає в боді елемент з текстом. Тип елементу та текст отримати через аргументи
function addElement(type, content) {
    let element = document.createElement(type);
    element.innerText = content;
    document.body.appendChild(element);
}

addElement('h1', 'This is my best function');
//__________________________________________________________________________//
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
//__________________________________________________________________________//


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
//             {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine',
//             city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

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

function mixUsers(arrayUsers, arrayCities) {
    let newUsersArray = [];
    for (let i = 0; i < arrayUsers.length; i++) {
        for (let j = 0; j < arrayCities.length; j++) {
            if (arrayUsers[i].id === arrayCities[j].user_id) {
                arrayUsers[i].address = arrayCities[j];
            }
        }
    }
    return arrayUsers;
}

let sss = mixUsers(usersWithId, citiesWithId);
console.log(sss);

console.log('**************************************');

//__________________________________________________________________________//


//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "

// let qq = [12,12,15,45,'grgr', 1515, 'sss'];
// let qq = {name: 'psvlo', age: 26};
// for (const aa of qq) {
//     console.log(aa);
// }
// for (const bb in qq) {
//     console.log(bb);
// }