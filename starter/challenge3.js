const calcAverageDolphins = (dScore1, dScore2, dScore3) => {
    var dAvr = (dScore1 + dScore2 + dScore3) / 3;
    return dAvr;
}
const averageDolphins = calcAverageDolphins(44, 23, 71);



const calcAverageKoalas = (kScore1, kScore2, kScore3) => {
    var kAvr = (kScore1 + kScore2 + kScore3) / 3;
    return kAvr;
}
const averageKoalas = calcAverageKoalas(65, 54, 49);

console.log("Average of Dolphin Team:" + averageDolphins + " " + "Average of Koalas Team:" + averageKoalas);

/// **** ///

const calcAverage = (score1, score2, score3) => {
    var average = (score1 + score2 + score3) / 3;
    return average;
}

const calculateAverageDolphins = calcAverage(85, 54, 41);
const calculateAverageKoalas = calcAverage(23, 34, 27);

console.log("Average of Dolphin Team:" + calculateAverageDolphins + " " + "Average of Koalas Team:" + calculateAverageKoalas);


function checkWinner(calculateAverageDolphins, calculateAverageKoalas) {
    if (calculateAverageKoalas * 2 <= calculateAverageDolphins) {
        const dolphinsWins = `Dolphins Win! ${calculateAverageDolphins} vs ${calculateAverageKoalas}`;
        return dolphinsWins;
    }
    else if (calculateAverageDolphins * 2 <= calculateAverageKoalas) {
        const koalasWins = `Koalas Win! ${calculateAverageKoalas} vs ${calculateAverageDolphins}`;
        return koalasWins;
    }
    else {
        console.log("There is no winner at this time.")
    }
}
console.log(checkWinner(calculateAverageDolphins, calculateAverageKoalas));
