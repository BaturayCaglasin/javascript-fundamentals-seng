//const userAge = prompt("Enter your age");
//if (userAge == 27) alert("Your age is 27!");

function logger() {
    console.log("My name is batu");
}
//calling, running or envoking the function.
logger();

console.log(logger.name);

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
const orangeJuice = fruitProcessor(0, 5);
const appleOrangeJuice = fruitProcessor(5, 5);

console.log(appleJuice);
console.log(orangeJuice);
console.log(appleOrangeJuice);
console.log(appleJuice, orangeJuice, appleOrangeJuice);

//FUNCTION WITH NAMES - LIKE JAVA: 
//FUNCTION DECLERATION

function calcAge1(birthYear) {
    const age = 2022 - birthYear;
    return age;
}
const age1 = calcAge1(1995);
console.log(age1);

//or 

//FUNCTION WITHOUT NAMES:
//FUNCTION EXPRESSION

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1995);
console.log(age2);


//ARROW FUNCTION 

const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement}`
}

console.log("Years until retirement:" + " " + yearsUntilRetirement(1995, "Baturay") + " " + "years later.");

//************** ANOTHER EXAMPLE ******************

function cutFruitPiece(fruit) {
    return fruit * 4;
}


function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruitPiece(apples);
    const orangePieces = cutFruitPiece(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice;
}

console.log(fruitProcessor2(2, 3));

//************** ANOTHER EXAMPLE: OBJECT METHODS ******************

const jonas = {
    firstName: 'Jonas',
    surname: 'Schmedtmann', //string value
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'], //array value
    hasDriverLicense: true, //boolean value
    calcAges: function (birthYear) { //function value
        this.age = 2022 - birthYear;
        //console.log(this);
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAges(1995)} year old ${jonas.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver licence.`
    }
};

console.log(jonas.calcAges(1995));
console.log(jonas.getSummary());
