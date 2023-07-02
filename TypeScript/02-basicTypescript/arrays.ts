const carMakers = ['ford', 'toyota', 'chevy'];
const carMakers2: string[] = ['ford', 'toyota', 'chevy'];
const carMakers3: string[] = [];

const carsByMaker = [
    ['f150'],
    ['corolla'],
    ['camaro']
]
const carsByMaker2: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]
const carsByMaker3: string[][] = []


// help with map through inference
// carMakersMap is a string[]
//                                  item type      return type
const carMakersMap = carMakers.map((car: string) : string => {
    return car.toUpperCase();
});

console.log(carMakersMap);

// multiple types
const importantDates = [new Date(), '2020-10-10'];
// can both hold dates and strings
const importantDates2: (Date | string)[] = [new Date(), '2020-10-10'];