//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a, // -div // -h1 // -span // -input // -form // -option // -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

function DescriptionTag(titleOfTag, action, titleOfAttr, actionOfAttr, titleOfAttr2, actionOfAttr2) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = [{titleOfAttr, actionOfAttr}, {titleOfAttr2, actionOfAttr2}];
}

let descriptionTagA = new DescriptionTag(
    'a',
    'Этот является одним из важных элементов HTML и предназначен для создания ссылок.',
    'href',
    'Задает адрес документа, на который следует перейти',
    'download',
    'Предлагает скачать указанный по ссылке файл');
console.log(descriptionTagA);

let descriptionTagDiv = new DescriptionTag(
    'div',
    'Элемент является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    'align',
    'Задает выравнивание содержимого тега',
    'title',
    'Добавляет всплывающую подсказку к содержимому.');
console.log(descriptionTagDiv);

let descriptionTagH1 = new DescriptionTag(
    'H1',
    'Представляет собой наиболее важный заголовок первого уровня',
    'align',
    'Определяет выравнивание заголовка',
    'class',
    'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(descriptionTagH1);

let descriptionTagSpan = new DescriptionTag(
    'span',
    'предназначен для определения строчных элементов документа.',
    'style',
    'Применяется для определения стиля элемента с помощью правил CSS.',
    'title',
    'Описывает содержимое элемента в виде всплывающей подсказки');
console.log(descriptionTagSpan);

let descriptionTagInput = new DescriptionTag(
    'input',
    'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
    'type',
    'Сообщает браузеру, к какому типу относится элемент формы.',
    'value',
    'Значение элемента.');
console.log(descriptionTagInput);

let descriptionTagForm = new DescriptionTag(
    'form',
    'устанавливает форму на веб-странице',
    'action',
    'Адрес программы или документа, который обрабатывает данные формы.',
    'name',
    'Имя формы.');
console.log(descriptionTagForm);

let descriptionTagOption = new DescriptionTag(
    'option',
    'определяет отдельные пункты списка, создаваемого с помощью контейнера select',
    'label',
    'Указание метки пункта списка.',
    'value',
    'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
console.log(descriptionTagOption);

let descriptionTagSelect = new DescriptionTag(
    'select',
    'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
    'size',
    'Количество отображаемых строк списка.',
    'name',
    'Имя элемента для отправки на сервер или обращения через скрипты.');
console.log(descriptionTagSelect);

console.log('****************************************************');
// ====================================================================================================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

// Таким чином описати теги
// -a // -div // -h1 // -span // -input // -form // -option // -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

class TagDescription {
    constructor(titleOfTag, action, titleOfAttr, actionOfAttr, titleOfAttr2, actionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [{titleOfAttr, actionOfAttr}, {titleOfAttr2, actionOfAttr2}];
    }
}

let tagDescriptionA = new TagDescription(
    'a',
    'Этот является одним из важных элементов HTML и предназначен для создания ссылок.',
    'href',
    'Задает адрес документа, на который следует перейти',
    'download',
    'Предлагает скачать указанный по ссылке файл');
console.log(tagDescriptionA);


let tagDescriptionDiv = new TagDescription(
    'div',
    'Элемент является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    'align',
    'Задает выравнивание содержимого тега',
    'title',
    'Добавляет всплывающую подсказку к содержимому.');
console.log(tagDescriptionDiv);

let tagDescriptionH1 = new TagDescription(
    'H1',
    'Представляет собой наиболее важный заголовок первого уровня',
    'align',
    'Определяет выравнивание заголовка',
    'class',
    'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
console.log(tagDescriptionH1);

let tagDescriptionSpan = new TagDescription(
    'span',
    'предназначен для определения строчных элементов документа.',
    'style',
    'Применяется для определения стиля элемента с помощью правил CSS.',
    'title',
    'Описывает содержимое элемента в виде всплывающей подсказки'
);
console.log(tagDescriptionSpan);

let tagDescriptionInput = new TagDescription(
    'input',
    'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
    'type',
    'Сообщает браузеру, к какому типу относится элемент формы.',
    'value',
    'Значение элемента.');
console.log(tagDescriptionInput);

let tagDescriptionForm = new TagDescription(
    'form',
    'устанавливает форму на веб-странице',
    'action',
    'Адрес программы или документа, который обрабатывает данные формы.',
    'name',
    'Имя формы.'
);
console.log(tagDescriptionForm);

let tagDescriptionOption = new TagDescription(
    'option',
    'определяет отдельные пункты списка, создаваемого с помощью контейнера select',
    'label',
    'Указание метки пункта списка.',
    'value',
    'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'
);
console.log(tagDescriptionOption);

let tagDescriptionSelect = new TagDescription(
    'select',
    'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
    'size',
    'Количество отображаемых строк списка.',
    'name',
    'Имя элемента для отправки на сервер или обращения через скрипты.'
);
console.log(tagDescriptionSelect);

console.log('****************************************************');

// ====================================================================================================================
//    - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//    додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
let car = {
    model: 'audi',
    manufacturer: 'Volkswagen Group',
    yearOfManufacture: 2018,
    maxSpeed: 300,
    engineCapacity: 4,
    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    },
    info: function () {
        console.log(`Модель: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${this.yearOfManufacture}, 
        максимальна швидкість: ${this.maxSpeed}, об'єм двигуна: ${this.engineCapacity}`);
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed = newSpeed;
    },
    changeYear: function (newValue) {
        this.yearOfManufacture = newValue;
    },
    addDriver: function (driver = {name: 'Pavlo', age: 26}) {
        this.driver = driver;
    }
};

console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(400);
car.changeYear(2020);
car.addDriver();
console.log(car);

console.log('****************************************************');

// ====================================================================================================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    };
    this.info = function () {
        console.log(`Модель: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${this.yearOfManufacture}, 
        максимальна швидкість: ${this.maxSpeed}, об'єм двигуна: ${this.engineCapacity}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
    };
    this.addDriver = function (driver = {name: 'Max', age: 33}) {
        this.driver = driver;
    }
}

let carConstructor = new Car('bmv', 'Bayerische Motoren Werke AG', 2010, 280, 3);
console.log(carConstructor);
carConstructor.drive();
carConstructor.info();
carConstructor.increaseMaxSpeed(320);
carConstructor.changeYear(2011);
carConstructor.addDriver();
console.log(carConstructor);

console.log('****************************************************');


// ====================================================================================================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
//  швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Cars {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    }

    info() {
        console.log(`Модель: ${this.model}, виробник: ${this.manufacturer}, рік випуску: ${this.yearOfManufacture}, 
            максимальна швидкість: ${this.maxSpeed}, об'єм двигуна: ${this.engineCapacity}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.yearOfManufacture = newValue;
    }

    addDriver(driver = {name: 'John', age: 30}) {
        this.driver = driver;
    }
}

let cars = new Cars('VW', 'Volkswagen Group', 2005, 220, 1.9);
console.log(cars);
cars.drive();
cars.info();
cars.increaseMaxSpeed(240);
cars.changeYear(2008);
cars.addDriver();
console.log(cars);

console.log('****************************************************');

// ====================================================================================================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellasArray = [];

let cinderella1 = new Cinderella('Olya', 30, 37);
let cinderella2 = new Cinderella('Anna', 20, 35);
let cinderella3 = new Cinderella('Mery', 23, 36);
let cinderella4 = new Cinderella('Viki', 25, 38);
let cinderella5 = new Cinderella('Katya', 33, 39);
let cinderella6 = new Cinderella('Oksana', 18, 40);
let cinderella7 = new Cinderella('Lilia', 29, 41);
let cinderella8 = new Cinderella('Nina', 28, 42);
let cinderella9 = new Cinderella('Masha', 21, 43);
let cinderella10 = new Cinderella('Nadya', 20, 44);

cinderellasArray.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7,
    cinderella8, cinderella9, cinderella10);

console.log(cinderellasArray);

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince('Pavlo', 26, 36);
console.log(prince);

for (let i = 0; i < cinderellasArray.length; i++) {
    if (cinderellasArray[i].footSize === prince.foundShoe) {
        prince.foundCinderella = cinderellasArray[i];
    }
}

console.log(prince);

console.log('****************************************************');

// ====================================================================================================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та
// функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function CreateCindarellas(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cndArray = [];

let cnd1 = new CreateCindarellas('Olya', 30, 37);
let cnd2 = new CreateCindarellas('Anna', 20, 35);
let cnd3 = new CreateCindarellas('Mery', 23, 36);
let cnd4 = new CreateCindarellas('Viki', 25, 38);
let cnd5 = new CreateCindarellas('Katya', 33, 39);
let cnd6 = new CreateCindarellas('Oksana', 18, 40);
let cnd7 = new CreateCindarellas('Lilia', 29, 41);
let cnd8 = new CreateCindarellas('Nina', 28, 42);
let cnd9 = new CreateCindarellas('Masha', 21, 43);
let cnd10 = new CreateCindarellas('Nadya', 20, 44);

cndArray.push(cnd1, cnd2, cnd3, cnd4, cnd5, cnd6, cnd7, cnd8, cnd9, cnd10);

console.log(cndArray);

function CreatePrince(name, age, foundShoe) {
    this.name = name;
    this.age = age;
    this.foundShoe = foundShoe;
    this.searchCinderella = function (array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].footSize === prn.foundShoe) {
                prn.foundCinderella = array[i];
            }
        }
    }
}

let prn = new CreatePrince('Max', 30, 39);

console.log(prn);

prn.searchCinderella(cndArray);

console.log(prn);

console.log('****************************************************');
// ====================================================================================================================