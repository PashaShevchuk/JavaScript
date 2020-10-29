//======================================================================================================================
// *** Creations Design Patterns ***
//______________________________________________________________________________________________________________________
// 1. Constructor
// Паттерн, який дозволяє створювати нові обєкти певного типу
class Server {
  constructor(ip, name) {
    this.ip = ip;
    this.name = name;
  }

  getUrl() {
    return `http://${ this.ip }:80`;
  }
}

const aws = new Server('45.32.32.32', 'Ukraine');
console.log(aws.getUrl()); // http://45.32.32.32:80

//______________________________________________________________________________________________________________________
// 2. Factory
// Factory method - это порождающий паттерн проектирования, который использует полиморфизм - объекты или классы
// наследуются от одного абстрактного базового объекта или класса, предназначенного для полиморфного использования.
// В этом объекте или классе определяется единый интерфейс, через который будут происходить операции с конечными
// объектами или классами.
class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  };

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);
    member.type = type;
    member.define = function () {
      console.log(`${ this.name } (${ this.type }): ${ this.cost }`);
    }
    return member;
  }
}

const factory = new MemberFactory();

const pavlo = factory.create('Pavlo', 'premium');
pavlo.define(); // Pavlo (premium): 500

const homer = factory.create('Homer');
homer.define(); // Homer (simple): 50

const bart = factory.create('Bart', 'standard');
bart.define(); // Bart (standard): 150

//______________________________________________________________________________________________________________________
// 3. Prototype
// Можемо створювати нові обєкти використовуючи як скелет для їх прототипів інші обєкти.
// Шаблон предназначен для создания объекта, который можно использовать в качестве основы для других объектов
// посредством наследования прототипа.
// Паттерн Prototype - это порождающий шаблон, который позволяет создавать новые, уже инициализированные, объекты или
// классы на основе исходного.

// 1
const car = {
  wheels: 4,
  init() {
    console.log(`Car model: ${ this.model }, wheels: ${ this.wheels }`);
  }
};

const carWithModel = Object.create(car, {
  model: {
    value: 'Audi'
  }
});
console.log(carWithModel.__proto__ === car); // true
carWithModel.init(); // Car model: Audi, wheels: 4

// 2
class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot); // для клонування обєкта
  }
}

const prototypeCar = new TeslaCar('S', 50000, 'black', false); // базовий обєкт

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.interior = 'white';
car1.autopilot = true;

console.log(car1); // TeslaCar {model: "S", price: 50000, interior: "white", autopilot: true}
console.log(car2); // TeslaCar {model: "S", price: 50000, interior: "black", autopilot: false}

//______________________________________________________________________________________________________________________
// 4. Singleton
// Singleton — порождающий шаблон проектирования, гарантирующий что в однопоточном приложении будет единственный
// экземпляр класса с глобальной точкой доступа.

// 1
let instance;

class Counter {
  constructor() {
    if (!instance) {
      instance = this;
    }
    instance.count = 0;
    return instance;
  }

  getCount() {
    return instance.count;
  }

  increaseCount() {
    return instance.count++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();

myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount()); // 4

console.log(myCount2.getCount()); // 4

// 2
class CounterES6 {
  constructor() {
    if (typeof CounterES6.instance === 'object') {
      return CounterES6.instance;
    }
    this.count = 0;
    CounterES6.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const myCount11 = new CounterES6();
const myCount22 = new CounterES6();

myCount11.increaseCount();
myCount11.increaseCount();

myCount22.increaseCount();
myCount22.increaseCount();

console.log(myCount11.getCount()); // 4

console.log(myCount22.getCount()); // 4

// Ще один варіант, використовується для підключення до БД
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData()); // MongoDB

const mysql = new Database('MySQL'); // MongoDB
console.log(mysql.getData());
//______________________________________________________________________________________________________________________

//======================================================================================================================
// *** Structural Design Patterns ***
//______________________________________________________________________________________________________________________
// 1. Adapter
// Adapter – это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.
// Підходить для рефакторингу коду та переходу на нові версії.

class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add':
        return t1 + t2;
      case 'sub':
        return t1 - t2;
      default:
        return NaN;
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }

  sub(t1, t2) {
    return t1 - t2;
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc();
  }

  operations(t1, t2, operation) {
    switch (operation) {
      case 'add':
        return this.calc.add(t1, t2);
      case 'sub':
        return this.calc.sub(t1, t2);
      default:
        return NaN;
    }
  }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(5, 3, 'add')); // 8

const newCalc = new NewCalc();
console.log(newCalc.add(5, 3)); // 8

const adapter = new CalcAdapter(); // старий інтерфейс, але можемо використовувати новий функціонал
console.log(adapter.operations(5, 3, 'add')); // 8

//______________________________________________________________________________________________________________________
// 2. Decorator
// Завдяки цьому патерну ми маємо можливість додавати нову поведінку або функціонал для інснуючих класів.
// Декоратор приймає інстанс класу та повертає його.

class BaseServer {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `https://${ this.ip }:${ this.port }`;
  }
}

function AmazonWebService(server) {  // ця функція є декоратором
  server.isAWS = true;
  server.awsInfo = function () {
    return server.url;
  }
  return server;
}

function azure(server) { // декоратор
  server.isAzure = true;
  server.port += 500;
  return server;
}

const s1 = AmazonWebService(new BaseServer('12.34.56.78', 8080));
console.log(s1.isAWS);     // true
console.log(s1.awsInfo()); // https://12.34.56.78:8080

const s2 = azure(new BaseServer('98.76.54.32', 2500));
console.log(s2.isAzure); // true
console.log(s2.port);    // 3000
console.log(s2.url);     // https://98.76.54.32:3000

//______________________________________________________________________________________________________________________
// 3. Facade
// Використувується для того щоб створювати більш простіший і унікальний інтерфейс для взаємодії з різними класами.
// Он заключается в том, чтобы создать простой интерфейс к большой и сложной части кода, чтобы спрятать его сложность.
class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply() {
  }

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${ id }: ${ customer } (${ details })`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${ id }: ${ customer } (${ details })`;
  }
}

class ComplaintRegistry { // цей клас є фасадом
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    if (type === 'service') {
      complaint = new ServiceComplaints();
    } else {
      complaint = new ProductComplaints();
    }

    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();
console.log(registry.register('Pavlo', 'service', 'Bad service'));
// Service: 1603655407425: Pavlo (Bad service)

console.log(registry.register('Mary', 'product', 'Bad product'));
// Product: 1603655468444: Mary (Bad product)

//______________________________________________________________________________________________________________________
// 4. Flyweight
// Використовується для того щоб ефективно передавати та працювати з даними через різні типи обєктів.
// flyweight предназначается для экономии памяти занимаемой объектами: если объект еще не создан - он его создает и
// помещает в свой внутренний пул, если объект уже создан(содержится в пуле) - возвращает ссылку на него. Данный паттерн
// хорошо подходит для создания всяких объектов-значений, которые по своей природе могут быть похожи и имутабельны
{
  class Car {
    constructor(model, price) {
      this.model = model;
      this.price = price;
    }
  }

  class CarFactory {
    constructor() {
      this.cars = [];
    }

    create(model, price) {
      const candidate = this.getCar(model);
      if (candidate) {
        return candidate;
      }
      const newCar = new Car(model, price);
      this.cars.push(newCar);

      return newCar;
    }

    getCar(model) {
      return this.cars.find(car => car.model === model);
    }
  }

  const factory = new CarFactory();

  const bmw = factory.create('bmw', 15000);
  console.log(bmw); // Car { model: 'bmw', price: 15000 }

  const audi = factory.create('audi', 20000);
  console.log(audi); // Car { model: 'audi', price: 20000 }

  const bmwX5 = factory.create('bmw', 12000);
  console.log(bmwX5); // Car { model: 'bmw', price: 15000 } - посилання на обєкт bmw
  console.log(bmwX5 === bmw); // true
}

//______________________________________________________________________________________________________________________
// 5. Proxy
// В шаблоне прокси один объект действует как интерфейс к другому объекту. Прокси находится между клиентом объекта и
// самим объектом и защищает доступ к этому объекту.
// Цей патерн дозволяє ставити "пастки" на поля обєктів, на виклик функції, що дозволяє гнучко визначати роботу додатка
// Дозволяє позбавитися зайвих запитів на сервер.

function networkFetch(url) {
  return `${ url } - response from server`;
}

const cache = new Set();

const proxyFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];

    if (cache.has(url)) {
      return `${ url } - response from cache`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  }
});

console.log(proxyFetch('google.com.ua')); // google.com - response from server
console.log(proxyFetch('github.com'));    // github.com - response from server
console.log(proxyFetch('google.com.ua')); // google.com - response from cache
//______________________________________________________________________________________________________________________

//======================================================================================================================
// *** Behavioral Design Patterns ***
// Дозволяють покращити комунікацію між обєктами різного типу.
//______________________________________________________________________________________________________________________
// 1. Chain of Responsibility
// Даний патерн дозволяє послідовно в одного і того самого обєкта викликати набір операцій і послідовно їх модифікувати.

class MySum {
  constructor(initialValue = 10) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this; // Chain of Responsibility
  }
}

const sum1 = new MySum();
console.log(sum1.add(5).add(3).add(2)); // MySum { sum: 20 }  // Chain of Responsibility
console.log(sum1.sum); // 20

//______________________________________________________________________________________________________________________
// 2. Command
//______________________________________________________________________________________________________________________
// 3. Iterator
//______________________________________________________________________________________________________________________
// 4. Mediator
//______________________________________________________________________________________________________________________
// 5. Observer
//______________________________________________________________________________________________________________________
// 6. State
//______________________________________________________________________________________________________________________
// 7. Strategy
//______________________________________________________________________________________________________________________
// 8. Template
//______________________________________________________________________________________________________________________
