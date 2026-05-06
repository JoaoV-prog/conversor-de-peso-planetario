const marsGravity = 0.38; /* A gravidade de Marte é 38% da gravidade da Terra */
const earthWeight = 60;
const marsWeight = earthWeight * marsGravity;

console.log(`Your weight on Earth is ${earthWeight} pounds`);
console.log(`Your weight on Mars is ${marsWeight} pounds`);