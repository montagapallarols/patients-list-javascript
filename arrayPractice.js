// importing our array of patients using `require`
const patients = require("./patients");

// const firstPatient = patients[0];
// console.log(firstPatient);

// const secondPatient = patients[1];
// console.log(secondPatient);

// const lastPatient = patients[19];
// console.log(lastPatient);

// const lastPatient2 = patients[patients.length - 1];
// console.log(lastPatient2);


// const firstPatient = patients[0];

// 1. assign the weight, age and height of the firstPatient to variables weight, age and height
// 2. declare a variable fullName and assign it to the firstName and lastName of the firstPatient
// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"

// const weight = firstPatient.weight;
// const age = firstPatient.age;
// const height = firstPatient.height;

// const {weight, age, height} = firstPatient;
// const weightAgeHeight = `${weight} ${age} ${height}`;
// console.log(weightAgeHeight);


// const {firstName, lastName} = firstPatient; 

// const firstName = firstPatient.firstName;
// const lastName = firstPatient.lastName;

// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);


// if (firstPatient.dailyExercise === "no") {
//     console.log("Does not exercise");
// } else {
//     console.log("This patient exercises");
// }


// console.log(patients[0].firstName + " " + patients[0].lastName);

// for (let i = 0; i < patient.length; i++){
//     console.log(patients[i].firstName + " " + patients[i].lastName);
// }

const names = ["Mon", "John", "Ruby"];

function greet(name){
    console.log("Hello ", name);
}

names.forEach(greet);

names.forEach(function greet(name){
    console.log("Hello ", name);
})


