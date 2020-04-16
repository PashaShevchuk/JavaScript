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

let form = document.forms.form;

let inputText = form.inputText;
let textarea = form.textarea;

//-------------------for <input name="inputText" type="text"> and <textarea name="textarea">
form.onkeyup = () => {
    localStorage.setItem('inputText', inputText.value);
    localStorage.setItem('textarea', textarea.value);
}

inputText.value = localStorage.getItem('inputText');
textarea.value = localStorage.getItem('textarea');


let checkbox1 = form.checkbox1;
let checkbox2 = form.checkbox2;
let checkbox3 = form.checkbox3;

//-------------------for <input type="checkbox" name="checkbox">
checkbox1.onclick = () => {
    (checkbox1.checked)
        ? localStorage.setItem('checkbox1', 'checked')
        : localStorage.removeItem('checkbox1')
}
checkbox1.checked = localStorage.getItem('checkbox1');

checkbox2.onclick = () => {
    (checkbox2.checked)
        ? localStorage.setItem('checkbox2', 'checked')
        : localStorage.removeItem('checkbox2')
}
checkbox2.checked = localStorage.getItem('checkbox2');

checkbox3.onclick = () => {
    (checkbox3.checked)
        ? localStorage.setItem('checkbox3', 'checked')
        : localStorage.removeItem('checkbox3')
}
checkbox3.checked = localStorage.getItem('checkbox3');


//-------------------for  <input type="radio">
let radio1 = form.radio1;
let radio2 = form.radio2;
let radio3 = form.radio3;

radio1.onclick = () => {
    (radio1.checked)
        ? localStorage.setItem('radio1', 'true')
        : localStorage.removeItem('radio1')
}
radio1.checked = JSON.parse(localStorage.getItem('radio1'));

radio2.onclick = () => {
    (radio2.checked)
        ? localStorage.setItem('radio2', 'true')
        : localStorage.removeItem('radio2')
}
radio2.checked = JSON.parse(localStorage.getItem('radio2'));

radio3.onclick = () => {
    (radio3.checked)
        ? localStorage.setItem('radio3', 'true')
        : localStorage.removeItem('radio3')
}
radio3.checked = JSON.parse(localStorage.getItem('radio3'));

//-------------------for <select> ******* не працює *******
// let option1 = document.getElementById('option1');
// let option2 = document.getElementById('option2');
// let option3 = document.getElementById('option3');
//
// option1.onclick = () => {
//     (option1.selected)
//         ? localStorage.setItem('option1', 'true')
//         : localStorage.removeItem('option1')
// }
//
// option1.selected = JSON.parse(localStorage.getItem('option1'));

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
let name = document.getElementById('name');
let date = document.getElementById('date');
let number = document.getElementById('number');
let email = document.getElementById('email');
let firm = document.getElementById('firm');

let saveCont = document.getElementById('saveCont');

let div = document.getElementById('contact');

saveCont.onclick = () => {
    localStorage.setItem('name', name.value);
    localStorage.setItem('date', date.value);
    localStorage.setItem('number', number.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('firm', firm.value);
}



