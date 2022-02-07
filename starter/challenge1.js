let BMIM1;
let BMIJ1;
let BMIM2;
let BMIJ2;

//test data set 1 
const markMass1 = 78;
const markHeight1 = 169;
const johnMass1 = 92;
const johnHeight1 = 195;

//test data set 2
const markMass2 = 95;
const markHeight2 = 188;
const johnMass2 = 85;
const johnHeight2 = 176;

BMIM1 = markMass1 / markHeight1 ** 2;
BMIJ1 = johnMass1 / johnHeight1 ** 2;

BMIM2 = markMass2 / markHeight2 ** 2;
BMIJ2 = johnMass2 / johnHeight2 ** 2;

console.log(BMIM1, BMIJ1);
console.log(BMIM2, BMIJ2);

let markHigherBMI1 = BMIM1 > BMIJ1;
let markHigherBMI2 = BMIM2 > BMIJ2;

console.log(markHigherBMI1, markHigherBMI2);

const firstName = 'batu';
const job = "qaenginner";

console.log(firstName, job);

const birthYear = 1995;

const concat2 = `I'm ${firstName}`;

console.log(concat2);

console.log(`multiple
string
lines`);
