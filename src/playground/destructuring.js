/*
const person = {
    name: 'Jake',
    age: 22,
    location: {
        city: 'Manchester',
        temp: 'f***ing freezing'
    }
};

const {name: firstName = 'Anon', age} = person;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;

if (city && temperature){
    console.log(`It's ${temperature} in ${city}`);
}
*/

// Array destructuring

const address = ['129 Mauldeth Road', 'Manchester', 'Lancashire', 'M14 6SR'];
const [, city, county='Nowhere'] = address;
console.log(`You are in ${city}, ${county}`);

const item = ['Tea', '75p', '£1', '£1.20'];
const [drink,,mediumCost] = item;
console.log(`A ${drink} costs ${mediumCost}`);