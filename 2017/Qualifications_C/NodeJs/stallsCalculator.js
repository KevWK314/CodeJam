class StallsCalculator {

    calculate(stalls, people) {
        let data = [{ stalls: stalls, count: 1 }];

        let remaining = people;

        while(remaining > 0) {
            // Split largest
            var res = this.tryFit(data[0].stalls);
            remaining -= Math.min(data[0].count, remaining);
            if(remaining <= 0) {
                return [Math.max(...res), Math.min(...res)];
            }

            this.incrementData(data, res[1], data[0].count);
            this.incrementData(data, res[0], data[0].count);
            data.shift();
        }
    }

    incrementData(data, stalls, count) {
        if(stalls === 0) {
            return;
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].stalls === stalls) {
                data[i].count += count;
                return;
            }
        }
        data.push({ stalls: stalls, count: count })
    }

    tryFit(stalls) {
        if (stalls === 1) {
            return [0, 0];
        }

        let half = Math.floor(stalls / 2);
        return stalls % 2 == 0 ?
            [half - 1, half] :
            [half, half]
    }
}

module.exports = StallsCalculator;