function Person(mass, height) {
    this.mass = mass;
    this.height = height;
    
    this.calculateBMI = function() {
        return this.mass / (this.height * this.height);
    };
}

function compareBMI(mark, john) {
    const markBMI = mark.calculateBMI();
    const johnBMI = john.calculateBMI();
    if(markBMI > johnBMI) {
        return "Mark'BMI ("+ markBMI + ") has a higher BMI than John'BMI (" + johnBMI + ")";
    } else {    
        return "John'BMI ("+ johnBMI + ") has a higher BMI than Mark'BMI (" + markBMI + ")";
    }
}

let mark1 = new Person(78, 1.69);
let john1 = new Person(92, 1.95);
console.log(compareBMI(mark1, john1));


let mark2 = new Person(95, 1.88);
let john2 = new Person(85, 1.76);
console.log(compareBMI(mark2, john2));

