// Simple calculator TDA KATA

function Add(numbers) {
    if (numbers == '') { // if input string is empty, return 0
        return 0;
    }

    let delimiter = ','; // default delimiter is comma
    if (numbers.startsWith('//')) { // check if a custom delimiter is specified
        delimiter = numbers[2];
        numbers = numbers.substring(4);
    }

    // replace new lines and custom delimiter with comma, then split the string into an array
    let numArray = numbers.replace(/\n/g, delimiter).split(delimiter);

    let sum = 0;
    let negativeNums = [];

    // loop through array, parse each number and add to sum
    for (let i = 0; i < numArray.length; i++) {
        let num = parseInt(numArray[i]);
        if (num < 0) {
            negativeNums.push(num);
        }
        sum += num;
    }

    // check for negative numbers and throw exception
    if (negativeNums.length > 0) {
        throw "negatives not allowed: " + negativeNums.join(', ');
    }

    return sum;
}


// tested the following test cases


console.log(Add('')); // expected output: 0
console.log(Add('1')); // expected output: 1
console.log(Add('1,2')); // expected output: 3
console.log(Add('1\n2,3')); // expected output: 6
console.log(Add('//;\n1;2')); // expected output: 3
console.log(Add('-1,2,-3')); // expected output: throws "negatives not allowed: -1, -3"
