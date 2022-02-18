const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const years = new Array(1991, 1994, 2008, 2020);
const friends = ['Micheal', 'Steven', 'Peter', years];


friends[2] = 'batu';

console.log(friends);

console.log(years);

console.log(friends[0]);

console.log(years.length);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const age1 = console.log(calcAge(years[0]));
const age2 = console.log(calcAge(years[1]));
const age3 = console.log(calcAge(years[2]));
const age4 = console.log(calcAge(years[3]));


const newLength = friends.push("Baturay");

console.log(friends);
console.log(newLength);

friends.unshift("Baturay");
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

const removedFirstElement = friends.shift();
console.log(removedFirstElement);
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'));
console.log(friends.includes('Baturay'));

if (friends.includes('Baturay')) {
    console.log("There should be error. Baturay should not be in the array");
}
else {
    console.log("True. Baturay is not in the array.")
}