const country = "Srbija";
const continent = "Evropa";
let population = 10;
console.log(country);
console.log(continent);
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "Srpski";

const description = `${country} je ${continent} i ${population} miliona ljudi govore ${language}`;
console.log(description);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;
const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
const markHigherBMI2 = BMIMark2 > BMIJohn2;
console.log(BMIMark2, BMIJohn2, markHigherBMI2);

if(BMIMark2 > BMIJohn2) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
if(population > 33) {
    console.log(`${country} i njena populacija je iznad proseka.`);
}
else {
    console.log(`${country} i njen narod su ${33 - population} miliona ispod proseka.`);
}
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

const numNeighbours = 1;
if(numNeighbours == 1) {
    console.log('Only 1 border!');
}
else if(numNeighbours > 1) {
    console.log('More than 1 border');
}
else {
    console.log('No borders');
}
const speakEnglish = false;
const lessThenFiftyMillionPeople = true;
const isNotIsland = true;
if(speakEnglish && lessThenFiftyMillionPeople && isNotIsland) {
    console.log('Sara treba ziveti u Srbiji');
}
else {
    console.log('Srbija ne ispunjava sve Sarine uslove');
}
const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 110)/3;
console.log(scoreDolphins, scoreKoalas);
if(scoreDolphins > scoreKoalas) {
    console.log('The winner is Dolphins');
}
else if(scoreKoalas > scoreDolphins)
{
    console.log('The winner is Koalas');
} else {
    console.log('Both are the winners');
}
const scoreDolphinsB1 = (97 + 112 + 101)/3;
const scoreKoalasB1 = (109 + 95 + 123)/3;
console.log(scoreDolphinsB1, scoreKoalasB1);
if(scoreDolphinsB1 > scoreKoalasB1 && scoreDolphinsB1 >= 100) {
    console.log('The winner is Dolphins');
}
else if(scoreKoalasB1 > scoreDolphinsB1 && scoreKoalasB1 >=100)
{
    console.log('The winner is Koalas');
} else {
    console.log('Both are the winners');
}
const scoreDolphinsB2 = (97 + 112 + 101)/3;
const scoreKoalasB2 = (109 + 95 + 106)/3;
console.log(scoreDolphinsB2, scoreKoalasB2);
if(scoreDolphinsB2 > scoreKoalasB2 && scoreDolphinsB2 >= 100) {
    console.log('The winner is Dolphins');
}
else if(scoreKoalasB2 > scoreDolphinsB2 && scoreKoalasB2 >=100)
{
    console.log('The winner is Koalas');
} else {
    console.log('Both are the winners');
}
const languageSS = 'spanish';
switch(languageSS) {
    case 'chinese or mandarin':
    console.log('MOST number of native speakers!');
    break;
    case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
    case 'english':
    console.log('3rd place');
    break;
    case 'hindi':
    console.log('Number 4');
    break;
    case 'arabic':
    console.log('5th most spoken language');
    break;
    default:
    console.log('Great language too :D');
} 
console.log(`${country} i njen narod su ${population > 33 ? 'iznad' : 'ispod'} proseka od 33 miliona.`);

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);