'use strict';

// Function declaration
function calcAge1(birthYear) {
  return new Date().getFullYear() - birthYear;
}
const age1 = calcAge1(1998);

// Function expression
const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};
const age2 = calcAge2(1998);

console.log(age1, age2);
