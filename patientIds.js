const patients = require("./patients"); 

const patientIds = patients.map(function(patient){
    return patient.id;
})

console.log(patientIds);