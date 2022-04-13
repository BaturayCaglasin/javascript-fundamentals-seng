const arr = function () {
  const arr = {
    value: Array(prompt("Enter your temperatures: ")),
  };
  const myarr = arr.value;
  console.log(myarr[0]);

  for (let i = 1; i <= myarr.length; i++) {
    console.log(`At day: ${i} the temperature is: ${myarr[0]}`);
    i++;
  }
};
console.log(arr());
