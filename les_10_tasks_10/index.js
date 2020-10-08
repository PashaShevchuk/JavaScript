// Мають .__proto__
const user = {};   // user.__proto__
const users = [];  // users.__proto__
const age = 20;    // age.__proto__ Якщо до примітива звертаємося як до обєкта то в памяті тимчасово створюється обєктна
                   // версія цього примітива і це стає обєктом. string, boolean - аналогічно.

function updateUsers() {} // updateUsers.__proto__, function declaration
const isUserOnline = function () {} // isUserOnline.__proto__, function expression
const madeCount = () => {} // madeCount.__proto__

class Users {} // Users.__proto__
