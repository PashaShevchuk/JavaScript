// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".
let text = document.querySelector('#text');
text.onclick = () => {
    text.remove();
};

//======================================================================================================================
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn = document.querySelector('#btn');
btn.onclick = () => {
    btn.style.display = 'none';
};

//======================================================================================================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let input = document.querySelector('#input');
let button = document.querySelector('#button');

button.onclick = () => {
    if (input.value === '') {
        alert('You do not enter age');
    } else if (input.value < 18) {
        alert('To young');
    } else {
        confirm('Welcome');
    }
};

//======================================================================================================================
// - Создайте меню, которое раскрывается/сворачивается при клике
let menuElem = document.getElementById('courses');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = () => {
    menuElem.classList.toggle('open');
};

//======================================================================================================================
//********Доробити********
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title: 'lorem 1', body: '1 lorem ipsum dolo sit ameti'},
    {title: 'lorem 2', body: '2 lorem ipsum dolo sit ameti'},
    {title: 'lorem 3', body: '3 lorem ipsum dolo sit ameti'},
    {title: 'lorem 4', body: '4 lorem ipsum dolo sit ameti'},
];

let block = document.querySelector('.block');

comments.forEach((comment) => {
    let div = document.createElement('div');
    div.innerText = `Тема: ${comment.title}; Комментарий: ${comment.body}`;
    block.appendChild(div);
    let comBtn = document.createElement('button');
    comBtn.innerText = 'Свернуть комментрарий'
    block.appendChild(comBtn);

    comBtn.onclick = ()=>{
        div.style.display = 'none';
        comBtn.style.display = 'none'
    }
})

//======================================================================================================================
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let btnForm = document.getElementById('btnForm');

let input11 = document.forms.form1.input11;
let input12 = document.forms.form1.input12;
let input21 = document.forms.form2.input21;
let input22 = document.forms.form2.input22;

btnForm.onclick = () => {
    console.log(input11.value);
    console.log(input12.value);
    console.log(input21.value);
    console.log(input22.value);
}

//======================================================================================================================
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

function createTable(tr, td, tag) {
    let block = document.createElement(tag);
    block.innerText = 'Моя таблица создана функцией';
    let table = document.createElement('table');
    table.style.border = '1px solid black';
    for (let i = 0; i < tr; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < td; j++) {
            let td = document.createElement('td');
            td.innerText = 'ячейка';
            td.style.border = '1px solid black';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    block.appendChild(table);
    document.body.appendChild(block);
}

createTable(3, 4, 'div');

//======================================================================================================================
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let btnCreateTable = document.getElementById('createTable');
let divTable = document.getElementById('table');

let inputTr = document.forms.mainForm.inputTr;
let inputTd = document.forms.mainForm.inputTd;
let inputText = document.forms.mainForm.inputText;

btnCreateTable.onclick = () => {
    let table = document.createElement('table');
    table.style.border = '1px solid black';
    for (let i = 0; i < inputTr.value; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < inputTd.value; j++) {
            let td = document.createElement('td');
            td.innerText = inputText.value;
            td.style.border = '1px solid black';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    divTable.appendChild(table);
}

//======================================================================================================================
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let next = document.getElementById('next');
let prew = document.getElementById('prew');

let slides = document.getElementsByClassName('slide');
for(let i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = slides.length - i; //щою перший слайд (img) був в області видимості (зверху інших img)
}

next.onclick = function () {
    let activeEl = document.querySelector('.active');
    if(activeEl.nextElementSibling) {
        activeEl.style.left = "-100%";
        activeEl.classList.remove('active');
        activeEl.nextElementSibling.classList.add('active');
        prew.classList.remove('no_active');
        if(!activeEl.nextElementSibling.nextElementSibling) {
            this.classList.add('no_active');
        }
    }
}

prew.onclick = function () {
    let activeEl = document.querySelector('.active');
    if(activeEl.previousElementSibling) {
        activeEl.previousElementSibling.style.left = "0%";
        activeEl.classList.remove('active');
        activeEl.previousElementSibling.classList.add('active');
        next.classList.remove('no_active');
        if(!activeEl.previousElementSibling.previousElementSibling) {
            this.classList.add('no_active');
        }
    }
}

//======================================================================================================================
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let swearWords = ['asshole', 'ass', 'fuck', 'fuck you', 'bitch'];

let sInput = document.forms.sWords.sInput;
let btnCheckWords = document.getElementById('checkWords');

//=====
btnCheckWords.onclick = () => {
    swearWords.forEach(word => {
        if (sInput.value === word) {
            alert('Do not write swear words!');
        }
    })
}
//=====

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

//===== Для перегляду 🡻 закоментувати вище 🡹 =====
// btnCheckWords.onclick = () => {
//     const separators = [' ', '-', ':', ',', ';'];
//     let arrWords = sInput.value.split(new RegExp(separators.join('|'), 'g'));
//     for (const word of arrWords) {
//         for (const sWord of swearWords) {
//             if (word === sWord) {
//                 alert('Do not write swear words!');
//             }
//         }
//     }
// }


//======================================================================================================================
// -- взять массив пользователей
let users = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// Данные выводить в документ
let listStatus = document.getElementsByClassName('listStatus')[0];
let listAge = document.getElementsByClassName('listAge')[0];
let listCity = document.getElementsByClassName('listCity')[0];

let userStatus = document.querySelector('#userStatus');
let userAge = document.querySelector('#userAge');
let userCity = document.querySelector('#userCity');

userStatus.onclick = () => {
    listStatus.innerText = '';
    if (userStatus.checked) {
        users.forEach(user => {
            if (!user.status) {
                let div = document.createElement('div');
                div.innerText = `${user.name}, status: ${user.status}`;
                listStatus.appendChild(div);
            }
        })
    }
}

// 2й - оставляет старше 29 лет включительно
userAge.onclick = () => {
    listAge.innerText = '';
    if (userAge.checked) {
        users.forEach(user => {
            if (user.age >= 29) {
                let div = document.createElement('div');
                div.innerText = `${user.name}, age: ${user.age}`;
                listAge.appendChild(div);
            }
        })
    }
}

// 3й - оставляет тех у кого город киев
userCity.onclick = () => {
    listCity.innerText = '';
    if (userCity.checked) {
        users.forEach(user => {
            if (user.address.city === 'Kyiv') {
                let div = document.createElement('div');
                div.innerText = `${user.name}, address: ${user.address.city}, ${user.address.street}, ${user.address.number}`;
                listCity.appendChild(div);
            }
        })
    }
}


//======================================================================================================================
// сделать функцию которая принимает число. После чего, каждую цифру этого числа нужно добавить между собой и так
// повторять пока сумма чисел не будет равна одной цифре

// function sum(number) {
//     let arr = number.toString().split('');
//     let numArr = arr.map(num => +num);
//     let result = numArr.reduce((a, b) => a + b);
//     return (result / 10 >= 1) ? sum(result) : result;
// }
//
// let xxx = sum(4969); // 4+9+6+9 = 28, 2+8 = 10, 1+0 = 1
// console.log(xxx);
