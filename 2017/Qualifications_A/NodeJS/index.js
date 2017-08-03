'use strict';

var fs = require('fs');
var PancakeFile = require('./PancakeFile');
var PancakeRunner = require('./PancakeRunner');

var inputFileName = process.argv[2];

var pancakeFile = new PancakeFile(fs);
var runner = new PancakeRunner();

var runs = pancakeFile.read(inputFileName);
var res = runs.map(r => runner.process(r));

pancakeFile.write('./result.out', res);

process.exit();