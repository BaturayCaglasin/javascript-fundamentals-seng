const jonasArray = [
  "Jonas",
  "Schmedmatt",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

console.log("--- ONLY STRINGS!---");
for (let i = 0; i < jonasArray.length; i++) {
  //jonas[5] does not exists.
  // console.log(jonasArray[i]);
  if (typeof jonasArray[i] !== "string") continue;
  {
    console.log(jonasArray[i], typeof jonasArray[i]);
  }
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//Backward yazım:

console.log("---BACKWARD YAZIM:---");

for (i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

//while

let rep = 1;

while (rep <= 10) {
  console.log(`learning javascript ${rep}`);
  rep++;
}

let diceCounter = 1;

while (diceCounter !== 6) {
  let dice = Math.trunc(Math.random() * 6);
  console.log(`you rolled the dice of ${dice}`);
  diceCounter++;
  if (diceCounter == 6) {
    console.log("The loop is going to be ended.");
    break;
  }
}

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: Number(prompt("Degrees celcius:")),
  };

  console.log(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
