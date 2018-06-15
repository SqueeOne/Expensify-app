//
//Object Destructuring
//


// const person = {
//     name: 'Luka',
//     age: 39,
//     location: {
//         city: 'Ljubljana',
//         temp: 13
//     }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} is ${age}`);

// const { temp: temperature, city } = person.location;

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: 'The Handmaids Tale',
//     author: 'Margareth Atwood',
//     publisher: {
//         // name: 'TOR'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ['Tugomerjeva 14', 'Ljubljana', 'Slovenija', '1000'];

const [, city, state = 'Albania'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '€3.00', '€3.50', '€3.75'];

const [itemName, , price] = item;

console.log(`A medium ${itemName} costs ${price}`);