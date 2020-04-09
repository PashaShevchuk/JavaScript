// присвоить каждому из следующих значений свою переменную:'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false
// Вывести каждую при помощи console.log , alert, document.write

// let hello = 'hello';
// let owu = 'owu';
// let ua = 'ua';
// let number = 1;
// let number2 = 10;
// let number3 = -999;
// let number4 = 123;
// let number5 = 3.14;
// let number6 = 2.7;
// let number7 = 16;
// let isStatus = true;
// let isStatus2 = false;

// console.log(hello, owu, ua, number, number2, number3, number4, number5, number6, number7, isStatus, isStatus2);
// alert(hello);
// alert(owu);
// alert(ua);
// alert(number);
// alert(number2);
// alert(number3);
// alert(number4);
// alert(number5);
// alert(number6);
// alert(number7);
// alert(isStatus);
// alert(isStatus2);
// document.write(hello, ' ', owu, ' ', ua, ' ', number, ' ', number2, ' ', number3, ' ', number4, ' ', number5, ' ',
// //     number6, ' ', number7, ' ', isStatus, ' ', isStatus2);


// --------------------------------------------------------------------------------------------------------------------

// переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log ,
//alert, document.write

// hello = 'privit';
// owu = 'uwo';
// ua = 'en';
// number = 10;
// number2 = 100;
// number3 = -9990;
// number4 = 1230;
// number5 = 3.140;
// number6 = 2.70;
// number7 = 160;
// isStatus = false;
// isStatus2 = true;

// console.log(hello, owu, ua, number, number2, number3, number4, number5, number6, number7, isStatus, isStatus2);
// alert(hello);
// alert(owu);
// alert(ua);
// alert(number);
// alert(number2);
// alert(number3);
// alert(number4);
// alert(number5);
// alert(number6);
// alert(number7);
// alert(isStatus);
// alert(isStatus2);
// document.write(hello, ' ', owu, ' ', ua, ' ', number, ' ', number2, ' ', number3, ' ', number4, ' ', number5, ' ',
//     number6, ' ', number7, ' ', isStatus, ' ', isStatus2);


// --------------------------------------------------------------------------------------------------------------------

// Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

// const age = 26;
// const weight = 75;
// const height = 175;
// const name = 'Pavlo';
// const surname = 'Shevchuk';
// const patronymic = 'Valeriyovich';

// // console.log(age, weight, height, name, surname, patronymic);
// // // alert (age);
// // // alert (weight);
// // // alert (height);
// // // alert (name);
// // // alert (surname);
// // // alert (patronymic);
//
// document.write(age, ' ', weight, ' ', height, ' ', name,' ', surname, ' ', patronymic);


// --------------------------------------------------------------------------------------------------------------------

// при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать
// разные переменные. Вывести каждую при помощи console.log , alert, document.write

// let name = prompt('Enter your name');
// let surname = prompt('Enter your surname');
// let patronymic = prompt('Enter your patronymic');

// console.log(name, surname, patronymic);

// alert(name);
// alert(surname);
// alert(patronymic);

// document.write(name, ' ', surname, ' ', patronymic);

// --------------------------------------------------------------------------------------------------------------------
// Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

// let person = {
//     name,
//     surname,
//     patronymic
// };

// console.log(person);

// --------------------------------------------------------------------------------------------------------------------
// при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let number1 = +prompt('enter number 1');
// let number2 = +prompt('enter number 2');
// let number3 = +prompt('enter number 3');
//
// console.log(number1, number2, number3);

// --------------------------------------------------------------------------------------------------------------------
// при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав
// результат в переменную result и вывести в консоль браузера

// let number1 = parseInt(prompt('enter number'));
// let number2 = parseInt(prompt('enter number'));
// let number3 = parseInt(prompt('enter number'));
// let number4 = parseInt(prompt('enter number'));

// let result = number1+number2+number3+number4;

// console.log(result);

// --------------------------------------------------------------------------------------------------------------------
// при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let number1 = parseFloat(prompt('enter number'));
// let number2 = parseFloat(prompt('enter number'));
// let number3 = parseFloat(prompt('enter number'));

// let result = number1+number2+number3;

// console.log(result);

// --------------------------------------------------------------------------------------------------------------------
// при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой
// записав результат в переменную  и вывести в консоль браузера

// let number1 = Math.round (parseFloat(prompt('enter number')));
// let number2 = Math.round (parseFloat(prompt('enter number')));
// let number3 = Math.round (parseFloat(prompt('enter number')));

// let result = number1+number2+number3;

// console.log(result);

// --------------------------------------------------------------------------------------------------------------------
// при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое
// будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число
// в степень второго числа.

// let number1 = Math.round (parseFloat(prompt('Введите число')));
// let number2 = Math.round (parseFloat(prompt('Введите степень')));

// let pow = Math.pow(number1, number2);

// console.log(pow);

// --------------------------------------------------------------------------------------------------------------------
// При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100;
// let b = '100'; let c = true; let d = undefined;

// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;

// console.log(typeof a, typeof b, typeof c, typeof d);

// --------------------------------------------------------------------------------------------------------------------
// В одинаковых выражениях в задании не использовать два одинаковых оператора.Каждое выражение вложить в свою переменную
// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 == 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 );         false
// console.log(34 > 33 && 23 < 90 );           true
// console.log(99 > 100 && 45 > 12 );          false
// console.log(132 > 100 || 45 < 12 );         true
// console.log(111 > 11 || 45 < 111 );         true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );  true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));    true
// console.log(!!'-1'); true
// console.log(!!-1); true
// console.log(!!'0'); true
// console.log(!!'null'); true
// console.log(!!'undefined'); true
// console.log(!!(3/'owu')); false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false
// --------------------------------------------------------------------------------------------------------------------

// let users = [
//     {name: 'vasya', age: 31, status: false}, // 0
//     {name: 'petya', age: 30, status: true}, // 1
//     {name: 'kolya', age: 29, status: true}, // 2
//     {name: 'olya', age: 28, status: false}, // 3
//     {name: 'max', age: 30, status: true}, // 4
//     {name: 'anya', age: 31, status: false}, // 5
//     {name: 'oleg', age: 28, status: false}, // 6
//     {name: 'andrey', age: 29, status: true}, // 7
//     {name: 'masha', age: 30, status: true}, // 8
//     {name: 'olya', age: 31, status: false}, // 9
//     {name: 'max', age: 31, status: true} // 10
// ];

// обратиться в соответсвующую ячейку массива и соответсвующий параметр объекта и вывести в консоль
// Пример : вывести имя 1го объекта . Ответ : console.log(users[0].name). Будьте внимательны! 4й объект имеет индес 3!
//     -- статус Андрея
// console.log(users[7].status);
// // -- статус Максима
// console.log(users[4].status);
// // -- имя предпоследнего объекта
// console.log(users[10].name);
// // -- имя третьего объекта
// console.log(users[2].name);
// // -- возраст Олега
// console.log(users[6].age);
// // -- возраст Оли
// console.log(users[3].age);
// // -- возраст + имя 5го объекта
// console.log(users[4].age+users[4].name);
// // -- возраст + сатус ани
// console.log(users[5].age+' '+users[5].status);

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str, typeof num, typeof flag, typeof txt);


// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;

// console.log(a1, a2, a3, a4, a5);


// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';

// console.log(a6, a7, a8, a9, a10);


// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
// let height = 23;
// let width = 10;
// let s = height*width;
// console.log(s);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let heightC = 10;
// let dC = 4;
// let v = 3.14*Math.pow(dC/2, 2) *heightC;
// console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3;
// let m = 4;
// let k = Math.sqrt((Math.pow(n, 2)+Math.pow(m, 2)));
// console.log(k);


// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str = 'Hello world';
// console.log(str);
// document.write(str);
// alert(str);


// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let person = ' Shevchuk\n Pavlo\n Valeriyovich\n 25 y.o.';
// console.log(person);


// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой?';
// let concatenation = `${str1} ${str2} ${str3}`;
// document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); --- 205
// document.write(str - a + "<br/>"); --- 15
// document.write(str * "2" + "<br/>"); --- 40
// document.write(str / 2 + "<br/>"); --- 10


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
// parseInt("3.14") --- 3
// parseInt("-7.875") --- -7
// parseInt("435") --- 435
// parseInt("Вася") --- NaN


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt('Enter smt')
// console.log(str);


// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let number1 = +prompt('Enter number 1');
// let number2 = +prompt('Enter number 2');
// let s = number1+number2;
// alert(s);


// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let name = prompt('Enter your name');
// let surname = prompt('Enter your surname');
// let age = prompt('Enter your age');
// let person = `Доброго вечера ${name} ${surname}, мои поздравления что вам ${age}`;
// alert(person);


