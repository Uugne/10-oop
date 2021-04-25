class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.isEngineOn = false;
        this.distance = 0;
    }

    turnOn() {
        if (this.isEngineOn) {
        console.log(`Ka dirbi?! Nori sudeginti starteri?? (${this.name})`);
        return;
    }

    this.isEngineOn = true;
    console.log(`${this.name} engine is turned on!`);
}

    turnOff() {
        if (this.isEngineOn) {
            this.isEngineOn = false;
            console.log(`${this.name} engine is turned OFF!`);
        } else {
            console.log(`tai kad variklis isjungtas...`);
        }
    }

    statusReport() {
        console.log(`${this.name}: car is ${this.color} and engine is turned ${this.isEngineOn ? 'on' : 'off'}.`);
    }

    changeColor(newColor) {
        this.color = newColor;
    }

    drive(distance) {
        if (!this.isEngineOn) {
            console.log(`${this.name}: masina negali vaziuoti kol neijungei variklio...`);
            return;
        }
        this.distance += distance;
        console.log(`${this.name}: drived extra ${distance}km (total: ${this.distance}).`);
    }
}

module.exports = Car;