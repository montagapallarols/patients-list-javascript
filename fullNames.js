const patients = require("./patients");

// Let's write a program so researchers can get an array of full names of their patients

const fullNames = patients.map(function(patient){
    const { firstName, lastName } = patient
    const fullName = `${firstName} ${lastName}`;
    return fullName;
})

console.log(fullNames);