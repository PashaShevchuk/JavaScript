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

// В будь якого обєкта є .__proto__

const man1 = {};
const man2 = {};

console.log(man1.__proto__ === man2.__proto__); // true
console.log(man1 === man2);                     // false
// Коли обєкти чи примітиви однотипні {} - {}, [] - [], 1 - 18, всі функції і клас - в них __proto__ однакове
// і вони рівні, але самі обєкти між собою не рівні
