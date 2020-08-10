class Details{
    constructor(sId, fullName) {
        this.id = sId;
        this.Name = fullName,
        this.school = "Chandidar high school"
    }
}
const student = new Details(1,'Kalimuddin');
const student1 = new Details(2,'salimuddin');
console.log(student, student1);
console.log('\n');


// inheritense
class Parent{
    constructor() {
        this.fatherName = "Andrew Flower";
}
}

class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getInfo() {
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Andrew Rasel");
const baby2 = new Child("Crish Gaile");
console.log(baby2.getInfo());
console.log(baby.getInfo());