'use strict';

class PancakeFile {
    constructor(fs) {
        this._fs = fs;
    }

    read(filename) {
        let text = this._fs.readFileSync(filename, 'utf8');   
        let lines = text.split('\n');
        if(lines.length === 0) {
            throw new Error("Invalid file size")
        }

        let input = [];
        let count = parseInt(lines.shift());
        for(let loop = 0; loop < count; loop++) {
            let tokens = lines[loop].split(' ');
            input.push({index: loop + 1, data: tokens[0], flipperSize: parseInt(tokens[1])});
        }
        return input;
    }

    write(filename, data) {

        var fileData = data.map(d => {
            var result = d.success ? d.result : "IMPOSSIBLE";
            return `Case #${d.index}: ${result}`;
        }).join('\n');
        this._fs.writeFile(filename, fileData, 'utf8');
    }
}

module.exports = PancakeFile;