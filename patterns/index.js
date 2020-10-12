// Creational Design Patterns
// 1. Constructor
// 2. Factory
// 3. Prototype

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
    return instance;
  }
}
