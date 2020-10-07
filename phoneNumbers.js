const patients = require("./patients");

// Write a program so researchers can get an array of phoneNumbers

const phoneNumbers = patients.map(function(patient){
    return patient.phoneNumber;
})

console.log(phoneNumbers);