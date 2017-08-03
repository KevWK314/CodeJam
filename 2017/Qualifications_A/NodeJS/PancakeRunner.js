class PancakeRunner {
    constructor() {
        this.happy = '+';
        this.notHappy = '-'; 
    }

    process(run) {
        let flipperSize = run.flipperSize;
        let data = [...run.data];

        let count = 0;
        let size = data.length - flipperSize + 1;
        for(let loop = 0; loop < size; loop++) {
            if(data[loop] === this.notHappy) {
                this.flip(data, flipperSize, loop);
                count++;
            }
        }
            
        return {index: run.index, success: this.isAllHappy(data), result: count };
    }

    flip(data, flipperSize, startIndex) {
        for(let loop = startIndex; loop < startIndex + flipperSize; loop++) {
            data[loop] = data[loop] === this.notHappy ?
                this.happy : this.notHappy;
        }
    }

    isAllHappy(data) {
        return data.every(x => x === this.happy);
    }
}

module.exports = PancakeRunner;