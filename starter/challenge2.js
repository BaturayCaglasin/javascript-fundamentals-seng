let scoreDolphins1 = 97;
let scoreDolphins2 = 112;
let scoreDolphins3 = 101;

let scoreKoalas1 = 109;
let scoreKoalas2 = 95;
let scoreKoalas3 = 106;

let minimumScore = 100;

var averageScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / 3;
var averageScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3;


console.log("average score of dolphins:" + averageScoreDolphins, "average score of koalas:" + averageScoreKoalas);


if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins > minimumScore) {
    console.log("Team Dolphins wins!");
}
else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas > minimumScore) {
    console.log("Team Koalas wins!")
}
else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins > minimumScore && averageScoreKoalas > minimumScore) {
    console.log("Draw!");
}
else {
    console.log("There is no any winner.")
}
