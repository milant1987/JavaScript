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