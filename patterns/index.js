// *** Creational Design Patterns ***
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
