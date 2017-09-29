var fs = require('fs');
var StallsCalculator = require('./stallsCalculator');

let filenameIn = process.argv[2];
let filenameOut = process.argv[3];

// Read the file
let text = fs.readFileSync(filenameIn, 'utf8');
let data = text.split('\n');
let count = parseInt(data.shift());
data = data.map(x => {
    let vals = x.split(' ');
    return { stalls: parseInt(vals[0]), people: parseInt(vals[1]) };
});

// Process data
let results = [];
var calculator = new StallsCalculator();
for (let i = 0; i < count; i++) {
    let result = calculator.calculate(data[i].stalls, data[i].people);
    results.push(`Case #${i + 1}: ${result[0]} ${result[1]}`)
}

// Save results
let fileData = results.join('\n');
fs.writeFileSync(filenameOut, fileData, 'utf8');

process.exit();