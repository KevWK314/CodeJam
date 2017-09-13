var fs = require('fs');
var TidyNumberCalculator = require('./tidyNumberCalculator');

let filenameIn = process.argv[2];
let filenameOut = process.argv[3];

// Read the file
let text = fs.readFileSync(filenameIn, 'utf8');
let data = text.split('\n');
let count = parseInt(data.shift());

// Process data
let results = [];
var calculator = new TidyNumberCalculator();
for(let i = 0; i < count; i++) {
    let result = calculator.calculate(data[i]);
    results.push(`Case #${i+1}: ${result}`)
}

// Save results
let fileData = results.join('\n');
fs.writeFileSync(filenameOut, fileData, 'utf8');

process.exit();