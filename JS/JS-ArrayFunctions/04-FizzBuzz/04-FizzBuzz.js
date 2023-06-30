for (let i = 1; i <= 100; i++) {

    // use else if to remove dublicates
    if((i % 15) === 0) console.log(i + ' : FizzBuzz')
    else if((i % 3) === 0) console.log(i + ' : Fizz')
    else if((i % 5) === 0) console.log(i + ' : Buzz')
    else console.log(i);
    // fordi 3 og 5 går op hver 15 
}