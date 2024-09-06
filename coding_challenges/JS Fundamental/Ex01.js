function Person(mass, height) {
    this.mass = mass;
    this.height = height;
    
    this.calculateBMI = function() {
        return this.mass / (this.height * this.height);
    };
}

function compareBMI(person1, person2) {
    const bmi1 = person1.calculateBMI();
    const bmi2 = person2.calculateBMI();
    return bmi1 > bmi2;
}

let mark1 = new Person(78, 1.69);
let john1 = new Person(92, 1.95);
console.log("Test data1: Mark has a higher BMI than John: " + compareBMI(mark1, john1));


let mark2 = new Person(95, 1.88);
let john2 = new Person(85, 1.76);
console.log("Test data2: Mark has a higher BMI than John: " + compareBMI(mark2, john2));

