
John = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 195,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return console.log(this.bmi);


    }
};

Mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 92,
    height: 195,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return console.log(this.bmi);
    }
};

John.calcBMI();
Mark.calcBMI();

console.log(Mark.bmi, John.bmi);

if (Mark.bmi > John.bmi) {
    console.log(`${Mark.firstName} ${Mark.lastName}'s BMI ${Mark.bmi} is higher than ${John.firstName} ${John.lastName}'s BMI ${John.bmi}`)
}
else
    console.log(`${John.firstName} ${John.lastName}'s BMI ${John.bmi} is higher than ${Mark.firstName} ${Mark.lastName}'s BMI ${Mark.bmi}`)

