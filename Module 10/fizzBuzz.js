var output = [];
var counter = 1;

function fizzBuzz() {
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log("fizzBuzz");
        output.push("fizzBuzz");
    } else if (counter % 3 === 0) {
        console.log("fizz");
        output.push("fizz");
    } else if (counter % 5 === 0) {
        console.log("buzz");
        output.push("buzz");
    } else {
        output.push(counter);
        counter++;
        console.log(output);
    }
}