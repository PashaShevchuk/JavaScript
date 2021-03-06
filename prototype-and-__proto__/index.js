// Мають .__proto__
const user = {};   // user.__proto__
const users = [];  // users.__proto__
const age = 20;    // age.__proto__ Якщо до примітива звертаємося як до обєкта то в памяті тимчасово створюється обєктна
                   // версія цього примітива і цей примітив стає обєктом. string, boolean - аналогічно.

function updateUsers() {           // updateUsers.__proto__, function declaration
}

const isUserOnline = function () { // isUserOnline.__proto__, function expression
}
const madeCount = () => {
}                                  // madeCount.__proto__

class Users {
}                                  // Users.__proto__

// В будь якого обєкта є .__proto__.

const man1 = {};
const man2 = {};

console.log(man1.__proto__ === man2.__proto__); // true
console.log(man1 === man2);                     // false
// Коли обєкти чи примітиви однотипні {} - {}, [] - [], 1 - 18, всі функції і клас - в них __proto__ однакове
// і вони рівні, але самі обєкти між собою не рівні

// В обєкта який є класом або функцією та у встроєних класаї є prototype:
// class MyClass {}           // .prototype
// function Logger () {}      // .prototype
// const API = function () {} // .prototype
// Object.prototype
// Promise.prototype
// Function.prototype
// Boolean.prototype
// Number.prototype
// String.prototype
// Array.prototype

// console.log(Object.prototype === Number.prototype); // false
// prototype є незалежними обєктами

// __proto__ будь якого обєкта посилається на prototype класа (ф-ції конструктора), за допомогою якого цей обєкт створений


// 1
// function Person(name) {
//   this.name = name;
// }
//
// Person.prototype.hello = function () {
//   console.log(this.name);
// }

// 2
class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name);
  }
}

const pavlo = new Person('Pavlo');
pavlo.hello(); // Pavlo

const mary = new Person('Mary');
mary.hello(); // Mary

const x = 18;
console.log(x.__proto__ === Number.prototype); // true

class Human {
}

console.log(Human.__proto__ === Function.prototype); // true
//______________________________________________________________________________________________________________________
// Наслідування

class Animal {
  constructor(options) {
    this.name = options.name;
    this.color = options.color;
  }

  voice() {
    console.log('Voice from', this.name);
  }
}

const dog = new Animal({ name: 'Rex', color: 'black' });
dog.voice(); // Voice from Rex

// *** ES5 *** - функція констурктор
// const Cat = function (options) {
//   Animal.apply(this, arguments);
//   this.hasTail = options.hasTail;
//   this.type = 'cat';
// }

// Можна переписати методи з батьківського класу
// Cat.prototype.voice = function () {
//   Animal.prototype.voice.apply(this, arguments);
//   console.log(this.name, 'says meow');
// }


// *** ES6 ***
class Cat extends Animal {
  constructor(options) {
    super(options);
    this.hasTail = options.hasTail;
    this.type = 'cat';
  }

  // Можна переписати методи з батьківського класу
  voice() {
    // Якщо спочатку хочемо викликати ще метод батьківського класу
    super.voice();
    console.log(this.name, 'says meow');
  }
}

const cat = new Cat({ name: 'Pushok', color: 'grey', hasTail: true, type: 'Cat' });
cat.voice(); // Voice from Pushok -> // Pushok says meow
//______________________________________________________________________________________________________________________

Object.prototype.print = function () {
  console.log('I am object:', this);
}

cat.print(); // I am object: Cat { name: 'Pushok', color: 'grey', hasTail: true, type: 'cat' }

const bob = { name: 'Bob' };
bob.print(); // I am object: { name: 'Bob' }
