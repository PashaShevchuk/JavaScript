// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
let textArea1 = document.getElementById('textArea1');

textArea1.onkeyup = () => {
    const value = textArea1.value;
    localStorage.setItem('textArea1', value);
};

textArea1.value = localStorage.getItem('textArea1');

//======================================================================================================================
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
let form = document.getElementById('form');

getDataForm(form);

function selectForm(t) {
    saveForm(t);
}

function saveForm(tag) {
    for (let i = 0; i < tag.length; i++) {
        if (tag.children[i].name === 'checkbox' || tag.children[i].name === 'radio')
            tag.children[i].checked
                ? tag.children[i].value = true
                : tag.children[i].value = false;
        localStorage.setItem(tag.children[i].id, tag.children[i].value);
    }
}

function getDataForm(tag) {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.hasOwnProperty(tag.children[i].id)) {
            tag.children[i].value = localStorage.getItem(tag.children[i].id);
            if (tag.children[i].value === 'true') {
                tag.children[i].setAttribute('checked', 'checked');
            }
        }
    }
}


//======================================================================================================================
// - Дан текстареа.
// В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем
// поредактировать их, затем еще поредактировать и возможно еще.....
// Требование: хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте! чекпоинт истории - нажатеи кнопки сохранить).

let textareaSave = document.getElementById('textareaSave');
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let btnSave = document.getElementById('btnSave');

let counter = 0;
btnSave.onclick = () => {
   counter++;
   localStorage.setItem(counter, textareaSave.value);
}

btnLeft.onclick = () => {
    counter--;
    textareaSave.value = localStorage.getItem(counter);
}

btnRight.onclick = () => {
    counter++;
    textareaSave.value = localStorage.getItem(counter);
}

//======================================================================================================================
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые
// инпуты для редактирования, которые уже заполнены данными объекта

//================ не доробив ================

// let name = document.getElementById('name');
// let date = document.getElementById('date');
// let number = document.getElementById('number');
// let email = document.getElementById('email');
// let firm = document.getElementById('firm');
//
// let saveCont = document.getElementById('saveCont');
//
// let div = document.getElementById('contact');
//
// saveCont.onclick = () => {
//     localStorage.setItem('name', name.value);
//     localStorage.setItem('date', date.value);
//     localStorage.setItem('number', number.value);
//     localStorage.setItem('email', email.value);
//     localStorage.setItem('firm', firm.value);
// }