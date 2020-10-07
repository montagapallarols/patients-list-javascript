const patients = require("./patients");

function calculateBMR(weight, height, genderOfUser, ageOfUser){
    const heightInCm = height * 100;

    let BMR;

    if (genderOfUser === "m") {
        BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 5;
    } else {
        BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
    }
    return BMR;
}

// Men BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
// Women BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161

const bmrs = patients.map(function(patient){
    const BMR = calculateBMR(patient.weight, patient.height, patient.gender, patient.age);
    return BMR; 
});

console.log(bmrs);