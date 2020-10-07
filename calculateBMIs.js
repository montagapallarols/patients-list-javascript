const patients = require("./patients");

// Write a program that calculates a BMR for each patient

function calculateBMI(height, weight) {
    return Math.round(weight / (height * height));
  }
  
  const bmis = patients.map(function(patient) {
    // console.log("WHAT IS PATIENT?", patient);
  
    const BMI = calculateBMI(patient.height, patient.weight);
  
    return BMI; // return BMI for a patient here
  });
  
  console.log(bmis);