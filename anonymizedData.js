const patients = require('./patients');

// Output: an array of patients but with their personal information removed

const anonymizedData = patients.map(function(patient) {
    // return an object with id and age, it gets added to the output array
    return {
      id: patient.id,
      gender: patient.gender,
      height: patient.height,
      weight: patient.weight,
      dailyExercise: patient.dailyExercise,
      age: patient.age
    };
  });
  
  console.log(anonymizedData);