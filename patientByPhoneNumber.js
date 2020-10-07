
const patients = require("./patients");

const phoneNumber = process.argv[2];

const specificPatient = patients.find(function(patient){
    // console.log(patient.phoneNumber);
    return patient.phoneNumber === phoneNumber;
})

if (specificPatient !== undefined) {
    console.log("OUTPUT:", specificPatient);
} else {
    console.log(`A patient with the phone number: ${phoneNumber} was not found.`)
}

