const studentInformations = require("./information");

console.log(studentInformations);

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello, I'm ${studentInformations.name}, based on the ${studentInformations.campus} campus!`,
    e: "oO",
    T: "U ",
  })
);
