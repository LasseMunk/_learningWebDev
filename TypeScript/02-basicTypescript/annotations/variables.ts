let apples: string = "this is an apple";
let speed: number = 100;

apples = "yoyo";
speed = 33;

// built in objects
let now: Date = new Date();

// array type
let colors: string[] = ["red", "green", "blue"];

// classes
class Car {}

let car: Car = new Car();

// Object literal - assign types to object paramters
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

point.x = 10;

const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        long: 15
    }, 
    setAge(age: number): void {
        this.age = age;
    }
}


// destructure object property
// const { age } : { age: number} = profile;

// with inference
// const { age } = profile;

// multiple properties
const { age, name}: {age: number; name: string} = profile

// without inference
// const { coords: {lat, long} } : {coords: {lat: number; long: number}} = profile;

// with inference
const { coords: {lat, long} } = profile;


// Functions
// annotation expect (i: number) and return void
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// specified return type number
const add = (a: number, b: number): number => {
	return a + b;
};

// type inference from return statement. TS knows type is string
// bad practice. Always set return type
const myString = (a: number, b: number) => {
	let result = a + b;
	return `result is: ${result}`;
};

// good practice
const myString2 = (a: number, b: number): string => {
	let result = a + b;
	return `result is: ${result}`;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
	// can return undefined, but nothing else
};

const throwError = (message: string): never => {
	throw new Error(message);
	// function will never reach the end, because when we
	// throw an error, the function breaks, so there will
	// never be a return statement
};
const throwError2 = (message: string): string => {
	// return string if we potentially could reach the end
	if (!message) {
		throw new Error(message);
	}
	return message;
};

// if type declaration and initialization is on the same line
// typescript will figure out the type automatically through inteference

let myName = "lasse"; // typescript knows this is a string throug inference

let myName2;
// this is type any, since declaration and initialization doesn't happen in same line
myName2 = "peter";

/* WHEN TO USE ANNOTATIONS */
// 1) Functions that returns the any type
const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json); // type any
const coordinates: { x: number; y: number } = JSON.parse(json); // type any


// Destructuring with annotation

const todaysWeater = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (inputObj: {date: Date, weather: string}) : void => {
    console.log(inputObj.date);
    console.log(inputObj.weather)
}
                                // destructure     annotation                       return
const logWeatherDestructuring = ({date, weather} : {date: Date, weather: string}) : void => {
    console.log(date);
    console.log(weather)
}

logWeather(todaysWeater);