const array = {
    firstName: "Baturay",
    lastName: "Caglasin",
    age: 2022 - 1995,
    friends: ['Mike', 'Peter', 'Steven']
};

console.log(array);
array.firstName.replace = "Batu";
console.log(array.firstName);

const InterestedIn = prompt("What do you want to know about baturay? Choose between firstName, lastName, age, job, and friends");
console.log(array[InterestedIn]); //27
console.log(array.InterestedIn); //Undefined

//Bracket kullanımı ile dot kullanımı farklı. Bracket kullanımı ile obje arasındaki bağlantı kurulur. 
//array[InterestedIn] ile; girilen değer olan interestedIn ile array objesi arasındaki bağlantı kurulmuş olur.

