
const patients = require("./patients"); 

const email = process.argv[2];

// console.log(patients);

const specificPatient = patients.find(function(patient){
    // console.log("What is patient?:", patient);
    return patient.email === email;
})

if (specificPatient !== undefined) {
    console.log("OUTPUT: ", specificPatient);
} else {
    console.log(`Patient with email ${email} was not found.`);
}



