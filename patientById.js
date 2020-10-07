
const patients = require("./patients");

// hardcoding id 2412 for now, we can make this dynamic later
const id = parseInt(process.argv[2]);

// const specificPatient = patients.find(function(patient) {
//   //console.log("WHAT IS PATIENT?", patient);
//   if (id === patient.id) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log("OUTPUT:", specificPatient);


const specificPatient = patients.find(function(patient){
    return id === patient.id;
    // it's a boolean so you can also return true or false this way
});

if (specificPatient !== undefined){
    console.log("OUTPUT:", specificPatient);
} else {
    console.log(`Patient with ID ${id} was not found.`)
}



