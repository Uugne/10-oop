class Dog {
    constructor(name, sound) {
    this.name = name;
    this.sound = sound;
}

voice() {
    console.log(`${this.name}: ${this.sound}!`);
}

introduce() {
    console.log(`As esu ${this.name}, mano kailis rudas ir moku sakyti ${this.sound}`);
    }
}


module.exports = Dog;

