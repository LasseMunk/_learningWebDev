/*
* Array like structure where each element
* represents some property of a record
*/

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// drink as an tuple aka. type alias
type Drink = [string, boolean, number]; // type to be used in the app

// the order of array has to be string, boolean, number
// else throw an error
// it is the property values without the keys

// const pepsi: [string, boolean, number] = ['brown', true, 40]; 
const pepsi: Drink = ['brown', true, 40]; 
const tea: Drink = ['brown', false, 0];

